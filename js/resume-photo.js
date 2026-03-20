/*
 * PHOTO + SIGN ADDON
 *
 * Features:
 *   • Border colour, border width, and border-radius controls for profile photo
 *     → panel is hidden until a photo is uploaded, then shown below the strip
 *   • Remove Background button for signature (Canvas-based white/light pixel erasure)
 *     → panel is hidden until a signature is uploaded
 *
 * KEY FIX: UI panels (_buildPhotoControls / _buildRemoveBgBtn) are now built
 * eagerly on DOMContentLoaded — independent of renderResume being ready.
 * Only _patchRenderResume() waits for renderResume to exist.
 */

(function () {
  "use strict";
console.log("edeef")
  /* ════════════════════════════════════════════════
     STATE
  ════════════════════════════════════════════════ */
  let photoDataURL    = null;
  let signDataURL     = null;       // current (possibly bg-removed) data URL
  let signOriginalURL = null;       // always the unmodified original

  const photoStyle = {
    borderColor : "#ffffff",
    borderWidth : 3,    // px
    borderRadius: 50,   // % — 50 = circle, 0 = square
  };

  /* ════════════════════════════════════════════════
     INIT — build UI panels immediately on DOM ready,
     patch renderResume separately (needs retry loop)
  ════════════════════════════════════════════════ */
  window.addEventListener("DOMContentLoaded", function () {
    _injectStyles();
    _buildPhotoControls();   // always safe — only needs #photo-strip in DOM
    _buildRemoveBgBtn();     // always safe — only needs #sign-strip in DOM

    // Patch renderResume separately — it may not exist yet
    _waitForRenderResume();
  });

  function _waitForRenderResume () {
    if (typeof renderResume === "function") {
      _patchRenderResume();
    } else {
      setTimeout(_waitForRenderResume, 100);
    }
  }

  /* ════════════════════════════════════════════════
     PHOTO HANDLER
  ════════════════════════════════════════════════ */
  window.handlePhoto = function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
      photoDataURL = ev.target.result;
      _syncPhotoThumb(file.name);
      if (typeof qRender === "function") qRender();
      if (typeof toast   === "function") toast("✓ Photo added!");
    };
    reader.readAsDataURL(file);
  };

  window.removePhoto = function () {
    photoDataURL = null;
    _setEl("photo-thumb",          el => el.src = "");
    _setEl("photo-input",          el => el.value = "");
    _stripVisible("photo-strip",   false);
    _panelVisible("photo-style-controls", false);
    if (typeof qRender === "function") qRender();
    if (typeof toast   === "function") toast("Photo removed.");
  };

  function _syncPhotoThumb (filename) {
    _setEl("photo-thumb",  el => el.src = photoDataURL);
    _setEl("photo-name",   el => { if (filename) el.textContent = filename; });
    _stripVisible("photo-strip",          true);
    _panelVisible("photo-style-controls", true);   // ← reveal controls
    _applyPhotoStyleToThumb();
  }

  function _applyPhotoStyleToThumb () {
    const thumb = document.getElementById("photo-thumb");
    if (!thumb) return;
    thumb.style.border       = `${photoStyle.borderWidth}px solid ${photoStyle.borderColor}`;
    thumb.style.borderRadius = `${photoStyle.borderRadius}%`;
  }

  /* ── Build photo border/radius controls ── */
  function _buildPhotoControls () {
    if (document.getElementById("photo-style-controls")) return;
    const anchor = document.getElementById("photo-strip");
    if (!anchor) return;

    const wrap = document.createElement("div");
    wrap.id            = "photo-style-controls";
    wrap.className     = "psa-panel";
    wrap.style.display = "none";   // hidden until photo uploaded

    wrap.innerHTML = `
      <div class="psa-panel-title">📷 Photo Style</div>
      <div class="psa-row">
        <label class="psa-lbl">Border colour</label>
        <input type="color" id="psc-color" value="${photoStyle.borderColor}" />
      </div>
      <div class="psa-row">
        <label class="psa-lbl">Border width</label>
        <input type="range" id="psc-bw" min="0" max="12" step="1" value="${photoStyle.borderWidth}" />
        <span class="psa-val" id="psc-bw-val">${photoStyle.borderWidth}px</span>
      </div>
      <div class="psa-row">
        <label class="psa-lbl">Border radius</label>
        <input type="range" id="psc-br" min="0" max="50" step="1" value="${photoStyle.borderRadius}" />
        <span class="psa-val" id="psc-br-val">${photoStyle.borderRadius}%</span>
      </div>`;

    anchor.insertAdjacentElement("afterend", wrap);

    document.getElementById("psc-color").addEventListener("input", function () {
      photoStyle.borderColor = this.value;
      _applyPhotoStyleToThumb();
      if (typeof qRender === "function") qRender();
    });
    document.getElementById("psc-bw").addEventListener("input", function () {
      photoStyle.borderWidth = +this.value;
      document.getElementById("psc-bw-val").textContent = this.value + "px";
      _applyPhotoStyleToThumb();
      if (typeof qRender === "function") qRender();
    });
    document.getElementById("psc-br").addEventListener("input", function () {
      photoStyle.borderRadius = +this.value;
      document.getElementById("psc-br-val").textContent = this.value + "%";
      _applyPhotoStyleToThumb();
      if (typeof qRender === "function") qRender();
    });
  }

  /* ════════════════════════════════════════════════
     SIGNATURE HANDLER
  ════════════════════════════════════════════════ */
  window.handleSign = function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
      signDataURL     = ev.target.result;
      signOriginalURL = ev.target.result;
      _syncSignThumb(file.name);
      if (typeof qRender === "function") qRender();
      if (typeof toast   === "function") toast("✓ Signature added!");
    };
    reader.readAsDataURL(file);
  };

  window.removeSign = function () {
    signDataURL     = null;
    signOriginalURL = null;
    _setEl("sign-thumb",  el => el.src = "");
    _setEl("sign-input",  el => el.value = "");
    _stripVisible("sign-strip", false);
    _syncRemoveBgPanel();
    if (typeof qRender === "function") qRender();
    if (typeof toast   === "function") toast("Signature removed.");
  };

  function _syncSignThumb (filename) {
    _setEl("sign-thumb", el => el.src = signDataURL);
    _setEl("sign-name",  el => { if (filename) el.textContent = filename; });
    _stripVisible("sign-strip", true);
    _syncRemoveBgPanel();
  }

  /* ── Build signature remove-bg controls ── */
  function _buildRemoveBgBtn () {
    if (document.getElementById("sign-rmbg-wrap")) return;
    const anchor = document.getElementById("sign-strip");
    if (!anchor) return;

    const wrap = document.createElement("div");
    wrap.id            = "sign-rmbg-wrap";
    wrap.className     = "psa-panel";
    wrap.style.display = "none";   // hidden until signature uploaded

    wrap.innerHTML = `
      <div class="psa-panel-title">✍️ Signature Tools</div>
      <div class="psa-row" style="flex-wrap:wrap;gap:6px;">
        <button class="btn btn-secondary btn-sm" id="btn-rmbg" onclick="removeSignBackground()">
          🪄 Remove White Background
        </button>
        <button class="btn btn-secondary btn-sm" id="btn-rmbg-undo" onclick="undoRemoveBackground()" style="display:none">
          ↩ Restore Original
        </button>
      </div>
      <div class="psa-row">
        <label class="psa-lbl">Threshold</label>
        <input type="range" id="rmbg-thresh" min="10" max="240" value="200" step="5" />
        <span class="psa-val" id="rmbg-thresh-val">200</span>
      </div>`;

    anchor.insertAdjacentElement("afterend", wrap);

    document.getElementById("rmbg-thresh").addEventListener("input", function () {
      document.getElementById("rmbg-thresh-val").textContent = this.value;
    });
  }

  function _syncRemoveBgPanel () {
    _panelVisible("sign-rmbg-wrap", !!signDataURL);
    // Always reset undo button when sign state changes
    _setEl("btn-rmbg-undo", el => el.style.display = "none");
  }

  /* ── Canvas-based background removal ── */
  window.removeSignBackground = function () {
    if (!signDataURL) return;
    const threshold = +(document.getElementById("rmbg-thresh")?.value ?? 200);

    const img = new Image();
    img.onload = function () {
      const canvas  = document.createElement("canvas");
      canvas.width  = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d       = imgData.data;

      for (let i = 0; i < d.length; i += 4) {
        if (d[i] >= threshold && d[i+1] >= threshold && d[i+2] >= threshold) {
          d[i+3] = 0;   // transparent
        }
      }

      ctx.putImageData(imgData, 0, 0);
      signDataURL = canvas.toDataURL("image/png");

      _setEl("sign-thumb",    el => el.src = signDataURL);
      _setEl("btn-rmbg-undo", el => el.style.display = "inline-flex");

      if (typeof qRender === "function") qRender();
      if (typeof toast   === "function") toast("✓ Background removed!");
    };
    img.src = signOriginalURL;
  };

  window.undoRemoveBackground = function () {
    if (!signOriginalURL) return;
    signDataURL = signOriginalURL;
    _setEl("sign-thumb",    el => el.src = signDataURL);
    _setEl("btn-rmbg-undo", el => el.style.display = "none");
    if (typeof qRender === "function") qRender();
    if (typeof toast   === "function") toast("↩ Original signature restored.");
  };

  /* ════════════════════════════════════════════════
     PATCH renderResume()
  ════════════════════════════════════════════════ */
  function _patchRenderResume () {
    const _orig = renderResume;

    window.renderResume = function () {
      _orig.apply(this, arguments);

      const resumeBody = document.getElementById("resume-body");
      if (!resumeBody) return;

      /* ── Inject photo ── */
      if (photoDataURL) {
        const wrap   = resumeBody.querySelector(".rt-wrap");
        if (!wrap) return;
        const header = wrap.querySelector(".rt-header");
        if (!header) return;

        const borderCSS = `${photoStyle.borderWidth}px solid ${photoStyle.borderColor}`;
        const radiusCSS = `${photoStyle.borderRadius}%`;

        const existing = header.querySelector(".rt-photo");
        if (existing) {
          existing.src                = photoDataURL;
          existing.style.border       = borderCSS;
          existing.style.borderRadius = radiusCSS;
        } else {
          const nameEl    = header.querySelector(".rt-name");
          const contactEl = header.querySelector(".rt-contact");
          if (!nameEl) return;

          const photoImg              = document.createElement("img");
          photoImg.src                = photoDataURL;
          photoImg.alt                = "Profile photo";
          photoImg.className          = "rt-photo";
          photoImg.style.border       = borderCSS;
          photoImg.style.borderRadius = radiusCSS;

          const isSidebar = getComputedStyle(header).gridColumn === "1 / -1";

          if (isSidebar) {
            header.insertBefore(photoImg, nameEl);
          } else {
            const wrapper       = document.createElement("div");
            wrapper.className   = "rt-header-with-photo";
            const textBlock     = document.createElement("div");
            textBlock.className = "rt-header-text";

            Array.from(header.children).forEach(function (child) {
              if (child !== contactEl) textBlock.appendChild(child);
            });

            wrapper.appendChild(photoImg);
            wrapper.appendChild(textBlock);
            header.insertBefore(wrapper, contactEl || header.firstChild);
            if (contactEl) header.appendChild(contactEl);
          }
        }
      }

      /* ── Inject signature ── */
      if (signDataURL) {
        const wrap = resumeBody.querySelector(".rt-wrap");
        if (!wrap) return;

        const existing = wrap.querySelector(".rt-sign");
        if (existing) {
          existing.src = signDataURL;
          return;
        }

        const signWrap         = document.createElement("div");
        signWrap.className     = "rt-sign-wrap";
        const secTitle         = document.createElement("div");
        secTitle.className     = "rt-section-title";
        secTitle.textContent   = "Signature";
        const signImg          = document.createElement("img");
        signImg.src            = signDataURL;
        signImg.alt            = "Signature";
        signImg.className      = "rt-sign";

        signWrap.appendChild(secTitle);
        signWrap.appendChild(signImg);

        const mainDiv = wrap.querySelector(".rt-main");
        if (mainDiv) mainDiv.appendChild(signWrap);
        else wrap.appendChild(signWrap);
      }
    };
  }

  /* ════════════════════════════════════════════════
     HELPERS
  ════════════════════════════════════════════════ */
  function _setEl (id, fn) {
    const el = document.getElementById(id);
    if (el) fn(el);
  }
  function _stripVisible (id, visible) {
    const el = document.getElementById(id);
    if (!el) return;
    if (visible) el.classList.add("visible");
    else el.classList.remove("visible");
  }
  function _panelVisible (id, visible) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = visible ? "flex" : "none";
  }

  /* ════════════════════════════════════════════════
     STYLES
  ════════════════════════════════════════════════ */
  function _injectStyles () {
    if (document.getElementById("psa-css")) return;
    const style = document.createElement("style");
    style.id = "psa-css";
    style.textContent = `
      /* Shared panel wrapper */
      .psa-panel {
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
        padding: 12px 14px;
        background: var(--surface, #f8f8f8);
        border: 1px solid var(--border, #e5e5e5);
        border-radius: 10px;
        font-size: 0.8rem;
      }
      .psa-panel-title {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--muted, #888);
        text-transform: uppercase;
        letter-spacing: 0.04em;
        margin-bottom: 2px;
      }
      .psa-row {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .psa-lbl {
        color: var(--muted, #888);
        font-size: 0.78rem;
        white-space: nowrap;
        min-width: 100px;
      }
      .psa-val {
        font-size: 0.78rem;
        font-variant-numeric: tabular-nums;
        color: var(--muted, #888);
        min-width: 32px;
        text-align: right;
      }
      .psa-panel input[type="color"] {
        width: 36px;
        height: 28px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        padding: 1px;
        background: none;
        flex-shrink: 0;
      }
      .psa-panel input[type="range"] {
        flex: 1;
        accent-color: var(--primary, #C8502A);
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
  }

})();
/*
 * PHOTO + SIGN ADDON
 *
 * FIX: Controls panel is now appended inside the .form-group that wraps
 * #photo-strip, not after the hidden #photo-strip element itself.
 * This ensures it is never clipped/hidden by a parent's overflow or display rules.
 */

(function () {
  "use strict";

  /* ════════════════════════════════════════════════
     STATE
  ════════════════════════════════════════════════ */
  let photoDataURL    = null;
  let signDataURL     = null;
  let signOriginalURL = null;

  const photoStyle = {
    borderColor : "#ffffff",
    borderWidth : 3,
    borderRadius: 50,
  };

  /* ════════════════════════════════════════════════
     INIT
  ════════════════════════════════════════════════ */
  window.addEventListener("DOMContentLoaded", function () {
    _injectStyles();
    _buildPhotoControls();
    _buildRemoveBgBtn();
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
    _setEl("photo-thumb",  el => el.src = "");
    _setEl("photo-input",  el => el.value = "");
    _stripVisible("photo-strip", false);
    _panelVisible("photo-style-controls", false);
    if (typeof qRender === "function") qRender();
    if (typeof toast   === "function") toast("Photo removed.");
  };

  function _syncPhotoThumb (filename) {
    _setEl("photo-thumb", el => el.src = photoDataURL);
    _setEl("photo-name",  el => { if (filename) el.textContent = filename; });
    _stripVisible("photo-strip", true);
    _panelVisible("photo-style-controls", true);
    _applyPhotoStyleToThumb();
  }

  function _applyPhotoStyleToThumb () {
    const thumb = document.getElementById("photo-thumb");
    if (!thumb) return;
    thumb.style.border       = `${photoStyle.borderWidth}px solid ${photoStyle.borderColor}`;
    thumb.style.borderRadius = `${photoStyle.borderRadius}%`;
  }

  /* ── Build photo controls ──
     Appended as a child of the .form-group that contains #photo-strip.
     This guarantees it sits in the normal document flow and is never
     hidden by a parent's display/overflow rule.
  ── */
  function _buildPhotoControls () {
    if (document.getElementById("photo-style-controls")) return;

    // Walk up from #photo-strip to find its .form-group parent
    const strip = document.getElementById("photo-strip");
    if (!strip) {
      console.warn("[PSA] #photo-strip not found — retrying in 200ms");
      setTimeout(_buildPhotoControls, 200);
      return;
    }

    // Anchor = closest .form-group ancestor, or fall back to strip's parentNode
    const anchor = strip.closest(".form-group") || strip.parentNode;

    const wrap = document.createElement("div");
    wrap.id            = "photo-style-controls";
    wrap.className     = "psa-panel";
    wrap.style.display = "none";

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

    // Append inside the form-group so it flows naturally after the strip
    anchor.appendChild(wrap);

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
    _setEl("sign-thumb", el => el.src = "");
    _setEl("sign-input", el => el.value = "");
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

  /* ── Build signature remove-bg controls ──
     Same pattern: appended inside the .form-group of #sign-strip.
  ── */
  function _buildRemoveBgBtn () {
    if (document.getElementById("sign-rmbg-wrap")) return;

    const strip = document.getElementById("sign-strip");
    if (!strip) {
      console.warn("[PSA] #sign-strip not found — retrying in 200ms");
      setTimeout(_buildRemoveBgBtn, 200);
      return;
    }

    const anchor = strip.closest(".form-group") || strip.parentNode;

    const wrap = document.createElement("div");
    wrap.id            = "sign-rmbg-wrap";
    wrap.className     = "psa-panel";
    wrap.style.display = "none";

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

    anchor.appendChild(wrap);

    document.getElementById("rmbg-thresh").addEventListener("input", function () {
      document.getElementById("rmbg-thresh-val").textContent = this.value;
    });
  }

  function _syncRemoveBgPanel () {
    _panelVisible("sign-rmbg-wrap", !!signDataURL);
    _setEl("btn-rmbg-undo", el => el.style.display = "none");
  }

  /* ── Canvas-based background removal ── */
  window.removeSignBackground = function () {
    if (!signDataURL) return;
    const threshold = +(document.getElementById("rmbg-thresh")?.value ?? 200);

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
      try {
        const canvas  = document.createElement("canvas");
        canvas.width  = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d       = imgData.data;

        for (let i = 0; i < d.length; i += 4) {
          if (d[i] >= threshold && d[i+1] >= threshold && d[i+2] >= threshold) {
            d[i+3] = 0;
          }
        }

        ctx.putImageData(imgData, 0, 0);
        signDataURL = canvas.toDataURL("image/png");

        _setEl("sign-thumb",    el => el.src = signDataURL);
        _setEl("btn-rmbg-undo", el => el.style.display = "inline-flex");

        if (typeof qRender === "function") qRender();
        if (typeof toast   === "function") toast("✓ Background removed!");
      } catch (err) {
        console.error("[PSA] Canvas error:", err);
        if (typeof toast === "function") toast("❌ Could not process image: " + err.message);
      }
    };
    img.onerror = function () {
      if (typeof toast === "function") toast("❌ Image failed to load.");
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

      /* ── Photo ── */
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

      /* ── Signature ── */
      if (signDataURL) {
        const wrap = resumeBody.querySelector(".rt-wrap");
        if (!wrap) return;

        const existing = wrap.querySelector(".rt-sign");
        if (existing) {
          existing.src = signDataURL;
          return;
        }

        const signWrap       = document.createElement("div");
        signWrap.className   = "rt-sign-wrap";
        const secTitle       = document.createElement("div");
        secTitle.className   = "rt-section-title";
        secTitle.textContent = "Signature";
        const signImg        = document.createElement("img");
        signImg.src          = signDataURL;
        signImg.alt          = "Signature";
        signImg.className    = "rt-sign";

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
    el.classList.toggle("visible", visible);
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
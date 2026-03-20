/*
 * photo-sign-addon.js
 *
 * No IIFE — flat global functions, easy to read and debug.
 * Panels must already exist in index.html with id="photo-style-controls"
 * and id="sign-rmbg-wrap" — this script only shows/hides them.
 */

/* ════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════ */
var photoDataURL = null;
var signDataURL = null;
var signOriginalURL = null;

var photoStyle = {
  borderColor: "#ffffff",
  borderWidth: 3,
  borderRadius: 50,
};

/* ════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", function () {
  psaInjectStyles();
  psaWaitForRenderResume();
});

function psaWaitForRenderResume() {
  if (typeof renderResume === "function") {
    psaPatchRenderResume();
  } else {
    setTimeout(psaWaitForRenderResume, 100);
  }
}

/* ════════════════════════════════════════════════
   PHOTO HANDLER
════════════════════════════════════════════════ */
function handlePhoto(e) {
  var file = e.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function (ev) {
    photoDataURL = ev.target.result;
    document.getElementById("photo-thumb").src = photoDataURL;
    document.getElementById("photo-name").textContent = file.name;
    document.getElementById("photo-strip").classList.add("visible");
    document.getElementById("photo-style-controls").style.display = "flex";
    psaApplyPhotoStyle();
    if (typeof qRender === "function") qRender();
    if (typeof toast === "function") toast("✓ Photo added!");
  };
  reader.readAsDataURL(file);
}

function removePhoto() {
  photoDataURL = null;
  document.getElementById("photo-thumb").src = "";
  document.getElementById("photo-input").value = "";
  document.getElementById("photo-strip").classList.remove("visible");
  document.getElementById("photo-style-controls").style.display = "none";
  if (typeof qRender === "function") qRender();
  if (typeof toast === "function") toast("Photo removed.");
}

function psaApplyPhotoStyle() {
  var thumb = document.getElementById("photo-thumb");
  if (!thumb) return;
  thumb.style.border =
    photoStyle.borderWidth + "px solid " + photoStyle.borderColor;
  thumb.style.borderRadius = photoStyle.borderRadius + "%";
}

/* Called from oninput on the HTML range/color inputs */
function psaColorChange(val) {
  photoStyle.borderColor = val;
  psaApplyPhotoStyle();
  if (typeof qRender === "function") qRender();
}
function psaBwChange(val) {
  photoStyle.borderWidth = +val;
  document.getElementById("psc-bw-val").textContent = val + "px";
  psaApplyPhotoStyle();
  if (typeof qRender === "function") qRender();
}
function psaBrChange(val) {
  photoStyle.borderRadius = +val;
  document.getElementById("psc-br-val").textContent = val + "%";
  psaApplyPhotoStyle();
  if (typeof qRender === "function") qRender();
}

/* ════════════════════════════════════════════════
   SIGNATURE HANDLER
════════════════════════════════════════════════ */
function handleSign(e) {
  var file = e.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function (ev) {
    signDataURL = ev.target.result;
    signOriginalURL = ev.target.result;
    document.getElementById("sign-thumb").src = signDataURL;
    document.getElementById("sign-name").textContent = file.name;
    document.getElementById("sign-strip").classList.add("visible");
    document.getElementById("sign-rmbg-wrap").style.display = "flex";
    document.getElementById("btn-rmbg-undo").style.display = "none";
    if (typeof qRender === "function") qRender();
    if (typeof toast === "function") toast("✓ Signature added!");
  };
  reader.readAsDataURL(file);
}

function removeSign() {
  signDataURL = null;
  signOriginalURL = null;
  document.getElementById("sign-thumb").src = "";
  document.getElementById("sign-input").value = "";
  document.getElementById("sign-strip").classList.remove("visible");
  document.getElementById("sign-rmbg-wrap").style.display = "none";
  if (typeof qRender === "function") qRender();
  if (typeof toast === "function") toast("Signature removed.");
}

function removeSignBackground() {
  if (!signDataURL) return;
  var threshold = +(document.getElementById("rmbg-thresh").value || 200);

  var img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function () {
    try {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var d = imgData.data;

      for (var i = 0; i < d.length; i += 4) {
        if (
          d[i] >= threshold &&
          d[i + 1] >= threshold &&
          d[i + 2] >= threshold
        ) {
          d[i + 3] = 0;
        }
      }

      ctx.putImageData(imgData, 0, 0);
      signDataURL = canvas.toDataURL("image/png");

      document.getElementById("sign-thumb").src = signDataURL;
      document.getElementById("btn-rmbg-undo").style.display = "inline-flex";

      if (typeof qRender === "function") qRender();
      if (typeof toast === "function") toast("✓ Background removed!");
    } catch (err) {
      console.error("Canvas error:", err);
      if (typeof toast === "function") toast("❌ " + err.message);
    }
  };
  img.onerror = function () {
    if (typeof toast === "function") toast("❌ Image failed to load.");
  };
  img.src = signOriginalURL;
}

function undoRemoveBackground() {
  if (!signOriginalURL) return;
  signDataURL = signOriginalURL;
  document.getElementById("sign-thumb").src = signDataURL;
  document.getElementById("btn-rmbg-undo").style.display = "none";
  if (typeof qRender === "function") qRender();
  if (typeof toast === "function") toast("↩ Original signature restored.");
}

/* ════════════════════════════════════════════════
   PATCH renderResume()
════════════════════════════════════════════════ */
function psaPatchRenderResume() {
  var _orig = renderResume;

  window.renderResume = function () {
    _orig.apply(this, arguments);

    var resumeBody = document.getElementById("resume-body");
    if (!resumeBody) return;

    /* ── Photo ── */
    if (photoDataURL) {
      var wrap = resumeBody.querySelector(".rt-wrap");
      if (!wrap) return;
      var header = wrap.querySelector(".rt-header");
      if (!header) return;

      var borderCSS =
        photoStyle.borderWidth + "px solid " + photoStyle.borderColor;
      var radiusCSS = photoStyle.borderRadius + "%";

      var existing = header.querySelector(".rt-photo");
      if (existing) {
        existing.src = photoDataURL;
        existing.style.border = borderCSS;
        existing.style.borderRadius = radiusCSS;
      } else {
        var nameEl = header.querySelector(".rt-name");
        var contactEl = header.querySelector(".rt-contact");
        if (!nameEl) return;

        var photoImg = document.createElement("img");
        photoImg.src = photoDataURL;
        photoImg.alt = "Profile photo";
        photoImg.className = "rt-photo";
        photoImg.style.border = borderCSS;
        photoImg.style.borderRadius = radiusCSS;

        var isSidebar = getComputedStyle(header).gridColumn === "1 / -1";

        if (isSidebar) {
          header.insertBefore(photoImg, nameEl);
        } else {
          var wrapper = document.createElement("div");
          wrapper.className = "rt-header-with-photo";
          var textBlock = document.createElement("div");
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
      var wrap2 = resumeBody.querySelector(".rt-wrap");
      if (!wrap2) return;

      var existingSign = wrap2.querySelector(".rt-sign");
      if (existingSign) {
        existingSign.src = signDataURL;
        return;
      }

      var signWrap = document.createElement("div");
      signWrap.className = "rt-sign-wrap";
      var secTitle = document.createElement("div");
      secTitle.className = "rt-section-title";
      secTitle.textContent = "Signature";
      var signImg = document.createElement("img");
      signImg.src = signDataURL;
      signImg.alt = "Signature";
      signImg.className = "rt-sign";

      signWrap.appendChild(secTitle);
      signWrap.appendChild(signImg);

      var mainDiv = wrap2.querySelector(".rt-main");
      if (mainDiv) mainDiv.appendChild(signWrap);
      else wrap2.appendChild(signWrap);
    }
  };
}

/* ════════════════════════════════════════════════
   STYLES
════════════════════════════════════════════════ */
function psaInjectStyles() {
  if (document.getElementById("psa-css")) return;
  var style = document.createElement("style");
  style.id = "psa-css";
  style.textContent = [
    ".psa-panel { flex-direction:column; gap:10px; margin-top:10px; padding:12px 14px;",
    "  background:var(--surface,#f8f8f8); border:1px solid var(--border,#e5e5e5);",
    "  border-radius:10px; font-size:0.8rem; }",
    ".psa-panel-title { font-size:0.75rem; font-weight:600; color:var(--muted,#888);",
    "  text-transform:uppercase; letter-spacing:0.04em; }",
    ".psa-row { display:flex; align-items:center; gap:10px; }",
    ".psa-lbl { color:var(--muted,#888); font-size:0.78rem; white-space:nowrap; min-width:100px; }",
    ".psa-val { font-size:0.78rem; color:var(--muted,#888); min-width:32px; text-align:right; }",
    ".psa-panel input[type=color] { width:36px; height:28px; border:none; border-radius:6px;",
    "  cursor:pointer; padding:1px; background:none; flex-shrink:0; }",
    ".psa-panel input[type=range] { flex:1; accent-color:var(--primary,#C8502A); cursor:pointer; }",
  ].join("\n");
  document.head.appendChild(style);
}

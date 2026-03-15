const THEMES = [
        {
          name: "Classic Crimson",
          layout: "single",
          color: "#c8502a",
          isDefault: true,
          css: `
.rt-wrap{padding:32px;font-family:'Georgia',serif;color:#111;background:#fff;min-height:100%;}
.rt-header{border-bottom:2px solid #c8502a;padding-bottom:14px;margin-bottom:18px;}
.rt-name{font-size:2rem;font-weight:700;letter-spacing:-.4px;color:#111;}
.rt-title{color:#c8502a;font-size:.88rem;margin:5px 0 7px;font-weight:600;text-transform:uppercase;letter-spacing:.07em;font-family:'DM Sans',sans-serif;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.76rem;color:#666;font-family:'DM Sans',sans-serif;}
.rt-section-title{font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#c8502a;border-bottom:1.5px solid #c8502a;padding-bottom:3px;margin:18px 0 10px;font-family:'DM Sans',sans-serif;}
.rt-summary{font-size:.88rem;line-height:1.78;color:#333;font-family:'DM Sans',sans-serif;}
.rt-entry{margin-bottom:12px;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;align-items:baseline;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#111;}
.rt-entry-company{color:#555;font-size:.82rem;font-family:'DM Sans',sans-serif;}
.rt-entry-date{font-size:.74rem;color:#999;white-space:nowrap;font-family:'DM Sans',sans-serif;}
.rt-entry-desc{font-size:.83rem;line-height:1.68;margin-top:4px;color:#333;font-family:'DM Sans',sans-serif;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#fdf0ec;color:#c8502a;border-radius:100px;padding:2px 9px;font-size:.73rem;border:1px solid #f5c4b0;font-family:'DM Sans',sans-serif;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:7px;}
.rt-pill{background:#f8f5f0;color:#444;border-radius:6px;padding:2px 9px;font-size:.75rem;border:1px solid #e0dbd3;font-family:'DM Sans',sans-serif;}`,
        },
        {
          name: "Slate Sidebar",
          layout: "sidebar",
          color: "#1e293b",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:200px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#fff;}
.rt-header{background:#1e293b;color:#fff;padding:26px 22px 20px;grid-column:1/-1;}
.rt-name{font-size:1.85rem;font-weight:700;color:#fff;letter-spacing:-.3px;}
.rt-title{color:#94a3b8;font-size:.83rem;margin:5px 0 9px;text-transform:uppercase;letter-spacing:.08em;}
.rt-contact{display:flex;flex-wrap:wrap;gap:10px;font-size:.74rem;color:#94a3b8;}
.rt-sidebar{background:#f1f5f9;padding:20px 16px;border-right:1px solid #e2e8f0;}
.rt-main{padding:20px 24px;}
.rt-section-title{font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#1e293b;border-bottom:2px solid #1e293b;padding-bottom:3px;margin:16px 0 9px;}
.rt-summary{font-size:.85rem;line-height:1.75;color:#374151;}
.rt-entry{margin-bottom:12px;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:3px;align-items:baseline;}
.rt-entry-role{font-weight:600;font-size:.86rem;color:#111;}
.rt-entry-company{color:#64748b;font-size:.81rem;}
.rt-entry-date{font-size:.72rem;color:#94a3b8;white-space:nowrap;}
.rt-entry-desc{font-size:.82rem;line-height:1.65;margin-top:4px;color:#444;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px;}
.rt-tag{background:#dbeafe;color:#1d4ed8;border-radius:4px;padding:2px 8px;font-size:.71rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px;}
.rt-pill{background:#e2e8f0;color:#334155;border-radius:4px;padding:2px 8px;font-size:.71rem;}`,
        },
        {
          name: "Mint Minimal",
          layout: "single",
          color: "#10b981",
          isDefault: true,
          css: `
.rt-wrap{padding:32px;font-family:'DM Sans',sans-serif;color:#111;background:#fff;min-height:100%;}
.rt-header{margin-bottom:20px;}
.rt-name{font-size:2rem;font-weight:700;color:#111;border-bottom:3px solid #10b981;display:inline-block;padding-bottom:4px;letter-spacing:-.3px;}
.rt-title{color:#10b981;font-size:.84rem;margin:8px 0 7px;font-weight:700;text-transform:uppercase;letter-spacing:.09em;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.75rem;color:#6b7280;}
.rt-section-title{font-size:.63rem;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:#10b981;margin:18px 0 9px;display:flex;align-items:center;gap:9px;}
.rt-section-title::after{content:'';flex:1;height:1px;background:#d1fae5;}
.rt-summary{font-size:.87rem;line-height:1.78;color:#374151;}
.rt-entry{margin-bottom:12px;padding-left:10px;border-left:2px solid #d1fae5;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:3px;align-items:baseline;}
.rt-entry-role{font-weight:700;font-size:.87rem;color:#111;}
.rt-entry-company{color:#6b7280;font-size:.81rem;}
.rt-entry-date{font-size:.73rem;color:#9ca3af;white-space:nowrap;}
.rt-entry-desc{font-size:.83rem;line-height:1.65;margin-top:4px;color:#4b5563;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#d1fae5;color:#065f46;border-radius:100px;padding:2px 9px;font-size:.72rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:#f3f4f6;color:#374151;border-radius:6px;padding:2px 8px;font-size:.74rem;border:1px solid #e5e7eb;}`,
        },
        {
          name: "Midnight Gold",
          layout: "sidebar",
          color: "#b8860b",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:195px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;}
.rt-header{background:#12112a;color:#fff;padding:26px 22px 20px;grid-column:1/-1;border-bottom:2px solid #b8860b;}
.rt-name{font-size:1.85rem;font-weight:700;color:#fff;letter-spacing:-.2px;}
.rt-title{color:#d4af37;font-size:.83rem;margin:5px 0 9px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;}
.rt-contact{display:flex;flex-wrap:wrap;gap:10px;font-size:.74rem;color:#9a9abf;}
.rt-sidebar{background:#1a1933;padding:20px 15px;}
.rt-main{padding:20px 24px;background:#fff;}
.rt-section-title{font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#b8860b;border-bottom:1.5px solid #b8860b;padding-bottom:3px;margin:16px 0 9px;}
.rt-sidebar .rt-section-title{color:#d4af37;border-color:#d4af37;}
.rt-summary{font-size:.86rem;line-height:1.76;color:#333;}
.rt-entry{margin-bottom:12px;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:3px;align-items:baseline;}
.rt-entry-role{font-weight:700;font-size:.87rem;color:#12112a;}
.rt-entry-company{color:#555;font-size:.81rem;}
.rt-entry-date{font-size:.72rem;color:#999;white-space:nowrap;}
.rt-entry-desc{font-size:.83rem;line-height:1.65;margin-top:4px;color:#444;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px;}
.rt-tag{background:rgba(212,175,55,.14);color:#d4af37;border-radius:4px;padding:2px 8px;font-size:.71rem;border:1px solid rgba(212,175,55,.3);}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px;}
.rt-pill{background:rgba(255,255,255,.07);color:#c0c0da;border-radius:4px;padding:2px 8px;font-size:.71rem;border:1px solid rgba(255,255,255,.12);}`,
        },
        {
          name: "Rose Editorial",
          layout: "single",
          color: "#be185d",
          isDefault: true,
          css: `
.rt-wrap{font-family:'DM Sans',sans-serif;color:#1f1f1f;background:#fff;min-height:100%;}
.rt-header{background:#fff0f6;padding:28px 32px 20px;border-bottom:3px solid #be185d;}
.rt-name{font-size:2.1rem;font-weight:700;color:#1f1f1f;letter-spacing:-.4px;}
.rt-title{color:#be185d;font-size:.85rem;margin:5px 0 9px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;}
.rt-contact{display:flex;flex-wrap:wrap;gap:14px;font-size:.76rem;color:#6b7280;}
.rt-section-title{font-size:.64rem;font-weight:800;text-transform:uppercase;letter-spacing:.14em;color:#be185d;margin:18px 32px 10px;display:flex;align-items:center;gap:9px;}
.rt-section-title::before{content:'';width:16px;height:2px;background:#be185d;flex-shrink:0;}
.rt-summary{font-size:.88rem;line-height:1.78;color:#374151;margin:0 32px;}
.rt-entry{margin:0 32px 12px;padding:9px 11px;background:#fdf2f8;border-radius:6px;border-left:3px solid #f9a8d4;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:3px;align-items:baseline;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#1f1f1f;}
.rt-entry-company{color:#9d174d;font-size:.82rem;font-weight:500;}
.rt-entry-date{font-size:.73rem;color:#be185d;white-space:nowrap;font-weight:600;}
.rt-entry-desc{font-size:.83rem;line-height:1.65;margin-top:4px;color:#4b5563;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin:0 32px 4px;}
.rt-tag{background:#fce7f3;color:#9d174d;border-radius:100px;padding:2px 9px;font-size:.72rem;border:1px solid #f9a8d4;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin:0 32px 4px;}
.rt-pill{background:#fdf2f8;color:#6b7280;border-radius:6px;padding:2px 8px;font-size:.73rem;border:1px solid #f9a8d4;}`,
        },
        {
          name: "Forest Pro",
          layout: "single",
          color: "#166534",
          isDefault: true,
          css: `
.rt-wrap{padding:30px;font-family:'DM Sans',sans-serif;color:#111;background:#fff;min-height:100%;}
.rt-header{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;border-bottom:2px solid #166534;padding-bottom:14px;margin-bottom:18px;}
.rt-header-info{flex:1;}
.rt-name{font-size:1.95rem;font-weight:700;color:#14532d;letter-spacing:-.3px;}
.rt-title{color:#166534;font-size:.84rem;margin:4px 0 6px;font-weight:600;}
.rt-contact{display:flex;flex-direction:column;gap:3px;font-size:.73rem;color:#374151;text-align:right;padding-top:4px;flex-shrink:0;}
.rt-section-title{font-size:.63rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;background:#166534;color:#fff;padding:3px 10px;margin:18px 0 10px;display:inline-block;border-radius:3px;}
.rt-summary{font-size:.87rem;line-height:1.76;color:#374151;border-left:3px solid #bbf7d0;padding-left:12px;}
.rt-entry{margin-bottom:12px;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:3px;align-items:baseline;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#14532d;}
.rt-entry-company{color:#555;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#6b7280;background:#dcfce7;padding:1px 7px;border-radius:100px;white-space:nowrap;}
.rt-entry-desc{font-size:.83rem;line-height:1.68;margin-top:4px;color:#374151;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#dcfce7;color:#14532d;border-radius:5px;padding:2px 9px;font-size:.73rem;border:1px solid #bbf7d0;font-weight:500;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:#f0fdf4;color:#374151;border-radius:5px;padding:2px 8px;font-size:.73rem;border:1px solid #bbf7d0;}`,
        },
        {
          name: "Ocean Breeze",
          layout: "single",
          color: "#0e7c7b",
          isDefault: true,
          css: `
.rt-wrap{padding:32px;font-family:'Inter',sans-serif;color:#1e293b;background:linear-gradient(135deg,#f0f9ff 0%,#e6f7f7 100%);min-height:100%;}
.rt-header{border-bottom:3px solid #0e7c7b;padding-bottom:16px;margin-bottom:20px;background:rgba(255,255,255,.6);padding:16px 20px;border-radius:12px 12px 0 0;}
.rt-name{font-size:2.2rem;font-weight:700;color:#0b4f6c;letter-spacing:-.5px;}
.rt-title{color:#0e7c7b;font-size:.9rem;margin:6px 0 8px;font-weight:600;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;gap:16px;font-size:.8rem;color:#2c5f6e;}
.rt-section-title{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#0e7c7b;border-left:4px solid #0e7c7b;padding-left:8px;margin:22px 0 12px;}
.rt-summary{font-size:.9rem;line-height:1.7;color:#1e4a5f;background:rgba(255,255,255,.7);padding:12px;border-radius:8px;}
.rt-entry{margin-bottom:16px;background:white;padding:12px;border-radius:10px;box-shadow:0 2px 8px rgba(14,124,123,.1);}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.9rem;color:#0b4f6c;}
.rt-entry-company{color:#0e7c7b;font-size:.85rem;}
.rt-entry-date{font-size:.75rem;color:#5f8b95;background:#e2f0f0;padding:2px 8px;border-radius:20px;}
.rt-entry-desc{font-size:.85rem;line-height:1.6;margin-top:8px;color:#2c5f6e;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#cbd5e1;color:#1e293b;border-radius:6px;padding:3px 10px;font-size:.75rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:#e2f0f0;color:#0e7c7b;border-radius:20px;padding:3px 10px;font-size:.75rem;border:1px solid #0e7c7b;}`,
        },
        {
          name: "Lavender Luxe",
          layout: "sidebar",
          color: "#8b5cf6",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:220px 1fr;min-height:100%;font-family:'Poppins',sans-serif;background:#f8fafc;}
.rt-header{background:linear-gradient(135deg,#6d28d9 0%,#8b5cf6 100%);color:white;padding:30px 25px;grid-column:1/-1;}
.rt-name{font-size:2rem;font-weight:600;color:white;letter-spacing:-.3px;}
.rt-title{color:#ddd6fe;font-size:.9rem;margin:5px 0 10px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.8rem;color:#ede9fe;}
.rt-sidebar{background:#f5f3ff;padding:25px 20px;border-right:2px solid #8b5cf6;}
.rt-main{padding:25px 30px;}
.rt-section-title{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#8b5cf6;border-bottom:2px solid #8b5cf6;padding-bottom:5px;margin:20px 0 15px;}
.rt-sidebar .rt-section-title{color:#6d28d9;border-color:#6d28d9;}
.rt-summary{font-size:.9rem;line-height:1.7;color:#334155;background:white;padding:15px;border-radius:10px;box-shadow:0 4px 12px rgba(139,92,246,.1);}
.rt-entry{margin-bottom:15px;background:white;padding:12px;border-radius:8px;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:600;font-size:.9rem;color:#1e293b;}
.rt-entry-company{color:#8b5cf6;font-size:.85rem;}
.rt-entry-date{font-size:.75rem;color:#64748b;}
.rt-entry-desc{font-size:.85rem;line-height:1.6;margin-top:5px;color:#475569;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px;}
.rt-tag{background:#ede9fe;color:#6d28d9;border-radius:4px;padding:3px 8px;font-size:.75rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px;}
.rt-pill{background:#f1f5f9;color:#334155;border-radius:20px;padding:3px 8px;font-size:.75rem;border:1px solid #cbd5e1;}`,
        },
        {
          name: "Sunset Gradient",
          layout: "single",
          color: "#e11d48",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'DM Sans',sans-serif;color:#1e1b4b;background:linear-gradient(135deg,#fff1f2 0%,#ffe4e6 100%);min-height:100%;}
.rt-header{text-align:center;margin-bottom:30px;padding:20px;background:rgba(255,255,255,.8);border-radius:20px;box-shadow:0 8px 20px rgba(225,29,72,.15);}
.rt-name{font-size:2.4rem;font-weight:800;background:linear-gradient(135deg,#e11d48 0%,#fb7185 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:-.5px;}
.rt-title{color:#e11d48;font-size:.95rem;margin:8px 0 12px;font-weight:500;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;justify-content:center;gap:18px;font-size:.8rem;color:#881337;}
.rt-section-title{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#e11d48;margin:25px 0 15px;text-align:center;position:relative;}
.rt-section-title::before,.rt-section-title::after{content:'';position:absolute;top:50%;width:30%;height:1px;background:linear-gradient(90deg,transparent,#e11d48,transparent);}
.rt-section-title::before{left:0;}
.rt-section-title::after{right:0;}
.rt-summary{font-size:.9rem;line-height:1.8;color:#4c1d2d;text-align:center;padding:0 15px;}
.rt-entry{margin-bottom:20px;background:white;padding:15px;border-radius:15px;box-shadow:0 4px 12px rgba(225,29,72,.1);border-left:5px solid #e11d48;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.95rem;color:#881337;}
.rt-entry-company{color:#e11d48;font-size:.85rem;font-weight:500;}
.rt-entry-date{font-size:.75rem;color:#9f1239;background:#fff1f2;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.85rem;line-height:1.6;margin-top:8px;color:#4c1d95;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;justify-content:center;}
.rt-tag{background:#ffe4e6;color:#e11d48;border-radius:20px;padding:4px 12px;font-size:.75rem;border:1px solid #fda4af;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;justify-content:center;}
.rt-pill{background:white;color:#9f1239;border-radius:6px;padding:4px 12px;font-size:.75rem;border:1px solid #fecdd3;}`,
        },
        {
          name: "Charcoal Minimal",
          layout: "sidebar",
          color: "#2d2d2d",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:200px 1fr;min-height:100%;font-family:'Inter',sans-serif;background:#f5f5f5;}
.rt-header{background:#2d2d2d;color:#f5f5f5;padding:25px 20px;grid-column:1/-1;border-bottom:3px solid #666;}
.rt-name{font-size:1.8rem;font-weight:300;color:white;letter-spacing:-.2px;}
.rt-title{color:#aaa;font-size:.8rem;margin:4px 0 8px;font-weight:300;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.7rem;color:#ccc;}
.rt-sidebar{background:#fff;padding:20px;border-right:1px solid #ddd;}
.rt-main{padding:20px 25px;}
.rt-section-title{font-size:.6rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#2d2d2d;margin:18px 0 12px;}
.rt-sidebar .rt-section-title{color:#666;}
.rt-summary{font-size:.85rem;line-height:1.7;color:#444;font-weight:300;}
.rt-entry{margin-bottom:15px;border-bottom:1px dashed #ddd;padding-bottom:10px;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:3px;}
.rt-entry-role{font-weight:600;font-size:.85rem;color:#2d2d2d;}
.rt-entry-company{color:#666;font-size:.8rem;font-weight:300;}
.rt-entry-date{font-size:.7rem;color:#999;font-weight:300;}
.rt-entry-desc{font-size:.8rem;line-height:1.6;margin-top:5px;color:#555;font-weight:300;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:4px;margin-top:5px;}
.rt-tag{background:#e9e9e9;color:#2d2d2d;border-radius:3px;padding:2px 8px;font-size:.7rem;font-weight:300;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:4px;margin-top:5px;}
.rt-pill{background:transparent;color:#666;border-radius:0;padding:2px 6px;font-size:.7rem;border:1px solid #ccc;font-weight:300;}`,
        },
        {
          name: "Emerald Elegance",
          layout: "single",
          color: "#047857",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'Cormorant Garamond',serif;color:#0c4a6e;background:#f0fdf4;min-height:100%;}
.rt-header{border-bottom:2px solid #047857;padding-bottom:15px;margin-bottom:25px;display:flex;align-items:center;gap:20px;}
.rt-header-info{flex:1;}
.rt-name{font-size:2.5rem;font-weight:700;color:#064e3b;letter-spacing:-.3px;font-family:'Cormorant Garamond',serif;}
.rt-title{color:#047857;font-size:1rem;margin:5px 0 0;font-weight:600;font-style:italic;}
.rt-contact{display:flex;flex-direction:column;gap:5px;font-size:.8rem;color:#065f46;text-align:right;border-left:2px solid #047857;padding-left:15px;}
.rt-section-title{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#064e3b;border-bottom:1px solid #047857;padding-bottom:5px;margin:25px 0 15px;}
.rt-summary{font-size:.95rem;line-height:1.8;color:#166534;font-style:italic;padding:0 10px;}
.rt-entry{margin-bottom:18px;padding-left:15px;border-left:2px solid #a7f3d0;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.95rem;color:#064e3b;}
.rt-entry-company{color:#047857;font-size:.85rem;font-weight:500;}
.rt-entry-date{font-size:.75rem;color:#6b7280;background:#d1fae5;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.85rem;line-height:1.7;margin-top:8px;color:#166534;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#d1fae5;color:#064e3b;border-radius:4px;padding:3px 10px;font-size:.75rem;border:1px solid #6ee7b7;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#047857;border-radius:20px;padding:3px 10px;font-size:.75rem;border:1px solid #047857;}`,
        },
        {
          name: "Navy Professional",
          layout: "sidebar",
          color: "#1e3a8a",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:210px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#f8fafc;}
.rt-header{background:#1e3a8a;color:white;padding:28px 25px;grid-column:1/-1;box-shadow:0 4px 12px rgba(0,0,0,.1);}
.rt-name{font-size:2rem;font-weight:700;color:white;letter-spacing:-.3px;}
.rt-title{color:#bfdbfe;font-size:.85rem;margin:5px 0 10px;font-weight:400;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;gap:15px;font-size:.75rem;color:#dbeafe;}
.rt-sidebar{background:#fff;padding:25px 20px;border-right:2px solid #1e3a8a;}
.rt-main{padding:25px 30px;}
.rt-section-title{font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#1e3a8a;border-bottom:2px solid #1e3a8a;padding-bottom:5px;margin:20px 0 15px;}
.rt-sidebar .rt-section-title{color:#1e3a8a;}
.rt-summary{font-size:.88rem;line-height:1.7;color:#334155;}
.rt-entry{margin-bottom:16px;padding:10px;background:#f8fafc;border-radius:6px;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#0f172a;}
.rt-entry-company{color:#1e3a8a;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#64748b;}
.rt-entry-desc{font-size:.82rem;line-height:1.6;margin-top:5px;color:#475569;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#dbeafe;color:#1e3a8a;border-radius:4px;padding:3px 8px;font-size:.7rem;font-weight:500;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:#e2e8f0;color:#1e293b;border-radius:20px;padding:3px 8px;font-size:.7rem;}`,
        },
        {
          name: "Terracotta Clay",
          layout: "single",
          color: "#b45309",
          isDefault: true,
          css: `
.rt-wrap{padding:32px;font-family:'DM Sans',sans-serif;color:#2d2d2d;background:#fef3e9;min-height:100%;}
.rt-header{background:#b45309;color:white;padding:20px 25px;border-radius:15px;margin-bottom:25px;box-shadow:0 6px 14px rgba(180,83,9,.3);}
.rt-name{font-size:2.2rem;font-weight:700;color:white;letter-spacing:-.3px;}
.rt-title{color:#fed7aa;font-size:.9rem;margin:5px 0 8px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:15px;font-size:.8rem;color:#ffedd5;}
.rt-section-title{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#b45309;margin:25px 0 15px;display:inline-block;border-bottom:3px solid #b45309;padding-bottom:5px;}
.rt-summary{font-size:.9rem;line-height:1.75;color:#422006;background:#fff;padding:15px;border-radius:10px;border-left:5px solid #b45309;}
.rt-entry{margin-bottom:18px;background:#fff;padding:15px;border-radius:10px;box-shadow:0 2px 8px rgba(180,83,9,.1);}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.9rem;color:#78350f;}
.rt-entry-company{color:#b45309;font-size:.85rem;}
.rt-entry-date{font-size:.75rem;color:#92400e;background:#fef3c7;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.85rem;line-height:1.65;margin-top:8px;color:#422006;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fef3c7;color:#b45309;border-radius:6px;padding:3px 10px;font-size:.75rem;border:1px solid #fde68a;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#92400e;border-radius:6px;padding:3px 10px;font-size:.75rem;border:1px solid #b45309;}`,
        },
        {
          name: "Nordic Frost",
          layout: "sidebar",
          color: "#6b7280",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:190px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#f9fafb;}
.rt-header{background:#374151;color:#f3f4f6;padding:25px 20px;grid-column:1/-1;}
.rt-name{font-size:1.9rem;font-weight:400;color:white;letter-spacing:-.2px;font-weight:300;}
.rt-title{color:#9ca3af;font-size:.8rem;margin:4px 0 8px;font-weight:300;}
.rt-contact{display:flex;flex-wrap:wrap;gap:10px;font-size:.7rem;color:#d1d5db;}
.rt-sidebar{background:#f3f4f6;padding:20px 15px;border-right:1px solid #e5e7eb;}
.rt-main{padding:20px 25px;}
.rt-section-title{font-size:.6rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#374151;margin:18px 0 12px;}
.rt-sidebar .rt-section-title{color:#4b5563;}
.rt-summary{font-size:.85rem;line-height:1.7;color:#4b5563;font-weight:300;}
.rt-entry{margin-bottom:12px;padding:8px 0;border-bottom:1px solid #e5e7eb;}
.rt-entry:last-child{border-bottom:none;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:3px;}
.rt-entry-role{font-weight:500;font-size:.85rem;color:#1f2937;}
.rt-entry-company{color:#6b7280;font-size:.8rem;}
.rt-entry-date{font-size:.7rem;color:#9ca3af;}
.rt-entry-desc{font-size:.8rem;line-height:1.6;margin-top:5px;color:#4b5563;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:4px;margin-top:5px;}
.rt-tag{background:#e5e7eb;color:#374151;border-radius:2px;padding:2px 8px;font-size:.7rem;font-weight:300;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:4px;margin-top:5px;}
.rt-pill{background:transparent;color:#4b5563;border-radius:0;padding:2px 6px;font-size:.7rem;border:1px solid #d1d5db;}`,
        },
        {
          name: "Burgundy Classic",
          layout: "single",
          color: "#7f1d1d",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'DM Sans',sans-serif;color:#2d2d2d;background:#fef2f2;min-height:100%;}
.rt-header{border-left:6px solid #7f1d1d;padding-left:20px;margin-bottom:25px;}
.rt-name{font-size:2.3rem;font-weight:700;color:#7f1d1d;letter-spacing:-.3px;}
.rt-title{color:#991b1b;font-size:.9rem;margin:5px 0 10px;font-weight:500;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;gap:15px;font-size:.8rem;color:#b91c1c;}
.rt-section-title{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:#7f1d1d;margin:25px 0 15px;border-bottom:2px solid #7f1d1d;padding-bottom:5px;}
.rt-summary{font-size:.9rem;line-height:1.8;color:#450a0a;background:#fee2e2;padding:15px;border-radius:8px;}
.rt-entry{margin-bottom:18px;background:white;padding:15px;border-radius:8px;box-shadow:0 2px 8px rgba(127,29,29,.1);}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.9rem;color:#7f1d1d;}
.rt-entry-company{color:#991b1b;font-size:.85rem;}
.rt-entry-date{font-size:.75rem;color:#b91c1c;background:#fee2e2;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.85rem;line-height:1.65;margin-top:8px;color:#450a0a;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fee2e2;color:#7f1d1d;border-radius:4px;padding:3px 10px;font-size:.75rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#991b1b;border-radius:20px;padding:3px 10px;font-size:.75rem;border:1px solid #991b1b;}`,
        },
        {
          name: "Sage Serenity",
          layout: "sidebar",
          color: "#4b7b6b",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:200px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#f2f7f5;}
.rt-header{background:#4b7b6b;color:#ecfdf5;padding:26px 22px;grid-column:1/-1;}
.rt-name{font-size:1.9rem;font-weight:500;color:white;letter-spacing:-.3px;}
.rt-title{color:#d1fae5;font-size:.85rem;margin:5px 0 10px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.75rem;color:#a7f3d0;}
.rt-sidebar{background:#ecfdf5;padding:22px 18px;border-right:2px solid #4b7b6b;}
.rt-main{padding:22px 25px;}
.rt-section-title{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.13em;color:#4b7b6b;border-bottom:2px solid #4b7b6b;padding-bottom:5px;margin:20px 0 15px;}
.rt-sidebar .rt-section-title{color:#2d5a4c;}
.rt-summary{font-size:.88rem;line-height:1.7;color:#2d5a4c;}
.rt-entry{margin-bottom:16px;padding:10px;background:white;border-radius:10px;border-left:4px solid #4b7b6b;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:600;font-size:.88rem;color:#1f3d36;}
.rt-entry-company{color:#4b7b6b;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#6b8f84;}
.rt-entry-desc{font-size:.82rem;line-height:1.6;margin-top:5px;color:#365b50;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#d1fae5;color:#2d5a4c;border-radius:20px;padding:3px 10px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#4b7b6b;border-radius:20px;padding:3px 8px;font-size:.7rem;border:1px solid #4b7b6b;}`,
        },
        {
          name: "Ruby Red",
          layout: "single",
          color: "#b91c1c",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'DM Sans',sans-serif;color:#2d2d2d;background:#fff;min-height:100%;border-top:8px solid #b91c1c;}
.rt-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:25px;border-bottom:2px solid #b91c1c;padding-bottom:15px;}
.rt-name{font-size:2.2rem;font-weight:700;color:#b91c1c;letter-spacing:-.4px;}
.rt-title{color:#7f1d1d;font-size:.9rem;margin:5px 0 0;font-weight:500;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.8rem;color:#991b1b;}
.rt-section-title{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#b91c1c;margin:25px 0 15px;border-left:5px solid #b91c1c;padding-left:10px;}
.rt-summary{font-size:.9rem;line-height:1.75;color:#7f1d1d;background:#fef2f2;padding:15px;border-radius:8px;}
.rt-entry{margin-bottom:20px;background:#fef2f2;padding:15px;border-radius:8px;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.9rem;color:#b91c1c;}
.rt-entry-company{color:#991b1b;font-size:.85rem;}
.rt-entry-date{font-size:.75rem;color:#7f1d1d;background:#fee2e2;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.85rem;line-height:1.65;margin-top:8px;color:#450a0a;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fee2e2;color:#b91c1c;border-radius:6px;padding:3px 10px;font-size:.75rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:white;color:#991b1b;border-radius:20px;padding:3px 10px;font-size:.75rem;border:1px solid #b91c1c;}`,
        },
        {
          name: "Indigo Ink",
          layout: "sidebar",
          color: "#3730a3",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:190px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#eef2ff;}
.rt-header{background:#3730a3;color:#e0e7ff;padding:28px 22px;grid-column:1/-1;}
.rt-name{font-size:2rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#a5b4fc;font-size:.85rem;margin:5px 0 9px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.75rem;color:#c7d2fe;}
.rt-sidebar{background:#e0e7ff;padding:22px 18px;border-right:2px solid #3730a3;}
.rt-main{padding:22px 25px;background:white;}
.rt-section-title{font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#3730a3;border-bottom:2px solid #3730a3;padding-bottom:5px;margin:18px 0 15px;}
.rt-sidebar .rt-section-title{color:#1e1b4b;}
.rt-summary{font-size:.88rem;line-height:1.7;color:#1e1b4b;}
.rt-entry{margin-bottom:16px;border-left:3px solid #a5b4fc;padding-left:12px;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#1e1b4b;}
.rt-entry-company{color:#3730a3;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#6366f1;}
.rt-entry-desc{font-size:.82rem;line-height:1.6;margin-top:5px;color:#312e81;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#c7d2fe;color:#3730a3;border-radius:4px;padding:3px 8px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#312e81;border-radius:20px;padding:3px 8px;font-size:.7rem;border:1px solid #3730a3;}`,
        },
        {
          name: "Peach Perfect",
          layout: "single",
          color: "#c2410c",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'DM Sans',sans-serif;color:#431407;background:linear-gradient(135deg,#fff7ed 0%,#ffedd5 100%);min-height:100%;}
.rt-header{text-align:center;margin-bottom:30px;}
.rt-name{font-size:2.4rem;font-weight:800;color:#c2410c;letter-spacing:-.4px;text-shadow:2px 2px 0 #fed7aa;}
.rt-title{color:#9a3412;font-size:.95rem;margin:8px 0 12px;font-weight:500;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;justify-content:center;gap:15px;font-size:.8rem;color:#c2410c;}
.rt-section-title{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#c2410c;margin:25px 0 15px;text-align:center;background:#fed7aa;padding:5px;border-radius:30px;}
.rt-summary{font-size:.9rem;line-height:1.8;color:#7b341e;text-align:center;padding:0 20px;}
.rt-entry{margin-bottom:20px;background:white;padding:15px;border-radius:15px;box-shadow:0 8px 16px rgba(194,65,12,.15);border-bottom:3px solid #c2410c;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.9rem;color:#7b341e;}
.rt-entry-company{color:#c2410c;font-size:.85rem;}
.rt-entry-date{font-size:.75rem;color:#9a3412;background:#fed7aa;padding:2px 12px;border-radius:20px;}
.rt-entry-desc{font-size:.85rem;line-height:1.65;margin-top:8px;color:#431407;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;justify-content:center;}
.rt-tag{background:#fed7aa;color:#c2410c;border-radius:30px;padding:4px 12px;font-size:.75rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;justify-content:center;}
.rt-pill{background:transparent;color:#c2410c;border-radius:30px;padding:4px 12px;font-size:.75rem;border:2px solid #c2410c;}`,
        },
        {
          name: "Graphite Edge",
          layout: "sidebar",
          color: "#334155",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:180px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#f1f5f9;}
.rt-header{background:#334155;color:#f1f5f9;padding:25px 20px;grid-column:1/-1;border-bottom:3px solid #0f172a;}
.rt-name{font-size:1.8rem;font-weight:500;color:white;letter-spacing:-.1px;}
.rt-title{color:#94a3b8;font-size:.8rem;margin:4px 0 8px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.7rem;color:#cbd5e1;}
.rt-sidebar{background:#e2e8f0;padding:20px 15px;border-right:2px solid #334155;}
.rt-main{padding:20px 25px;background:white;}
.rt-section-title{font-size:.6rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#334155;margin:18px 0 12px;border-bottom:1px solid #64748b;padding-bottom:4px;}
.rt-sidebar .rt-section-title{color:#0f172a;}
.rt-summary{font-size:.85rem;line-height:1.7;color:#1e293b;}
.rt-entry{margin-bottom:15px;border-left:3px solid #94a3b8;padding-left:10px;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:3px;}
.rt-entry-role{font-weight:600;font-size:.85rem;color:#0f172a;}
.rt-entry-company{color:#334155;font-size:.8rem;}
.rt-entry-date{font-size:.7rem;color:#64748b;}
.rt-entry-desc{font-size:.8rem;line-height:1.6;margin-top:4px;color:#334155;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;}
.rt-tag{background:#cbd5e1;color:#1e293b;border-radius:3px;padding:2px 8px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;}
.rt-pill{background:transparent;color:#334155;border-radius:3px;padding:2px 6px;font-size:.7rem;border:1px solid #64748b;}`,
        },
        {
          name: "Golden Hour",
          layout: "single",
          color: "#b45309",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'DM Sans',sans-serif;color:#1e1b4b;background:linear-gradient(145deg,#fffbeb 0%,#fef3c7 100%);min-height:100%;}
.rt-header{display:flex;flex-direction:column;align-items:center;margin-bottom:30px;padding:20px;background:rgba(180,83,9,.05);border-radius:0 0 30px 30px;}
.rt-name{font-size:2.5rem;font-weight:800;background:linear-gradient(135deg,#b45309 0%,#d97706 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:-.5px;}
.rt-title{color:#b45309;font-size:.95rem;margin:8px 0 12px;font-weight:500;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;font-size:.8rem;color:#92400e;}
.rt-section-title{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#b45309;margin:25px 0 15px;border-left:4px solid #b45309;padding-left:12px;}
.rt-summary{font-size:.9rem;line-height:1.8;color:#78350f;background:#fffbeb;padding:15px 20px;border-radius:10px;border:1px solid #fcd34d;}
.rt-entry{margin-bottom:20px;background:white;padding:15px;border-radius:10px;box-shadow:0 4px 12px rgba(180,83,9,.2);border-right:5px solid #b45309;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.9rem;color:#78350f;}
.rt-entry-company{color:#b45309;font-size:.85rem;}
.rt-entry-date{font-size:.75rem;color:#b45309;background:#fef3c7;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.85rem;line-height:1.65;margin-top:8px;color:#92400e;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fef3c7;color:#b45309;border-radius:6px;padding:3px 10px;font-size:.75rem;border:1px solid #fbbf24;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#92400e;border-radius:20px;padding:3px 10px;font-size:.75rem;border:1px solid #d97706;}`,
        },
        {
          name: "Slate & Steel",
          layout: "sidebar",
          color: "#475569",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:210px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#f1f5f9;}
.rt-header{background:#0f172a;color:#f8fafc;padding:28px 22px;grid-column:1/-1;border-bottom:3px solid #475569;}
.rt-name{font-size:1.9rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#94a3b8;font-size:.85rem;margin:5px 0 9px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.75rem;color:#cbd5e1;}
.rt-sidebar{background:#e2e8f0;padding:22px 18px;border-right:2px solid #475569;}
.rt-main{padding:22px 25px;background:white;}
.rt-section-title{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.13em;color:#1e293b;border-bottom:2px solid #475569;padding-bottom:5px;margin:18px 0 15px;}
.rt-sidebar .rt-section-title{color:#0f172a;}
.rt-summary{font-size:.88rem;line-height:1.7;color:#1e293b;}
.rt-entry{margin-bottom:16px;padding:10px;background:#f8fafc;border-left:3px solid #475569;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:600;font-size:.88rem;color:#0f172a;}
.rt-entry-company{color:#475569;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#64748b;}
.rt-entry-desc{font-size:.82rem;line-height:1.6;margin-top:5px;color:#334155;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#cbd5e1;color:#1e293b;border-radius:4px;padding:3px 8px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#475569;border-radius:20px;padding:3px 8px;font-size:.7rem;border:1px solid #64748b;}`,
        },
        {
          name: "Coral Reef",
          layout: "single",
          color: "#e11d48",
          isDefault: true,
          css: `
.rt-wrap{padding:32px;font-family:'DM Sans',sans-serif;color:#1e1e2e;background:linear-gradient(145deg,#fff0f0 0%,#ffe4e6 100%);min-height:100%;}
.rt-header{border-bottom:3px solid #e11d48;padding-bottom:15px;margin-bottom:20px;display:flex;align-items:center;gap:15px;}
.rt-header-info{flex:1;}
.rt-name{font-size:2.1rem;font-weight:700;color:#881337;letter-spacing:-.3px;}
.rt-title{color:#e11d48;font-size:.85rem;margin:5px 0 0;font-weight:600;}
.rt-contact{display:flex;flex-direction:column;gap:5px;font-size:.75rem;color:#9f1239;text-align:right;padding:0 10px;}
.rt-section-title{font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#e11d48;margin:20px 0 12px;display:inline-block;background:#ffe4e6;padding:5px 15px;border-radius:30px;}
.rt-summary{font-size:.88rem;line-height:1.76;color:#881337;background:rgba(255,255,255,.8);padding:15px;border-radius:12px;border:1px solid #fecdd3;}
.rt-entry{margin-bottom:18px;background:white;padding:15px;border-radius:12px;border-left:5px solid #e11d48;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#881337;}
.rt-entry-company{color:#e11d48;font-size:.83rem;}
.rt-entry-date{font-size:.73rem;color:#e11d48;background:#ffe4e6;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.83rem;line-height:1.65;margin-top:8px;color:#9f1239;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#ffe4e6;color:#e11d48;border-radius:6px;padding:3px 10px;font-size:.73rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#9f1239;border-radius:20px;padding:3px 10px;font-size:.73rem;border:1px solid #e11d48;}`,
        },
        {
          name: "Moss & Bark",
          layout: "sidebar",
          color: "#3f6212",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:190px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#f7fee7;}
.rt-header{background:#3f6212;color:#ecfccb;padding:26px 22px;grid-column:1/-1;border-bottom:3px solid #1a2e05;}
.rt-name{font-size:1.9rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#d9f99d;font-size:.85rem;margin:5px 0 9px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.75rem;color:#bef264;}
.rt-sidebar{background:#ecfccb;padding:22px 18px;border-right:2px solid #3f6212;}
.rt-main{padding:22px 25px;background:white;}
.rt-section-title{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.13em;color:#3f6212;border-bottom:2px solid #3f6212;padding-bottom:5px;margin:20px 0 15px;}
.rt-sidebar .rt-section-title{color:#1e3a8a;}
.rt-summary{font-size:.88rem;line-height:1.7;color:#1e3a8a;}
.rt-entry{margin-bottom:16px;background:#f7fee7;padding:12px;border-radius:8px;border-bottom:2px solid #3f6212;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:600;font-size:.88rem;color:#1e3a8a;}
.rt-entry-company{color:#3f6212;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#6b8e23;}
.rt-entry-desc{font-size:.82rem;line-height:1.6;margin-top:5px;color:#2d4d0b;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#d9f99d;color:#3f6212;border-radius:20px;padding:3px 10px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#3f6212;border-radius:20px;padding:3px 8px;font-size:.7rem;border:1px solid #3f6212;}`,
        },
        {
          name: "Blush & Bloom",
          layout: "single",
          color: "#be185d",
          isDefault: true,
          css: `
.rt-wrap{padding:32px;font-family:'DM Sans',sans-serif;color:#2d2d2d;background:#fdf2f8;min-height:100%;}
.rt-header{background:#be185d;color:white;padding:25px 30px;border-radius:20px 20px 0 0;margin-bottom:20px;}
.rt-name{font-size:2.1rem;font-weight:700;color:white;letter-spacing:-.3px;}
.rt-title{color:#fbcfe8;font-size:.88rem;margin:6px 0 10px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:15px;font-size:.78rem;color:#fce7f3;}
.rt-section-title{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:#be185d;margin:22px 0 12px;border-left:5px solid #be185d;padding-left:12px;}
.rt-summary{font-size:.88rem;line-height:1.75;color:#831843;background:#fff;padding:15px;border-radius:10px;box-shadow:0 4px 12px rgba(190,24,93,.1);}
.rt-entry{margin-bottom:18px;background:white;padding:15px;border-radius:10px;box-shadow:0 2px 8px rgba(190,24,93,.1);border-left:5px solid #fbcfe8;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#831843;}
.rt-entry-company{color:#be185d;font-size:.83rem;}
.rt-entry-date{font-size:.73rem;color:#be185d;background:#fbcfe8;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.83rem;line-height:1.65;margin-top:8px;color:#9d174d;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fbcfe8;color:#be185d;border-radius:6px;padding:3px 10px;font-size:.73rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#831843;border-radius:20px;padding:3px 10px;font-size:.73rem;border:1px solid #be185d;}`,
        },
        {
          name: "Steel Blue",
          layout: "sidebar",
          color: "#2c3e50",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:200px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#f0f4f8;}
.rt-header{background:#2c3e50;color:#ecf0f1;padding:28px 22px;grid-column:1/-1;}
.rt-name{font-size:2rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#b0c4de;font-size:.85rem;margin:5px 0 9px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.75rem;color:#b0c4de;}
.rt-sidebar{background:#ecf0f1;padding:22px 18px;border-right:2px solid #2c3e50;}
.rt-main{padding:22px 25px;background:white;}
.rt-section-title{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.13em;color:#2c3e50;border-bottom:2px solid #2c3e50;padding-bottom:5px;margin:20px 0 15px;}
.rt-sidebar .rt-section-title{color:#1e2b37;}
.rt-summary{font-size:.88rem;line-height:1.7;color:#2c3e50;}
.rt-entry{margin-bottom:16px;padding:12px;background:#f8fafc;border-left:4px solid #2c3e50;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:600;font-size:.88rem;color:#1e2b37;}
.rt-entry-company{color:#2c3e50;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#4a627a;}
.rt-entry-desc{font-size:.82rem;line-height:1.6;margin-top:5px;color:#2c3e50;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#b0c4de;color:#1e2b37;border-radius:4px;padding:3px 8px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#2c3e50;border-radius:20px;padding:3px 8px;font-size:.7rem;border:1px solid #4a627a;}`,
        },
        {
          name: "Amber Glow",
          layout: "single",
          color: "#d97706",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'DM Sans',sans-serif;color:#1c1917;background:linear-gradient(145deg,#fffbeb 0%,#fef3c7 100%);min-height:100%;}
.rt-header{border-bottom:3px solid #d97706;padding-bottom:15px;margin-bottom:25px;}
.rt-name{font-size:2.2rem;font-weight:700;color:#92400e;letter-spacing:-.3px;}
.rt-title{color:#b45309;font-size:.9rem;margin:5px 0 10px;font-weight:600;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;gap:15px;font-size:.8rem;color:#b45309;}
.rt-section-title{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:#d97706;margin:25px 0 15px;border-right:4px solid #d97706;padding-right:12px;text-align:right;}
.rt-summary{font-size:.9rem;line-height:1.8;color:#78350f;background:rgba(255,255,255,.8);padding:15px;border-radius:8px;border:1px solid #fbbf24;}
.rt-entry{margin-bottom:20px;background:white;padding:15px;border-radius:8px;border-right:5px solid #d97706;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.9rem;color:#92400e;}
.rt-entry-company{color:#d97706;font-size:.85rem;}
.rt-entry-date{font-size:.75rem;color:#d97706;background:#fef3c7;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.85rem;line-height:1.65;margin-top:8px;color:#78350f;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fef3c7;color:#d97706;border-radius:6px;padding:3px 10px;font-size:.75rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#b45309;border-radius:20px;padding:3px 10px;font-size:.75rem;border:1px solid #d97706;}`,
        },
        {
          name: "Midnight Sapphire",
          layout: "single",
          color: "#0c4a6e",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'Inter',sans-serif;color:#f0f9ff;background:linear-gradient(135deg,#0c4a6e 0%,#1e3a8a 100%);min-height:100%;}
.rt-header{border-bottom:3px solid #38bdf8;padding-bottom:16px;margin-bottom:22px;}
.rt-name{font-size:2.3rem;font-weight:700;color:white;letter-spacing:-.4px;text-shadow:0 2px 4px rgba(0,0,0,.3);}
.rt-title{color:#bae6fd;font-size:.9rem;margin:6px 0 10px;font-weight:500;text-transform:uppercase;letter-spacing:.1em;}
.rt-contact{display:flex;flex-wrap:wrap;gap:16px;font-size:.8rem;color:#b0c4de;}
.rt-section-title{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#7dd3fc;border-left:5px solid #38bdf8;padding-left:12px;margin:22px 0 14px;}
.rt-summary{font-size:.9rem;line-height:1.78;color:#e0f2fe;background:rgba(255,255,255,.1);padding:16px;border-radius:12px;backdrop-filter:blur(5px);border:1px solid rgba(56,189,248,.3);}
.rt-entry{margin-bottom:18px;background:rgba(255,255,255,.05);padding:16px;border-radius:10px;border:1px solid rgba(56,189,248,.2);}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.9rem;color:#bae6fd;}
.rt-entry-company{color:#7dd3fc;font-size:.85rem;}
.rt-entry-date{font-size:.75rem;color:#cbd5e1;background:rgba(56,189,248,.2);padding:2px 12px;border-radius:20px;}
.rt-entry-desc{font-size:.85rem;line-height:1.68;margin-top:8px;color:#e0f2fe;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:rgba(56,189,248,.2);color:#7dd3fc;border-radius:100px;padding:3px 12px;font-size:.75rem;border:1px solid #38bdf8;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:rgba(255,255,255,.05);color:#bae6fd;border-radius:6px;padding:3px 10px;font-size:.75rem;border:1px solid #38bdf8;}`,
        },
        {
          name: "Crimson Tide",
          layout: "sidebar",
          color: "#b91c1c",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:200px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#fef2f2;}
.rt-header{background:#b91c1c;color:#fee2e2;padding:28px 24px;grid-column:1/-1;box-shadow:0 4px 12px rgba(185,28,28,.3);}
.rt-name{font-size:2rem;font-weight:700;color:white;letter-spacing:-.3px;}
.rt-title{color:#fecaca;font-size:.86rem;margin:5px 0 10px;font-weight:400;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;gap:14px;font-size:.76rem;color:#fecaca;}
.rt-sidebar{background:#fee2e2;padding:22px 18px;border-right:3px solid #b91c1c;}
.rt-main{padding:22px 26px;background:white;}
.rt-section-title{font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#b91c1c;border-bottom:2px solid #b91c1c;padding-bottom:5px;margin:20px 0 15px;}
.rt-sidebar .rt-section-title{color:#7f1d1d;}
.rt-summary{font-size:.88rem;line-height:1.72;color:#7f1d1d;background:#fef2f2;padding:14px;border-radius:8px;}
.rt-entry{margin-bottom:16px;background:#fef2f2;padding:12px;border-radius:8px;border-left:4px solid #b91c1c;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#7f1d1d;}
.rt-entry-company{color:#b91c1c;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#b91c1c;background:#fee2e2;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.82rem;line-height:1.64;margin-top:6px;color:#991b1b;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#fee2e2;color:#b91c1c;border-radius:4px;padding:3px 9px;font-size:.72rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#7f1d1d;border-radius:20px;padding:3px 8px;font-size:.72rem;border:1px solid #b91c1c;}`,
        },
        {
          name: "Forest Canopy",
          layout: "single",
          color: "#166534",
          isDefault: true,
          css: `
.rt-wrap{padding:34px;font-family:'DM Sans',sans-serif;color:#1e3a2e;background:linear-gradient(145deg,#f0fdf4 0%,#dcfce7 100%);min-height:100%;}
.rt-header{background:#166534;color:#f0fdf4;padding:22px 28px;border-radius:16px;margin-bottom:26px;box-shadow:0 8px 16px rgba(22,101,52,.25);}
.rt-name{font-size:2.2rem;font-weight:700;color:white;letter-spacing:-.3px;}
.rt-title{color:#bbf7d0;font-size:.88rem;margin:6px 0 10px;font-weight:500;}
.rt-contact{display:flex;flex-wrap:wrap;gap:16px;font-size:.78rem;color:#dcfce7;}
.rt-section-title{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#166534;margin:24px 0 14px;display:flex;align-items:center;gap:10px;}
.rt-section-title::before{content:'';width:30px;height:2px;background:#166534;flex-shrink:0;}
.rt-summary{font-size:.88rem;line-height:1.76;color:#14532d;background:white;padding:16px;border-radius:12px;border-left:5px solid #166534;}
.rt-entry{margin-bottom:18px;background:white;padding:16px;border-radius:12px;box-shadow:0 4px 12px rgba(22,101,52,.1);border-bottom:3px solid #166534;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#14532d;}
.rt-entry-company{color:#166534;font-size:.83rem;}
.rt-entry-date{font-size:.73rem;color:#166534;background:#dcfce7;padding:2px 12px;border-radius:20px;}
.rt-entry-desc{font-size:.83rem;line-height:1.66;margin-top:8px;color:#365e32;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#dcfce7;color:#166534;border-radius:20px;padding:3px 12px;font-size:.73rem;border:1px solid #4ade80;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:#f0fdf4;color:#14532d;border-radius:6px;padding:3px 10px;font-size:.73rem;border:1px solid #86efac;}`,
        },
        {
          name: "Royal Purple",
          layout: "sidebar",
          color: "#6b21a8",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:210px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#f5f0ff;}
.rt-header{background:#6b21a8;color:#f3e8ff;padding:30px 25px;grid-column:1/-1;border-bottom:4px solid #c084fc;}
.rt-name{font-size:2.1rem;font-weight:700;color:white;letter-spacing:-.3px;}
.rt-title{color:#d8b4fe;font-size:.87rem;margin:5px 0 11px;font-weight:400;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;gap:15px;font-size:.77rem;color:#e9d5ff;}
.rt-sidebar{background:#f3e8ff;padding:24px 20px;border-right:3px solid #6b21a8;}
.rt-main{padding:24px 28px;background:white;}
.rt-section-title{font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#6b21a8;border-bottom:3px solid #6b21a8;padding-bottom:5px;margin:20px 0 16px;}
.rt-sidebar .rt-section-title{color:#581c87;}
.rt-summary{font-size:.88rem;line-height:1.73;color:#581c87;background:#faf5ff;padding:15px;border-radius:10px;border:1px solid #d8b4fe;}
.rt-entry{margin-bottom:17px;background:#faf5ff;padding:14px;border-radius:10px;border-left:5px solid #6b21a8;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#581c87;}
.rt-entry-company{color:#6b21a8;font-size:.83rem;}
.rt-entry-date{font-size:.73rem;color:#6b21a8;background:#e9d5ff;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.83rem;line-height:1.65;margin-top:7px;color:#4a1d78;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#e9d5ff;color:#6b21a8;border-radius:4px;padding:3px 10px;font-size:.72rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#581c87;border-radius:20px;padding:3px 9px;font-size:.72rem;border:1px solid #6b21a8;}`,
        },
        {
          name: "Desert Sand",
          layout: "single",
          color: "#b45309",
          isDefault: true,
          css: `
.rt-wrap{padding:36px;font-family:'DM Sans',sans-serif;color:#2d1b0e;background:#fef3e2;min-height:100%;}
.rt-header{text-align:center;margin-bottom:28px;padding:18px;background:#b45309;color:#fffbeb;border-radius:12px;box-shadow:0 6px 14px rgba(180,83,9,.3);}
.rt-name{font-size:2.3rem;font-weight:800;color:white;letter-spacing:-.3px;}
.rt-title{color:#fde68a;font-size:.9rem;margin:6px 0 8px;font-weight:500;letter-spacing:.1em;}
.rt-contact{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;font-size:.78rem;color:#fef3c7;}
.rt-section-title{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:#b45309;margin:24px 0 14px;border-bottom:3px double #b45309;padding-bottom:6px;text-align:center;}
.rt-summary{font-size:.88rem;line-height:1.75;color:#7b341e;background:#fff;padding:16px;border-radius:12px;border:1px solid #fcd34d;}
.rt-entry{margin-bottom:18px;background:white;padding:16px;border-radius:12px;box-shadow:0 4px 12px rgba(180,83,9,.15);border-top:4px solid #b45309;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#7b341e;}
.rt-entry-company{color:#b45309;font-size:.83rem;}
.rt-entry-date{font-size:.73rem;color:#b45309;background:#fef3c7;padding:2px 12px;border-radius:20px;}
.rt-entry-desc{font-size:.83rem;line-height:1.66;margin-top:8px;color:#92400e;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fef3c7;color:#b45309;border-radius:30px;padding:3px 12px;font-size:.73rem;border:1px solid #fbbf24;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#92400e;border-radius:6px;padding:3px 10px;font-size:.73rem;border:1px solid #d97706;}`,
        },
        {
          name: "Ocean Depths",
          layout: "sidebar",
          color: "#155e75",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:190px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#ecfeff;}
.rt-header{background:#155e75;color:#e0f2fe;padding:27px 23px;grid-column:1/-1;border-bottom:3px solid #06b6d4;}
.rt-name{font-size:1.95rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#a5f3fc;font-size:.85rem;margin:5px 0 9px;font-weight:400;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;gap:13px;font-size:.75rem;color:#cffafe;}
.rt-sidebar{background:#e0f2fe;padding:23px 19px;border-right:2px solid #155e75;}
.rt-main{padding:23px 26px;background:white;}
.rt-section-title{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#155e75;border-bottom:2px solid #155e75;padding-bottom:5px;margin:19px 0 15px;}
.rt-sidebar .rt-section-title{color:#164e63;}
.rt-summary{font-size:.87rem;line-height:1.71;color:#164e63;background:#ecfeff;padding:14px;border-radius:8px;border-left:4px solid #06b6d4;}
.rt-entry{margin-bottom:16px;background:#f0f9ff;padding:13px;border-radius:8px;border-left:4px solid #155e75;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;}
.rt-entry-role{font-weight:600;font-size:.87rem;color:#164e63;}
.rt-entry-company{color:#155e75;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#0891b2;background:#cffafe;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.82rem;line-height:1.63;margin-top:6px;color:#1e3a5f;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#cffafe;color:#155e75;border-radius:4px;padding:3px 9px;font-size:.71rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#164e63;border-radius:20px;padding:3px 8px;font-size:.71rem;border:1px solid #06b6d4;}`,
        },
        {
          name: "Rose Quartz",
          layout: "single",
          color: "#9d174d",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'DM Sans',sans-serif;color:#2d1b2d;background:#fdf2f8;min-height:100%;}
.rt-header{border-bottom:3px solid #9d174d;padding-bottom:16px;margin-bottom:22px;display:flex;justify-content:space-between;align-items:center;}
.rt-name{font-size:2.2rem;font-weight:700;color:#9d174d;letter-spacing:-.3px;}
.rt-title{color:#be185d;font-size:.86rem;margin:4px 0 8px;font-weight:500;text-transform:uppercase;}
.rt-contact{display:flex;flex-direction:column;gap:5px;font-size:.75rem;color:#b91c1c;text-align:right;}
.rt-section-title{font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#9d174d;margin:22px 0 13px;border-left:5px solid #f9a8d4;padding-left:12px;}
.rt-summary{font-size:.88rem;line-height:1.75;color:#831843;background:#fff5f9;padding:16px;border-radius:12px;border:1px solid #fbcfe8;}
.rt-entry{margin-bottom:18px;background:#fff5f9;padding:16px;border-radius:12px;border-left:5px solid #9d174d;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#9d174d;}
.rt-entry-company{color:#be185d;font-size:.83rem;}
.rt-entry-date{font-size:.73rem;color:#9d174d;background:#fbcfe8;padding:2px 12px;border-radius:20px;}
.rt-entry-desc{font-size:.83rem;line-height:1.66;margin-top:8px;color:#831843;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fbcfe8;color:#9d174d;border-radius:30px;padding:3px 12px;font-size:.73rem;border:1px solid #f9a8d4;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#831843;border-radius:6px;padding:3px 10px;font-size:.73rem;border:1px solid #be185d;}`,
        },
        {
          name: "Slate Modern",
          layout: "sidebar",
          color: "#334155",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:200px 1fr;min-height:100%;font-family:'Inter',sans-serif;background:#f8fafc;}
.rt-header{background:#334155;color:#f1f5f9;padding:26px 22px;grid-column:1/-1;border-bottom:3px solid #64748b;}
.rt-name{font-size:1.9rem;font-weight:500;color:white;letter-spacing:-.2px;}
.rt-title{color:#94a3b8;font-size:.84rem;margin:4px 0 9px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:12px;font-size:.74rem;color:#cbd5e1;}
.rt-sidebar{background:#f1f5f9;padding:22px 18px;border-right:2px solid #94a3b8;}
.rt-main{padding:22px 26px;background:white;}
.rt-section-title{font-size:.64rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#334155;border-bottom:2px solid #64748b;padding-bottom:5px;margin:18px 0 14px;}
.rt-sidebar .rt-section-title{color:#1e293b;}
.rt-summary{font-size:.86rem;line-height:1.7;color:#1e293b;background:#f8fafc;padding:14px;border-radius:8px;}
.rt-entry{margin-bottom:15px;border-bottom:1px solid #e2e8f0;padding-bottom:10px;}
.rt-entry:last-child{border-bottom:none;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:3px;}
.rt-entry-role{font-weight:600;font-size:.86rem;color:#0f172a;}
.rt-entry-company{color:#475569;font-size:.81rem;}
.rt-entry-date{font-size:.71rem;color:#64748b;}
.rt-entry-desc{font-size:.81rem;line-height:1.62;margin-top:5px;color:#334155;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;}
.rt-tag{background:#e2e8f0;color:#1e293b;border-radius:4px;padding:2px 8px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;}
.rt-pill{background:transparent;color:#334155;border-radius:4px;padding:2px 7px;font-size:.7rem;border:1px solid #94a3b8;}`,
        },
        {
          name: "Amber Sunrise",
          layout: "single",
          color: "#f59e0b",
          isDefault: true,
          css: `
.rt-wrap{padding:34px;font-family:'DM Sans',sans-serif;color:#2d1b0e;background:linear-gradient(145deg,#fffbeb 0%,#fef3c7 100%);min-height:100%;}
.rt-header{background:#f59e0b;color:#fffbeb;padding:24px 28px;border-radius:18px;margin-bottom:26px;box-shadow:0 8px 18px rgba(245,158,11,.3);}
.rt-name{font-size:2.3rem;font-weight:800;color:white;letter-spacing:-.4px;text-shadow:0 2px 4px rgba(0,0,0,.1);}
.rt-title{color:#fef3c7;font-size:.9rem;margin:6px 0 10px;font-weight:500;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;gap:16px;font-size:.78rem;color:#fef9c3;}
.rt-section-title{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:#b45309;margin:24px 0 14px;border-right:5px solid #f59e0b;padding-right:15px;text-align:right;}
.rt-summary{font-size:.88rem;line-height:1.76;color:#92400e;background:#fffbeb;padding:16px;border-radius:12px;border:1px solid #fcd34d;}
.rt-entry{margin-bottom:18px;background:#fffbeb;padding:16px;border-radius:12px;box-shadow:0 4px 12px rgba(245,158,11,.15);border-right:5px solid #f59e0b;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#b45309;}
.rt-entry-company{color:#f59e0b;font-size:.83rem;}
.rt-entry-date{font-size:.73rem;color:#d97706;background:#fef3c7;padding:2px 12px;border-radius:20px;}
.rt-entry-desc{font-size:.83rem;line-height:1.66;margin-top:8px;color:#92400e;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fef3c7;color:#d97706;border-radius:30px;padding:3px 12px;font-size:.73rem;border:1px solid #fbbf24;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#b45309;border-radius:6px;padding:3px 10px;font-size:.73rem;border:1px solid #f59e0b;}`,
        },
        {
          name: "Graphite Pro",
          layout: "sidebar",
          color: "#1e293b",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:210px 1fr;min-height:100%;font-family:'Inter',sans-serif;background:#f1f5f9;}
.rt-header{background:#1e293b;color:#f8fafc;padding:28px 24px;grid-column:1/-1;border-bottom:3px solid #475569;}
.rt-name{font-size:2rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#94a3b8;font-size:.85rem;margin:5px 0 10px;font-weight:400;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;gap:14px;font-size:.75rem;color:#cbd5e1;}
.rt-sidebar{background:#e2e8f0;padding:24px 20px;border-right:3px solid #475569;}
.rt-main{padding:24px 28px;background:white;}
.rt-section-title{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#1e293b;border-bottom:2px solid #64748b;padding-bottom:5px;margin:20px 0 15px;}
.rt-sidebar .rt-section-title{color:#0f172a;}
.rt-summary{font-size:.87rem;line-height:1.72;color:#1e293b;background:#f8fafc;padding:15px;border-radius:8px;border-left:4px solid #94a3b8;}
.rt-entry{margin-bottom:16px;background:#f8fafc;padding:14px;border-radius:8px;border-left:4px solid #1e293b;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;}
.rt-entry-role{font-weight:600;font-size:.87rem;color:#0f172a;}
.rt-entry-company{color:#334155;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#64748b;background:#e2e8f0;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.82rem;line-height:1.63;margin-top:6px;color:#1e293b;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#cbd5e1;color:#1e293b;border-radius:4px;padding:3px 9px;font-size:.71rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#0f172a;border-radius:20px;padding:3px 8px;font-size:.71rem;border:1px solid #64748b;}`,
        },
        {
          name: "Mauve Mist",
          layout: "single",
          color: "#a21caf",
          isDefault: true,
          css: `
.rt-wrap{padding:34px;font-family:'DM Sans',sans-serif;color:#2d1b2d;background:linear-gradient(135deg,#fdf4ff 0%,#fae8ff 100%);min-height:100%;}
.rt-header{text-align:center;margin-bottom:28px;padding:20px;border-bottom:3px solid #a21caf;}
.rt-name{font-size:2.2rem;font-weight:700;color:#a21caf;letter-spacing:-.3px;}
.rt-title{color:#c026d3;font-size:.86rem;margin:6px 0 10px;font-weight:500;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;font-size:.76rem;color:#a21caf;}
.rt-section-title{font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#a21caf;margin:22px 0 14px;display:inline-block;border-bottom:3px dotted #e879f9;padding-bottom:5px;}
.rt-summary{font-size:.87rem;line-height:1.74;color:#701a75;background:#fdf4ff;padding:16px;border-radius:16px;border:1px solid #e879f9;}
.rt-entry{margin-bottom:18px;background:#fdf4ff;padding:16px;border-radius:16px;box-shadow:0 6px 14px rgba(162,28,175,.15);border:1px solid #e879f9;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.87rem;color:#86198f;}
.rt-entry-company{color:#a21caf;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#c026d3;background:#fae8ff;padding:2px 12px;border-radius:30px;}
.rt-entry-desc{font-size:.82rem;line-height:1.65;margin-top:8px;color:#701a75;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fae8ff;color:#a21caf;border-radius:30px;padding:3px 12px;font-size:.72rem;border:1px solid #d946ef;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#86198f;border-radius:20px;padding:3px 10px;font-size:.72rem;border:1px solid #c026d3;}`,
        },
        {
          name: "Pacific Coast",
          layout: "sidebar",
          color: "#0e7490",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:190px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#ecfeff;}
.rt-header{background:#0e7490;color:#ecfeff;padding:26px 22px;grid-column:1/-1;border-bottom:4px solid #22d3ee;}
.rt-name{font-size:1.95rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#a5f3fc;font-size:.84rem;margin:5px 0 9px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:13px;font-size:.74rem;color:#cffafe;}
.rt-sidebar{background:#cffafe;padding:22px 18px;border-right:3px solid #0e7490;}
.rt-main{padding:22px 26px;background:white;}
.rt-section-title{font-size:.64rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#0e7490;border-bottom:2px solid #0e7490;padding-bottom:5px;margin:19px 0 15px;}
.rt-sidebar .rt-section-title{color:#155e75;}
.rt-summary{font-size:.86rem;line-height:1.7;color:#155e75;background:#ecfeff;padding:14px;border-radius:8px;border-left:4px solid #22d3ee;}
.rt-entry{margin-bottom:16px;background:#f0f9ff;padding:13px;border-radius:8px;border-left:4px solid #0e7490;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;}
.rt-entry-role{font-weight:600;font-size:.86rem;color:#155e75;}
.rt-entry-company{color:#0e7490;font-size:.81rem;}
.rt-entry-date{font-size:.71rem;color:#0891b2;background:#cffafe;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.81rem;line-height:1.62;margin-top:6px;color:#164e63;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#a5f3fc;color:#0e7490;border-radius:20px;padding:3px 10px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#155e75;border-radius:4px;padding:3px 8px;font-size:.7rem;border:1px solid #22d3ee;}`,
        },
        {
          name: "Ruby Fusion",
          layout: "single",
          color: "#be123c",
          isDefault: true,
          css: `
.rt-wrap{padding:36px;font-family:'DM Sans',sans-serif;color:#1e1b2d;background:linear-gradient(145deg,#fff1f2 0%,#ffe4e6 100%);min-height:100%;}
.rt-header{background:#be123c;color:#fff1f2;padding:25px 30px;border-radius:20px 20px 0 0;margin-bottom:22px;box-shadow:0 8px 16px rgba(190,18,60,.25);}
.rt-name{font-size:2.3rem;font-weight:800;color:white;letter-spacing:-.4px;text-shadow:0 2px 4px rgba(0,0,0,.2);}
.rt-title{color:#fecdd3;font-size:.88rem;margin:6px 0 10px;font-weight:500;}
.rt-contact{display:flex;flex-wrap:wrap;gap:16px;font-size:.78rem;color:#ffe4e6;}
.rt-section-title{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:#be123c;margin:24px 0 15px;border-left:6px solid #be123c;padding-left:14px;}
.rt-summary{font-size:.88rem;line-height:1.76;color:#881337;background:#fff1f2;padding:16px;border-radius:12px;border:1px solid #fda4af;}
.rt-entry{margin-bottom:20px;background:#fff1f2;padding:16px;border-radius:12px;border-left:6px solid #be123c;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#9f1239;}
.rt-entry-company{color:#be123c;font-size:.83rem;}
.rt-entry-date{font-size:.73rem;color:#be123c;background:#fecdd3;padding:2px 12px;border-radius:30px;}
.rt-entry-desc{font-size:.83rem;line-height:1.66;margin-top:8px;color:#881337;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fecdd3;color:#be123c;border-radius:20px;padding:3px 12px;font-size:.73rem;border:1px solid #fb7185;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#9f1239;border-radius:6px;padding:3px 10px;font-size:.73rem;border:1px solid #e11d48;}`,
        },
        {
          name: "Moss Green",
          layout: "sidebar",
          color: "#3f6212",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:190px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#f7fee7;}
.rt-header{background:#3f6212;color:#f7fee7;padding:26px 22px;grid-column:1/-1;border-bottom:3px solid #84cc16;}
.rt-name{font-size:1.95rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#bef264;font-size:.84rem;margin:5px 0 9px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:13px;font-size:.74rem;color:#d9f99d;}
.rt-sidebar{background:#ecfccb;padding:22px 18px;border-right:3px solid #3f6212;}
.rt-main{padding:22px 26px;background:white;}
.rt-section-title{font-size:.64rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#3f6212;border-bottom:2px solid #3f6212;padding-bottom:5px;margin:19px 0 15px;}
.rt-sidebar .rt-section-title{color:#1e3a8a;}
.rt-summary{font-size:.86rem;line-height:1.7;color:#1e3a8a;background:#f7fee7;padding:14px;border-radius:8px;border-left:4px solid #84cc16;}
.rt-entry{margin-bottom:16px;background:#ecfccb;padding:13px;border-radius:8px;border-left:4px solid #3f6212;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;}
.rt-entry-role{font-weight:600;font-size:.86rem;color:#1e3a8a;}
.rt-entry-company{color:#3f6212;font-size:.81rem;}
.rt-entry-date{font-size:.71rem;color:#4d7c0f;background:#d9f99d;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.81rem;line-height:1.62;margin-top:6px;color:#2d4d0b;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#d9f99d;color:#3f6212;border-radius:20px;padding:3px 10px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#1e3a8a;border-radius:4px;padding:3px 8px;font-size:.7rem;border:1px solid #84cc16;}`,
        },
        {
          name: "Lavender Fields",
          layout: "single",
          color: "#7e22ce",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'DM Sans',sans-serif;color:#2d1b3d;background:linear-gradient(135deg,#faf5ff 0%,#f3e8ff 100%);min-height:100%;}
.rt-header{text-align:center;border-bottom:3px solid #7e22ce;padding-bottom:18px;margin-bottom:24px;}
.rt-name{font-size:2.2rem;font-weight:700;color:#7e22ce;letter-spacing:-.3px;}
.rt-title{color:#9333ea;font-size:.86rem;margin:6px 0 10px;font-weight:500;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;font-size:.76rem;color:#7e22ce;}
.rt-section-title{font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#7e22ce;margin:22px 0 14px;border-right:5px solid #c084fc;padding-right:14px;text-align:right;}
.rt-summary{font-size:.87rem;line-height:1.74;color:#581c87;background:#faf5ff;padding:16px;border-radius:12px;border:1px solid #c084fc;}
.rt-entry{margin-bottom:18px;background:#faf5ff;padding:16px;border-radius:12px;border-right:5px solid #7e22ce;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.87rem;color:#6b21a8;}
.rt-entry-company{color:#7e22ce;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#9333ea;background:#f3e8ff;padding:2px 12px;border-radius:30px;}
.rt-entry-desc{font-size:.82rem;line-height:1.65;margin-top:8px;color:#581c87;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#f3e8ff;color:#7e22ce;border-radius:30px;padding:3px 12px;font-size:.72rem;border:1px solid #a855f7;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#6b21a8;border-radius:20px;padding:3px 10px;font-size:.72rem;border:1px solid #9333ea;}`,
        },
        {
          name: "Stone & Oak",
          layout: "sidebar",
          color: "#57534e",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:200px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#faf7f2;}
.rt-header{background:#57534e;color:#faf7f2;padding:26px 22px;grid-column:1/-1;border-bottom:3px solid #a8a29e;}
.rt-name{font-size:1.95rem;font-weight:500;color:white;letter-spacing:-.2px;}
.rt-title{color:#d6d3d1;font-size:.84rem;margin:5px 0 9px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:13px;font-size:.74rem;color:#e7e5e4;}
.rt-sidebar{background:#e7e5e4;padding:22px 18px;border-right:2px solid #a8a29e;}
.rt-main{padding:22px 26px;background:white;}
.rt-section-title{font-size:.64rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#57534e;border-bottom:2px solid #a8a29e;padding-bottom:5px;margin:19px 0 15px;}
.rt-sidebar .rt-section-title{color:#44403c;}
.rt-summary{font-size:.86rem;line-height:1.7;color:#44403c;background:#faf7f2;padding:14px;border-radius:8px;border-left:4px solid #a8a29e;}
.rt-entry{margin-bottom:16px;background:#faf7f2;padding:13px;border-radius:8px;border-left:4px solid #57534e;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;}
.rt-entry-role{font-weight:600;font-size:.86rem;color:#44403c;}
.rt-entry-company{color:#57534e;font-size:.81rem;}
.rt-entry-date{font-size:.71rem;color:#78716c;background:#e7e5e4;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.81rem;line-height:1.62;margin-top:6px;color:#57534e;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#d6d3d1;color:#44403c;border-radius:4px;padding:3px 9px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#44403c;border-radius:4px;padding:3px 8px;font-size:.7rem;border:1px solid #a8a29e;}`,
        },
        {
          name: "Electric Blue",
          layout: "single",
          color: "#2563eb",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'DM Sans',sans-serif;color:#0f172a;background:linear-gradient(145deg,#eff6ff 0%,#dbeafe 100%);min-height:100%;}
.rt-header{border-left:8px solid #2563eb;padding-left:22px;margin-bottom:26px;}
.rt-name{font-size:2.3rem;font-weight:800;color:#1e3a8a;letter-spacing:-.4px;}
.rt-title{color:#2563eb;font-size:.88rem;margin:6px 0 10px;font-weight:600;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;gap:16px;font-size:.78rem;color:#3b82f6;}
.rt-section-title{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:#2563eb;margin:24px 0 15px;border-left:5px solid #3b82f6;padding-left:12px;}
.rt-summary{font-size:.88rem;line-height:1.76;color:#1e3a8a;background:#eff6ff;padding:16px;border-radius:12px;border:1px solid #93c5fd;}
.rt-entry{margin-bottom:18px;background:#eff6ff;padding:16px;border-radius:12px;border-left:8px solid #2563eb;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.88rem;color:#1e3a8a;}
.rt-entry-company{color:#2563eb;font-size:.83rem;}
.rt-entry-date{font-size:.73rem;color:#2563eb;background:#dbeafe;padding:2px 12px;border-radius:30px;}
.rt-entry-desc{font-size:.83rem;line-height:1.66;margin-top:8px;color:#1e40af;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#dbeafe;color:#2563eb;border-radius:30px;padding:3px 12px;font-size:.73rem;border:1px solid #60a5fa;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#1e40af;border-radius:6px;padding:3px 10px;font-size:.73rem;border:1px solid #3b82f6;}`,
        },
        {
          name: "Warm Apricot",
          layout: "sidebar",
          color: "#c2410c",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:190px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#fff7ed;}
.rt-header{background:#c2410c;color:#fff7ed;padding:26px 22px;grid-column:1/-1;border-bottom:4px solid #f97316;}
.rt-name{font-size:1.95rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#fed7aa;font-size:.84rem;margin:5px 0 9px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:13px;font-size:.74rem;color:#ffedd5;}
.rt-sidebar{background:#ffedd5;padding:22px 18px;border-right:3px solid #c2410c;}
.rt-main{padding:22px 26px;background:white;}
.rt-section-title{font-size:.64rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#c2410c;border-bottom:2px solid #c2410c;padding-bottom:5px;margin:19px 0 15px;}
.rt-sidebar .rt-section-title{color:#9a3412;}
.rt-summary{font-size:.86rem;line-height:1.7;color:#9a3412;background:#fff7ed;padding:14px;border-radius:8px;border-left:4px solid #f97316;}
.rt-entry{margin-bottom:16px;background:#ffedd5;padding:13px;border-radius:8px;border-left:4px solid #c2410c;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;}
.rt-entry-role{font-weight:600;font-size:.86rem;color:#9a3412;}
.rt-entry-company{color:#c2410c;font-size:.81rem;}
.rt-entry-date{font-size:.71rem;color:#ea580c;background:#fed7aa;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.81rem;line-height:1.62;margin-top:6px;color:#7b341e;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#fed7aa;color:#c2410c;border-radius:20px;padding:3px 10px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#9a3412;border-radius:4px;padding:3px 8px;font-size:.7rem;border:1px solid #f97316;}`,
        },
        {
          name: "Dark Academia",
          layout: "single",
          color: "#2d2d2d",
          isDefault: true,
          css: `
.rt-wrap{padding:38px;font-family:'Cormorant Garamond',serif;color:#e5e5e5;background:#2d2d2d;min-height:100%;}
.rt-header{border-bottom:2px solid #b8860b;padding-bottom:16px;margin-bottom:24px;}
.rt-name{font-size:2.5rem;font-weight:700;color:#e5e5e5;letter-spacing:-.3px;font-family:'Cormorant Garamond',serif;}
.rt-title{color:#b8860b;font-size:.9rem;margin:6px 0 10px;font-weight:500;text-transform:uppercase;letter-spacing:.15em;}
.rt-contact{display:flex;flex-wrap:wrap;gap:16px;font-size:.78rem;color:#a3a3a3;}
.rt-section-title{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#b8860b;margin:24px 0 15px;border-bottom:2px solid #b8860b;padding-bottom:5px;}
.rt-summary{font-size:.9rem;line-height:1.8;color:#d4d4d4;font-style:italic;padding:0 10px;}
.rt-entry{margin-bottom:18px;padding-left:15px;border-left:2px solid #b8860b;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.9rem;color:#e5e5e5;}
.rt-entry-company{color:#b8860b;font-size:.84rem;}
.rt-entry-date{font-size:.74rem;color:#a3a3a3;background:#404040;padding:2px 12px;border-radius:20px;}
.rt-entry-desc{font-size:.84rem;line-height:1.68;margin-top:8px;color:#c0c0c0;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#404040;color:#b8860b;border-radius:4px;padding:3px 12px;font-size:.74rem;border:1px solid #b8860b;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#b8860b;border-radius:4px;padding:3px 10px;font-size:.74rem;border:1px solid #b8860b;}`,
        },
        {
          name: "Arctic Dawn",
          layout: "sidebar",
          color: "#a5f3fc",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:190px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#f0f9ff;}
.rt-header{background:#155e75;color:#f0f9ff;padding:26px 22px;grid-column:1/-1;border-bottom:4px solid #a5f3fc;}
.rt-name{font-size:1.95rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#a5f3fc;font-size:.84rem;margin:5px 0 9px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:13px;font-size:.74rem;color:#cffafe;}
.rt-sidebar{background:#e0f2fe;padding:22px 18px;border-right:3px solid #155e75;}
.rt-main{padding:22px 26px;background:white;}
.rt-section-title{font-size:.64rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#155e75;border-bottom:2px solid #155e75;padding-bottom:5px;margin:19px 0 15px;}
.rt-sidebar .rt-section-title{color:#164e63;}
.rt-summary{font-size:.86rem;line-height:1.7;color:#164e63;background:#f0f9ff;padding:14px;border-radius:8px;border-left:4px solid #22d3ee;}
.rt-entry{margin-bottom:16px;background:#f0f9ff;padding:13px;border-radius:8px;border-left:4px solid #155e75;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;}
.rt-entry-role{font-weight:600;font-size:.86rem;color:#164e63;}
.rt-entry-company{color:#155e75;font-size:.81rem;}
.rt-entry-date{font-size:.71rem;color:#0891b2;background:#cffafe;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.81rem;line-height:1.62;margin-top:6px;color:#1e3a5f;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#cffafe;color:#155e75;border-radius:20px;padding:3px 10px;font-size:.7rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#164e63;border-radius:4px;padding:3px 8px;font-size:.7rem;border:1px solid #22d3ee;}`,
        },
        {
          name: "Cinnamon Spice",
          layout: "single",
          color: "#9a3412",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'DM Sans',sans-serif;color:#2d1b0e;background:#fef3e2;min-height:100%;}
.rt-header{background:#9a3412;color:#fff3e0;padding:24px 28px;border-radius:12px;margin-bottom:24px;box-shadow:0 6px 14px rgba(154,52,18,.3);}
.rt-name{font-size:2.2rem;font-weight:700;color:white;letter-spacing:-.3px;}
.rt-title{color:#fed7aa;font-size:.86rem;margin:6px 0 10px;font-weight:500;}
.rt-contact{display:flex;flex-wrap:wrap;gap:15px;font-size:.76rem;color:#ffedd5;}
.rt-section-title{font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#9a3412;margin:22px 0 14px;border-left:5px solid #9a3412;padding-left:12px;}
.rt-summary{font-size:.87rem;line-height:1.74;color:#7b341e;background:#fff7ed;padding:16px;border-radius:10px;border:1px solid #fcd34d;}
.rt-entry{margin-bottom:18px;background:#fff7ed;padding:16px;border-radius:10px;border-left:5px solid #9a3412;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.87rem;color:#7b341e;}
.rt-entry-company{color:#9a3412;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#b45309;background:#fed7aa;padding:2px 12px;border-radius:30px;}
.rt-entry-desc{font-size:.82rem;line-height:1.65;margin-top:8px;color:#92400e;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#fed7aa;color:#9a3412;border-radius:30px;padding:3px 12px;font-size:.72rem;border:1px solid #fbbf24;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#92400e;border-radius:6px;padding:3px 10px;font-size:.72rem;border:1px solid #d97706;}`,
        },
        {
          name: "Mystic Purple",
          layout: "sidebar",
          color: "#581c87",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:200px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#f5f0ff;}
.rt-header{background:#581c87;color:#f3e8ff;padding:27px 23px;grid-column:1/-1;border-bottom:4px solid #c084fc;}
.rt-name{font-size:2rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#d8b4fe;font-size:.85rem;margin:5px 0 10px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:14px;font-size:.75rem;color:#e9d5ff;}
.rt-sidebar{background:#f3e8ff;padding:23px 19px;border-right:3px solid #581c87;}
.rt-main{padding:23px 27px;background:white;}
.rt-section-title{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#581c87;border-bottom:2px solid #581c87;padding-bottom:5px;margin:20px 0 16px;}
.rt-sidebar .rt-section-title{color:#6b21a8;}
.rt-summary{font-size:.87rem;line-height:1.71;color:#6b21a8;background:#f5f0ff;padding:15px;border-radius:8px;border-left:4px solid #c084fc;}
.rt-entry{margin-bottom:16px;background:#f3e8ff;padding:14px;border-radius:8px;border-left:4px solid #581c87;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;}
.rt-entry-role{font-weight:600;font-size:.87rem;color:#6b21a8;}
.rt-entry-company{color:#581c87;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#7e22ce;background:#e9d5ff;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.82rem;line-height:1.63;margin-top:6px;color:#581c87;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#e9d5ff;color:#581c87;border-radius:20px;padding:3px 10px;font-size:.71rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#6b21a8;border-radius:4px;padding:3px 8px;font-size:.71rem;border:1px solid #a855f7;}`,
        },
        {
          name: "Olive Branch",
          layout: "single",
          color: "#3f6212",
          isDefault: true,
          css: `
.rt-wrap{padding:35px;font-family:'DM Sans',sans-serif;color:#1e2d1e;background:#f7fee7;min-height:100%;}
.rt-header{text-align:center;border-bottom:3px solid #3f6212;padding-bottom:18px;margin-bottom:25px;}
.rt-name{font-size:2.2rem;font-weight:700;color:#3f6212;letter-spacing:-.3px;}
.rt-title{color:#4d7c0f;font-size:.86rem;margin:6px 0 10px;font-weight:600;text-transform:uppercase;}
.rt-contact{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;font-size:.76rem;color:#3f6212;}
.rt-section-title{font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:#3f6212;margin:22px 0 14px;border-bottom:3px dotted #84cc16;padding-bottom:5px;}
.rt-summary{font-size:.87rem;line-height:1.74;color:#1e3a2e;background:#f7fee7;padding:16px;border-radius:12px;border:1px solid #a3e635;}
.rt-entry{margin-bottom:18px;background:#f7fee7;padding:16px;border-radius:12px;border-bottom:3px solid #3f6212;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px;}
.rt-entry-role{font-weight:700;font-size:.87rem;color:#1e3a2e;}
.rt-entry-company{color:#3f6212;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#4d7c0f;background:#d9f99d;padding:2px 12px;border-radius:30px;}
.rt-entry-desc{font-size:.82rem;line-height:1.65;margin-top:8px;color:#2e4d2e;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-tag{background:#d9f99d;color:#3f6212;border-radius:20px;padding:3px 12px;font-size:.72rem;border:1px solid #a3e635;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.rt-pill{background:transparent;color:#1e3a2e;border-radius:6px;padding:3px 10px;font-size:.72rem;border:1px solid #84cc16;}`,
        },
        {
          name: "Stormy Night",
          layout: "sidebar",
          color: "#1e293b",
          isDefault: true,
          css: `
.rt-wrap{display:grid;grid-template-columns:200px 1fr;min-height:100%;font-family:'DM Sans',sans-serif;background:#e2e8f0;}
.rt-header{background:#0f172a;color:#e2e8f0;padding:28px 24px;grid-column:1/-1;border-bottom:4px solid #475569;}
.rt-name{font-size:2rem;font-weight:600;color:white;letter-spacing:-.2px;}
.rt-title{color:#94a3b8;font-size:.85rem;margin:5px 0 10px;font-weight:400;}
.rt-contact{display:flex;flex-wrap:wrap;gap:14px;font-size:.75rem;color:#cbd5e1;}
.rt-sidebar{background:#cbd5e1;padding:24px 20px;border-right:3px solid #0f172a;}
.rt-main{padding:24px 28px;background:white;}
.rt-section-title{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#0f172a;border-bottom:2px solid #0f172a;padding-bottom:5px;margin:20px 0 16px;}
.rt-sidebar .rt-section-title{color:#1e293b;}
.rt-summary{font-size:.87rem;line-height:1.71;color:#1e293b;background:#f1f5f9;padding:15px;border-radius:8px;border-left:4px solid #475569;}
.rt-entry{margin-bottom:16px;background:#f1f5f9;padding:14px;border-radius:8px;border-left:4px solid #0f172a;}
.rt-entry-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;}
.rt-entry-role{font-weight:600;font-size:.87rem;color:#0f172a;}
.rt-entry-company{color:#1e293b;font-size:.82rem;}
.rt-entry-date{font-size:.72rem;color:#475569;background:#cbd5e1;padding:2px 10px;border-radius:20px;}
.rt-entry-desc{font-size:.82rem;line-height:1.63;margin-top:6px;color:#334155;}
.rt-tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-tag{background:#94a3b8;color:#0f172a;border-radius:4px;padding:3px 9px;font-size:.71rem;}
.rt-pill-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}
.rt-pill{background:transparent;color:#1e293b;border-radius:20px;padding:3px 8px;font-size:.71rem;border:1px solid #64748b;}`,
        },
      ];

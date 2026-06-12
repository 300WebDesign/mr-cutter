# Mr Cutter Website — Netlify Deployment Guide

## Files in this package
```
mr-cutter/
├── index.html      ← All website content and structure
├── styles.css      ← All styling and colours
├── script.js       ← Navigation, FAQ, animations
├── assets/         ← Put your photos here
└── README.md       ← This file
```

---

## HOW TO DEPLOY ON NETLIFY (Beginner steps)

1. Go to https://app.netlify.com and create a free account.
2. Click **"Add new site"** → **"Deploy manually"**.
3. Drag and drop the entire **mr-cutter folder** onto the Netlify upload area.
4. Netlify gives you a random URL like `random-name-123.netlify.app`.
5. To use your own domain (e.g. `mrcutter.co.za`), go to **Domain settings** and follow the steps.

That's it. No server, no database, no code to run.

---

## HOW TO CHANGE THINGS

### Change the phone number
Search the files for `0822322924` (no spaces).
Replace all instances with your number.

For WhatsApp links, also update: `27822322924`
(This is the international format: 27 = South Africa, then your number without the leading 0)

### Change colours
Open `styles.css` and find the `:root { }` section at the top.
Change the hex colour values there — everything will update automatically.

### Add real photos
1. Put your photos in the `/assets/` folder.
2. In `index.html`, find the `<!-- Replace with real photo -->` comments.
3. Replace the `<div class="img-placeholder-inner">...</div>` blocks with:
   ```html
   <img src="assets/your-photo-name.jpg" alt="Describe the photo here" />
   ```
4. Recommended photo sizes: 800×500px for service cards, 900×600px for the emergency section.

### Change text
Open `index.html` and edit the text directly. All content is clearly labelled with comments.

### Add Google Analytics
1. Get your tracking code from https://analytics.google.com
2. Paste it just before the `</head>` closing tag in `index.html`.

---

## RECOMMENDED GOOGLE BUSINESS PROFILE KEYWORDS
- Tree removal Newcastle KZN
- Emergency tree removal Newcastle
- Fallen tree removal Newcastle
- Storm damage tree removal Newcastle
- Stump grinding Newcastle
- Tree cutting Newcastle
- Site clearance Newcastle
- Palm trimming Newcastle
- Hedge trimming Newcastle
- Tree removal Madadeni
- Tree removal Osizweni
- Tree removal Dundee KZN
- Tree removal Dannhauser

---

## WHATSAPP TEMPLATE MESSAGE (copy this for social media posts)
```
Need a tree removed or have storm damage?

📸 Send us photos on WhatsApp
📍 Tell us your suburb
⚡ We respond fast — 24/7 emergencies

Call or WhatsApp: 082 232 2924
Mr Cutter — Newcastle's Tree Removal Specialists
```

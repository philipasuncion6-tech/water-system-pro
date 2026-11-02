WATER SYSTEM PRO — FILIPINO EDITION V3.0
========================================

PACKAGE FILES
- index.html: main app (25 lessons, installation checklist, 12 troubleshooting topics, 5 calculators, 50-question quiz, maintenance log, glossary)
- manifest.webmanifest: PWA metadata
- service-worker.js: offline app-shell caching
- icon-192.png and icon-512.png: app icons

PUBLISH USING GITHUB PAGES
1. Extract this ZIP. Do not upload the ZIP file itself.
2. In your repository, open Code > Add file > Upload files.
3. Upload ALL SIX FILES into the repository ROOT. Keep the two PNG icons beside index.html; do not create an icons folder.
4. Commit directly to main.
5. Open repository Settings > Pages.
6. Under Build and deployment, choose Deploy from a branch.
7. Select branch main and folder /(root), then Save.
8. Wait for GitHub Pages to finish. Copy the published URL shown in Settings > Pages.
9. Open the HTTPS URL in Chrome on Android. After it loads, use Chrome menu (⋮) > Install app or Add to Home screen.
10. Open once while online so the service worker can cache the app shell. Then test offline.

IMPORTANT
- This package is not deployed or hosted yet. GitHub Pages setup is still required.
- Maintenance records, checklist progress and quiz best score are saved in the browser on this device only. They do not sync to GitHub or other devices. Use CSV/JSON export for backup.
- Educational guide only. Follow the pump manual, equipment ratings and local plumbing/electrical requirements.
- Never do live wiring, capacitor work, breaker work or internal pump repair yourself. Use a qualified electrician or pump technician.
- Pump selection needs required flow, total dynamic head, system losses and the manufacturer's pump curve; horsepower alone is not enough.

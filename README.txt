WATER SYSTEM PRO – FILIPINO EDITION (PWA)

Files:
- index.html: app interface
- manifest.webmanifest: install metadata
- service-worker.js: offline caching
- icons/: app icons

HOW TO INSTALL ON ANDROID:
1. Upload/extract this whole folder to a secure HTTPS static host (for example GitHub Pages or Netlify).
2. Open the published HTTPS address in Chrome on Android.
3. Tap Chrome menu (⋮) > Install app or Add to Home screen.
4. Confirm. The app will appear on your home screen and can open in standalone mode.
5. Open it once while online so the service worker can cache the app for offline use.

IMPORTANT:
- A PWA requires HTTPS (or localhost) for service-worker installation. Opening index.html directly from Downloads will still open the website, but will not install the PWA or enable its service worker.
- This package is not an APK and has not been published online. Hosting and installation must be completed by the user.
- Offline support caches the app shell; features that depend on browser storage remain on that device.

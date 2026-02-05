# TalkForge static pages build

This folder contains a plain HTML/CSS/Vanilla JS version of TalkForge for GitHub Pages.

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings -> Pages**.
3. Set source to your branch and folder:
   - Branch: `main` (or your target branch)
   - Folder: `/pages`
4. Save and wait for deployment.

The app entry point is `index.html` in this folder.

## Gemini API key

When the app opens, the user must paste their own Gemini API key in the **Gemini API Key** section before generating topics.

The key is used directly in-browser for Gemini requests.

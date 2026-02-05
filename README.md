# TalkForge 🎤

**AI-powered conference talk topic generator** — Transform your LinkedIn profile into compelling tech talk and workshop ideas.

## ✨ Features

### Solo Speaker Mode
- Upload your LinkedIn PDF export.
- Optionally add your GitHub username for richer insights.
- Get 4-6 personalized talk/workshop topics based on your unique experience.
- **Client-side Processing**: Your data is processed locally in your browser and sent directly to the Gemini API.

### Two Speakers Collaboration Mode
- Upload LinkedIn PDFs for two speakers.
- AI identifies synergies between different expertise areas.
- Get collaborative topic suggestions that leverage both speakers' strengths.

### Smart Validation
- **Instant LinkedIn PDF verification** — Validates file on upload.
- Detects LinkedIn-specific patterns (profile URL, section headers, page numbering).
- Rejects non-LinkedIn documents.

### Rich Topic Cards
- Copy topic title to clipboard.
- Expandable AI Research Prompt for each topic.
- Copy all topics at once.
- Format indicators (Talk vs Workshop), duration, and audience level.

### UI/UX
- Dark/Light theme toggle.
- Responsive design.
- Animated loading states.

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES Modules).
- **Styling**: Custom CSS with CSS Variables for theming.
- **AI**: Google Gemini API (Client-side integration).
- **PDF Processing**: PDF.js (via CDN).
- **Icons**: Lucide Icons (via CDN).

## 📁 Project Structure

```
.
├── index.html      # Main application entry point
├── app.js          # Core application logic (State, UI, API, PDF handling)
├── styles.css      # All application styles and themes
└── README.md       # Project documentation
```

## 🚀 Getting Started

Since this is a static web application, you don't need a complex build step.

### Prerequisites

- A modern web browser.
- A **Google Gemini API Key**.

### Running Locally

You can run the app by serving the files with any static file server.

**Using Python:**
```bash
# Run in the project directory
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

**Using Node.js (npx):**
```bash
npx serve .
# Open the URL provided in the terminal
```

Or simply open `index.html` directly in your browser (though some features might be restricted by browser security policies regarding local file access).

## 🔑 Configuration

1. Open the application.
2. In the **Gemini API Key** section, paste your API key.
3. (Optional) Check "Remember in this browser" to save the key to `localStorage` for future sessions.

## 📄 How to Export LinkedIn PDF

1. Go to your [LinkedIn Profile](https://linkedin.com/in/me).
2. Click the **"More"** button below your profile photo.
3. Select **"Save to PDF"**.
4. Upload the downloaded PDF to TalkForge.

## 🔒 content Security & Validations

- **PDF Validation**: Checks for LinkedIn profile URLs and section headers.
- **GitHub Validation**: format checks and API validation.
- **Private Key**: Your API key is stored only in your browser's local storage (if you choose to save it) and is never sent to any backend server (only to Google's API).

## 🎨 Theming

The app supports both dark and light modes, toggled via the sun/moon button. Preference is saved to `localStorage`.

## 📝 License

This project is open source and available under the MIT License.

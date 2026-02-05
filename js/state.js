export const state = {
  mode: "solo",
  progressStep: "idle",
  isLoading: false,
  showResults: false,
  topics: [],
  error: null,
  eventDescription: "",
  apiKey: "",
  rememberApiKey: true,
  solo: {
    file: null,
    extractedText: "",
    linkedInName: "",
    fileError: null,
    githubUsername: "",
    ghLoading: false,
    ghError: null,
    ghProfile: null,
    nameWarning: null,
    ghDebounceTimer: null,
    ghRequestId: 0
  },
  collab: {
    speaker1: createSpeakerState(),
    speaker2: createSpeakerState()
  }
};

export function createSpeakerState() {
  return {
    file: null,
    extractedText: "",
    linkedInName: "",
    fileError: null,
    githubUsername: "",
    ghLoading: false,
    ghError: null,
    ghProfile: null,
    nameWarning: null,
    ghDebounceTimer: null,
    ghRequestId: 0
  };
}

export const dom = {
  headerIconWrap: document.getElementById("headerIconWrap"),
  headerText: document.getElementById("headerText"),
  soloModeBtn: document.getElementById("soloModeBtn"),
  collabModeBtn: document.getElementById("collabModeBtn"),
  soloSection: document.getElementById("soloSection"),
  collabSection: document.getElementById("collabSection"),
  inputSection: document.getElementById("inputSection"),
  progressSection: document.getElementById("progressSection"),
  resultsSection: document.getElementById("resultsSection"),
  errorSection: document.getElementById("errorSection"),
  soloFileContainer: document.getElementById("soloFileContainer"),
  soloGitHubContainer: document.getElementById("soloGitHubContainer"),
  collabUploadGrid: document.getElementById("collabUploadGrid"),
  eventContainer: document.getElementById("eventContainer"),
  eventContainerCollab: document.getElementById("eventContainerCollab"),
  generateSoloBtn: document.getElementById("generateSoloBtn"),
  generateCollabBtn: document.getElementById("generateCollabBtn"),
  toastHost: document.getElementById("toastHost"),
  apiKeyInput: document.getElementById("apiKeyInput"),
  apiKeyStatus: document.getElementById("apiKeyStatus"),
  rememberApiKey: document.getElementById("rememberApiKey"),
  saveApiKey: document.getElementById("saveApiKey"),
  toggleApiKey: document.getElementById("toggleApiKey")
};

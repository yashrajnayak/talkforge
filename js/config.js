export const PDFJS_WORKER_CDN = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
export const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
export const MAX_PDF_SIZE_MB = 10;
export const MAX_PDF_SIZE_BYTES = MAX_PDF_SIZE_MB * 1024 * 1024;
export const MAX_LINKEDIN_TEXT_LENGTH = 50000;
export const MIN_LINKEDIN_TEXT_LENGTH = 50;
export const MAX_EVENT_DESCRIPTION_LENGTH = 1000;

export const LINKEDIN_SECTION_HEADERS = [
  "contact",
  "top skills",
  "languages",
  "summary",
  "experience",
  "education",
  "certifications",
  "honors-awards",
  "honors & awards",
  "publications",
  "projects",
  "courses",
  "recommendations",
  "interests",
  "volunteer experience"
];

export const LINKEDIN_UNIQUE_PATTERNS = [
  "linkedin.com/in/",
  "www.linkedin.com/in/",
  "page 1 of",
  "connections",
  "professional experience",
  "work experience"
];

export const NON_LINKEDIN_INDICATORS = [
  "invoice",
  "receipt",
  "order confirmation",
  "bank statement",
  "financial statement",
  "contract",
  "agreement",
  "terms and conditions",
  "privacy policy",
  "user manual",
  "instruction guide",
  "research paper",
  "abstract",
  "methodology",
  "bibliography",
  "references cited"
];

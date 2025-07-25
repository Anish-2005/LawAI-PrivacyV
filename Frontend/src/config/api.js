// API Configuration
const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000',
  TIMEOUT: parseInt(process.env.REACT_APP_API_TIMEOUT) || 10000,
  ENDPOINTS: {
    SEARCH: '/search/',
    DATABASE: '/database/',
    PDFS: '/pdfs/',
    ENCODE: '/encode/',
    CASE_LIST: '/case_list/',
    CASE_UPDATE: '/case_update/'
  }
};

// Create full API URLs
export const API_URLS = {
  SEARCH: `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SEARCH}`,
  DATABASE: `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DATABASE}`,
  PDFS: `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PDFS}`,
  ENCODE: `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ENCODE}`,
  CASE_LIST: `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CASE_LIST}`,
  CASE_UPDATE: (id) => `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CASE_UPDATE}${id}/`,
  PDF_DOWNLOAD: (id) => `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PDFS}${id}/download/`
};

export default API_CONFIG;

const isLocalHost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

export const getApiBaseUrl = () => {
  // Try to get from environment variable first (set at build time by Vite)
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl && envUrl.trim()) {
    return envUrl.trim();
  }

  // Fallback: localhost for dev, window-based detection for prod
  if (isLocalHost) {
    return "http://localhost:4444";
  }

  // This should not be reached if VITE_API_BASE_URL is properly set on Vercel
  return "https://carscout-backend-07qp.onrender.com";
};

export const APP_CONFIG = {
  apiBaseUrl: getApiBaseUrl(),
  email: {
    endpoints: [
      `${getApiBaseUrl()}/email/send`,
      `${getApiBaseUrl()}/email/send-purchase`,
      `${getApiBaseUrl()}/mail/send`,
      `${getApiBaseUrl()}/mailer/send`,
    ],
    emailJs: {
      serviceId: "",
      templateId: "",
      publicKey: "",
    },
  },
  logs: {
    enableProfileApiLogs: isLocalHost,
  },
};

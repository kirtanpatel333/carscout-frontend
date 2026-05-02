const isLocalHost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

const getApiBaseUrl = () => {
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }

  if (isLocalHost) {
    return "http://localhost:4444";
  }

  return "https://carscout-backend-2fxf.onrender.com";
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

export const analyticsId = "G-S9WVMKHH03";
export const consentKey = "datalink-analytics-consent";
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: `ga-disable-${string}`]: boolean;
};
let initialized = false;
let lastPath: string | undefined;
export function allowAnalytics() {
  const w = window as unknown as AnalyticsWindow;
  w[`ga-disable-${analyticsId}`] = false;
  if (initialized) {
    w.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }
  initialized = true;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () {
    // Google’s command queue expects the arguments object used by its tag snippet.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  w.gtag("js", new Date());
  w.gtag("config", analyticsId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: location.origin + location.pathname,
    page_referrer: safeReferrer(),
  });
  const script = document.createElement("script");
  script.async = true;
  script.id = "datalink-google-analytics";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
  document.head.appendChild(script);
}
function safeReferrer() {
  try {
    return document.referrer ? new URL(document.referrer).origin : "";
  } catch {
    return "";
  }
}
export function analyticsPageView(path: string) {
  if (!initialized || path === lastPath) return;
  const previous = lastPath;
  lastPath = path;
  (window as unknown as AnalyticsWindow).gtag?.("event", "page_view", {
    page_location: location.origin + path,
    page_referrer: previous ? location.origin + previous : safeReferrer(),
    page_title: document.title,
  });
}
export function denyAnalytics() {
  const w = window as unknown as AnalyticsWindow;
  w[`ga-disable-${analyticsId}`] = true;
  w.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  // Remove Analytics cookies for host and parent domains after withdrawal.
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.trim().split("=")[0];
    if (!/^_ga(?:_|$)/.test(name)) continue;
    document.cookie = `${name}=; Max-Age=0; path=/`;
    const parts = location.hostname.split(".");
    for (let i = 0; i < parts.length - 1; i++)
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${parts.slice(i).join(".")}`;
  }
}

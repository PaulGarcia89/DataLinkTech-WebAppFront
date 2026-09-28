/** Only fixed event names and coarse page paths; never form contents or contact details. */
export type ContactEvent =
  | "contact_phone_click"
  | "contact_whatsapp_click"
  | "contact_email_click"
  | "contact_sms_click"
  | "booking_open"
  | "contact_form_success";
export function trackContact(name: ContactEvent) {
  if (typeof window === "undefined") return;
  const detail = {
    event: name,
    page_path: window.location.pathname,
    language: document.documentElement.lang,
  };
  window.dispatchEvent(new CustomEvent("datalink:contact", { detail }));
  // Forward only to an already configured analytics integration. Do not load trackers here.
  const analytics = window as Window & {
    gtag?: (
      command: string,
      event: string,
      params: Record<string, string>,
    ) => void;
  };
  try {
    analytics.gtag?.("event", name, {
      page_path: detail.page_path,
      language: detail.language,
    });
  } catch {
    // Analytics must never interrupt contact navigation or successful submissions.
  }
}

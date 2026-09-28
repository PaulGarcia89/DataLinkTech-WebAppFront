"use client";
import { useEffect } from "react";
import { trackContact, type ContactEvent } from "@/i18n/contact-events";
import { bookingUrl } from "@/i18n/integrations";
export function ContactEvents() {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const element =
        event.target instanceof Element
          ? event.target.closest("a[href]")
          : null;
      if (!(element instanceof HTMLAnchorElement)) return;
      const url = new URL(element.href);
      let name: ContactEvent | undefined;
      if (url.protocol === "tel:") name = "contact_phone_click";
      else if (url.protocol === "sms:") name = "contact_sms_click";
      else if (url.protocol === "mailto:") name = "contact_email_click";
      else if (url.hostname === "wa.me") name = "contact_whatsapp_click";
      else if (element.href === bookingUrl()) name = "booking_open";
      if (name) trackContact(name);
    };
    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, []);
  return null;
}

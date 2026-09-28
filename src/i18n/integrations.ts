/** Public configuration only. Never place private API keys in NEXT_PUBLIC variables. */
export function formEndpoint() {
  const value = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      url.hostname === "formspree.io" &&
      /^\/f\/[a-zA-Z0-9]+$/.test(url.pathname)
      ? url.href
      : null;
  } catch {
    return null;
  }
}
export function bookingUrl() {
  const value = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      ["calendly.com", "calendar.google.com", "calendar.app.google"].includes(
        url.hostname,
      )
      ? url.href
      : null;
  } catch {
    return null;
  }
}

// Google Analytics tracking helper
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'lawyer_preview',
      ...params,
    })
  }
}

// Event names for consistency
export const EVENTS = {
  PASSWORD_PAGE_VIEW: 'password_page_view',
  PASSWORD_ATTEMPT: 'password_attempt',
  LANDING_VIEW: 'landing_view',
  THEME_CHANGE: 'theme_change',
  HERO_IMAGE_CHANGE: 'hero_image_change',
  DOWNLOAD_CLICK: 'download_click',
  SLIDER_CHANGE: 'slider_change',
  TIER_SELECT: 'tier_select',
  PAYMENT_START: 'payment_start',
  FREE_DOWNLOAD: 'free_download',
  SCHEDULE_CALL: 'schedule_call',
}

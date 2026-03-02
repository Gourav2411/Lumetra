export const trackEvent = (eventName: string, params: Record<string, any>) => {
  // In a real implementation, this would call window.gtag or dataLayer.push
  console.log(`[GA4 Event] ${eventName}`, params);
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

/// <reference types="vite/client" />

interface Window {
  fbq?: (action: 'track', event: 'Lead') => void;
}

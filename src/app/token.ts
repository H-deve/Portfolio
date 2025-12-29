import {InjectionToken} from '@angular/core';


// Define the EmailJsConfig interface
export interface EmailJsConfig {
  serviceID: string;
  templateID: string;
  publicKey: string;
}
// Create an InjectionToken for EmailJsConfig
export const EMAILJS_CONFIG  = new InjectionToken<EmailJsConfig>("EmailJsConfig");

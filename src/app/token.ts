import {InjectionToken} from '@angular/core';


// Define the EmailJsConfig interface
export interface EmailJsConfigInterface {
  serviceID: string;
  templateID: string;
  publicKey: string;
}
// Create an InjectionToken for EmailJsConfig
export const EMAILJS_CONFIG  = new InjectionToken<EmailJsConfigInterface>("EmailJsConfig");

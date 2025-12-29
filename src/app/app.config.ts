import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { EMAILJS_CONFIG, EmailJsConfig } from './token';


// Define the EmailJsConfig value
export const emailJsConfigValue: EmailJsConfig = {
  serviceID: 'service_o2sbbh7',
  templateID: 'template_78zumlo',
  publicKey: 'IOLcyx66KBQBmqUy_',
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    // Provide the EmailJsConfig value using the InjectionToken
    { provide: EMAILJS_CONFIG, useValue: emailJsConfigValue },
  ],


};

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { register } from 'swiper/element/bundle';
register();
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes , withViewTransitions() ), provideClientHydration(),
    provideAnimationsAsync(),
     provideHttpClient(withFetch()),
     importProvidersFrom(BrowserAnimationsModule)
     

  ]
};

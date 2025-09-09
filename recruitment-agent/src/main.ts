import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [provideRouter(appRoutes)]
}).catch(err => console.error(err));

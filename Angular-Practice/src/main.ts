import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/basics/app.component';
import { EventAppComponent } from './app/EventBinding/app.component.event';

bootstrapApplication(EventAppComponent, appConfig)
  .catch((err) => console.error(err));

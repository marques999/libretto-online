import 'core-js/client/shim';
import 'zone.js/dist/zone';
import '@angular/common';
import 'rxjs';
import './index.scss';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LibrettoModule } from './app.module';

declare var process: any;

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
} else {
  Error.stackTraceLimit = Infinity;
  require('zone.js/dist/long-stack-trace-zone'); // tslint:disable-line:no-var-requires
}

platformBrowserDynamic().bootstrapModule(LibrettoModule);

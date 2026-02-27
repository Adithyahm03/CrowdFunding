window.onerror = function (msg, url, line, col, error) {
  console.error('GLOBAL ERROR:', msg, 'at', url, ':', line, ':', col, error);
  alert('Caught global error: ' + msg);
};
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.log('Main.ts: Bootstrapping AppModule...');
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => console.log('Main.ts: AppModule bootstrapped successfully'))
  .catch(err => console.error('Main.ts: Bootstrap failed:', err));

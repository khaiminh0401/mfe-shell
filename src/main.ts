import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { registerApplication, start } from 'single-spa';


if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<app-root />',
  NgZone: NgZone,
});

registerApplication({
  name: 'mfe-auth',
  app: () => System.import('mfe-auth'),
  activeWhen: ['/auth'],
  customProps: {
    domElementGetter: () => document.getElementById('auth-container'), // Vùng mount cụ thể
  },
});

registerApplication({
  name: 'mfe-shell',
  app: {...lifecycles },
  activeWhen: ['/'], // Đường dẫn kích hoạt mfe-shell
  customProps: {
    domElementGetter: () => document.getElementById('single-spa-container'), // Vùng mount cụ thể
  },
});

start();
export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

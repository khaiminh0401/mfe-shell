import SystemJS from 'systemjs';
import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'mfe-auth',
  app: () => SystemJS.import('mfe-auth').then((module: any) => module),
  activeWhen: ['/auth'],
});

start();

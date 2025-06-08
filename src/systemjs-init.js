// Initialize SystemJS
SystemJS.import('mfe-auth').then((module) => {
  console.log('Loaded mfe-auth:', module);
}).catch((error) => {
  console.error('Error loading mfe-auth:', error);
});

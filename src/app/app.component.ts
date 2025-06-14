import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to MFE Shell</h1>
    <div id="single-spa-container"></div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe-shell';
}

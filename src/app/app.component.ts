import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  imports: [HelloComponent],
  template: `<app-hello></app-hello>`,
  styles: ``,
})
export class AppComponent {
  title = 'ng-learn';
}

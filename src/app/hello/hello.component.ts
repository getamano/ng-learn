import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  template: `<h1>{{ title }}</h1>`,
  styles: ``,
})
export class HelloComponent {
  title = 'Hello Angular!!';
}

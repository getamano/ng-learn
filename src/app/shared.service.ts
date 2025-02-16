import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {
    console.log('HTTP call');
  }

  mySharedFunction() {
    console.log('This is a shared function');
  }
}

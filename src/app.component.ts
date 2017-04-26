import { Component } from '@angular/core';

@Component({
  selector: 'fountain-root',
  template: `<fountain-header></fountain-header>
  <router-outlet></router-outlet>
  <fountain-footer></fountain-footer>`
})
export class LibrettoComponent { }

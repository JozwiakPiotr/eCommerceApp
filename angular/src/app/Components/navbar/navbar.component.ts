import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <header>
      <div class="logo-container"> 
        <h2>eCommerceApp</h2>
      </div>
      <button>Login</button>
    </header>
  `,
  styles: `
  header {
    display: flex;
  }
  `
})
export class NavbarComponent {

}

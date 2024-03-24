import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { FooterComponent } from "./Components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <div class="container">
    <app-navbar/>
    <router-outlet></router-outlet>
    <app-footer/>
  </div>
  `,
    styles: ``,
    imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'eCommerceApp';
}

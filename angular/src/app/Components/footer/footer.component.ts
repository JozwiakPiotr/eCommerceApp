import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <div>
        <h4>Resources</h4>
        <a href="#">About</a>
        <a href="#">About</a>
        <a href="#">About</a>
      </div>
      <div>
        <h4>Help</h4>
        <a href="#">About</a>
        <a href="#">About</a>
        <a href="#">About</a>
        <a href="#">About</a>
        <a href="#">About</a>
      </div>
      <div>
        <h4>About</h4>
        <a href="#">About</a>
        <a href="#">About</a>
        <a href="#">About</a>
      </div>
    </footer>
  `,
  styles: `
  footer {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  footer div {
    display: flex;
    flex-direction: column;
  }
  `
})
export class FooterComponent {

}

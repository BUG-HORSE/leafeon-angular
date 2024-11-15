import { Component } from '@angular/core';

@Component({
  selector: 'app-luna',
  standalone: true,
  imports: [],
  template: `
    <div class="container d-flex justify-content-center align-items-center p-3">
      <img src="images/lunawillspin.jpg" class="spin rounded" height="500px">
      <h2 class="spin-text">Luna goes whee</h2>

    </div>
  `,
  styleUrl: './luna.component.css'
})
export class LunaComponent {

}

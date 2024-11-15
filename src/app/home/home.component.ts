import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class="container d-flex justify-content-center align-items-center rounded p-3 border border-warning">
    <div class="col-6">
      <img src="images/ROSTI.jpg" height="600px" class="rounded">
    </div>
    <div class="col-4">
      <h2>ROSTI</h2>
      <p>that's my cat right there</p>
      <figure>
        <blockquote class="blockquote">
          <p>You don't even work for us</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Joeri in <cite title="Source Title">Teams</cite>
        </figcaption>
      </figure>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

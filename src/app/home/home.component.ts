import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="/assets/hero.png"
              class="d-block mx-lg-auto img-fluid"
              alt="Full stack developer"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-6 fw-bold lh-1 mb-3">
              Introduction to Angular basics project
            </h1>
            <p class="lead">
              Welcome to "Angular-Basics-Project-1," a foundational project
              designed to introduce the core concepts of Angular, a robust and
              versatile framework for building dynamic web applications. This
              project is structured to guide you through the basics of Angular's
              architecture, including components, modules, and services, along
              with the implementation of routing to create a navigable
              single-page application.
            </p>
            <!-- <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}

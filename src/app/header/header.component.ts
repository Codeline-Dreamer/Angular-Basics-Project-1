import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <header
        class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <img src="/assets/logo.svg" class="img-fluid" alt="Logo" />
          <span class="fs-4">Angular Basics - Project 1</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item main-menu">
            <a href="#" class="nav-link active" aria-current="page">Home</a>
          </li>
          <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        </ul>
      </header>
    </div>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

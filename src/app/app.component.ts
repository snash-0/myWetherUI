import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomersComponent } from './Component/customers/customers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myWetherUI';
}

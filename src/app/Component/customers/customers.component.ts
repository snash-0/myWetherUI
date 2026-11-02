import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Customers } from '../../Models/Customers';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';

import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [ReactiveFormsModule, CustomerListComponent, CreateCustomerComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  constructor(private customerService: CustomerService) {}

  customers: Customers[] = [];
  isCreatingCustomer: boolean = false;

  ngOnInit() {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  addCustomers() {
    this.isCreatingCustomer = !this.isCreatingCustomer;
    this.ngOnInit();
  }

  removeCustomer(customerId: number) {
    this.customers = this.customers.filter(customer => customer.customersid !== customerId);
  }
}

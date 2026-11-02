import { Component, input, output } from '@angular/core';
import { Customers } from '../../Models/Customers';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  customerList = input<Customers[]>([]);
  customerDeleted = output<number>();
  
  constructor(private customerService: CustomerService) { }
  
  editCustomer(customer: Customers) {
    // Implement the logic to edit the customer
    console.log('Editing customer:', customer);
  }
  
  deleteCustomer(customerId: number) {
    // Implement the logic to delete the customer
    console.log('Deleting customer with ID:', customerId);
    this.customerService.deleteCustomer(customerId).subscribe(() => {
      this.customerDeleted.emit(customerId);
    });
  }
}

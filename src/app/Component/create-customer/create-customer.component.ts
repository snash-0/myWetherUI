import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Customers } from '../../Models/Customers';

@Component({
  selector: 'app-create-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export class CreateCustomerComponent {

  customerForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    email: new FormControl(''),
    createdDate: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private customerService: CustomerService) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email] ],
      createdDate: ['', [Validators.required]],
    });
  }

  OnSubmit() {
    this.customerForm.markAllAsTouched();

    if (this.customerForm.invalid) {
      return;
    }

    const customer: Customers = {
      customersid: this.customerForm.value.id || 0,
      customername: this.customerForm.value.name || '',
      email: this.customerForm.value.email || '',
      createddate: new Date(this.customerForm.value.createdDate || ''),
    };

    this.customerService.createCustomer(customer).subscribe(
      (response) => {
        console.log('Customer created successfully:', response);
        this.customerForm.reset();
      },
      (error) => {
        console.error('Error creating customer:', error);
      }
    );

  }
}

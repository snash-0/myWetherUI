import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from '../Models/Customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private apiUrl = "https://localhost:7208/api/Customer";
  
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customers[]>{    
    return this.http.get<Customers[]>(this.apiUrl);
  }

  createCustomer(customer: Customers): Observable<Customers> {
    return this.http.post<Customers>(this.apiUrl, customer);
  }

  deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl, {
      params: { id: customerId.toString() }
    });
  }
}

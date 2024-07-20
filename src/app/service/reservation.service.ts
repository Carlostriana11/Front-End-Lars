import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient, private router: Router) {}

  createReservation(newReservation: any){
    return this.http.post<any>("http://localhost:3000/api/hotel", newReservation);
  }
}

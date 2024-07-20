import { Component } from '@angular/core';
import { NewReservationsComponent } from "../components/forms/new-reservations/new-reservations.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NewReservationsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}

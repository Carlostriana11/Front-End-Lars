import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from '../../../service/reservation.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-reservations',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-reservations.component.html',
  styleUrl: './new-reservations.component.css'
})
export class NewReservationsComponent {

  newReservation!: FormGroup

  constructor( private reservation: ReservationService ){
    this.newReservation = new FormGroup({
      guestName: new FormControl("", []),
      roomNumber: new FormControl("", []),
      guestEmail: new FormControl("", []),
      startDate: new FormControl("", []),
      endDate: new FormControl("", [])
    })
  }

  createOneReservation() {
    if (this.newReservation.valid) {
      this.reservation.createReservation(this.newReservation.value).subscribe(
        data => {
          // Mostrar mensaje de éxito
          Swal.fire({
            icon: 'success',
            title: 'Reservation made successfully',
            text: 'Your reservation has been made successfully.',
            confirmButtonText: 'accept'
          });
          console.log(data);
        },
        error => {
          // Mostrar mensaje de error en caso de fallo
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'There was a problem making your reservation. Please try again.',
            confirmButtonText: 'accept'
          });
          console.error('Error al crear la reserva', error);
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete form',
        text: 'Please complete all fields in the form.',
        confirmButtonText: 'accept'
      });
    }
  }
}

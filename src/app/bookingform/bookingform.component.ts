import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {

  constructor() {
  
   }

  ngOnInit() {
  }

  onSubmitForm(){

    alert('Booking Success');

  }


}

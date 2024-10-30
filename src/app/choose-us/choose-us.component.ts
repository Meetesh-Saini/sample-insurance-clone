import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  standalone: true,
  imports: [NgFor],
  templateUrl: './choose-us.component.html',
  styleUrl: './choose-us.component.css'
})
export class ChooseUsComponent {
  data = [
    ["Protective Protection", "Homeowner Insurance", "Consultations"],
    ["Money Back Guarantee", "Partnership System", "safety Ensure"]
  ]
}

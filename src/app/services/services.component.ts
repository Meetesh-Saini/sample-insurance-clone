import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  images = [
    {
      type: "vehicle", category: "Business",
      image: "assets/family-couch.png"
    }, {
      type: "vehicle", category: "Vehicle",
      image: "assets/family-outside.png"
    }, {
      type: "car", category: "Car",
      image: "assets/old-couple.png"
    }
  ]
}

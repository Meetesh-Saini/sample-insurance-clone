import { KeyValuePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, KeyValuePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  data = {
    "Company" : ["Case Studies", "Case Details", "Privacy Policy", "Services"],
    "Explore" : ["About Us", "Blog And News", "Blog Details", "Pricing"],
    "Insurance":["Health Insurance", "Car Insurance", "Business Insurance", "Life Insurance"]
  }
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  data = [
    { text: "Money Back Guarantee", image: "assets/money-back.png" },
    { text: "All Claims At Anytime", image: "assets/claim.png" },
    { text: "Digital Insurance Policy", image: "assets/policy.png" },
    { text: "Direct Payment App", image: "assets/payment.png" },
  ]

  about = [
    {text: "Trusted By Thousand", image: "assets/trust.png"},
    {text: "Set For Life", image: "assets/care.png"},
    {text: "Protective Insurance", image: "assets/protect.png"},
  ]
}

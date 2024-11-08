import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  effectiveDate: string;

  constructor() {
    this.effectiveDate = new Date().toLocaleDateString();
  }

  ngOnInit(): void {
  }

}

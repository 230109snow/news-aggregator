import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apphelp',
  templateUrl: './apphelp.component.html',
  styleUrls: ['./apphelp.component.css']
})
export class ApphelpComponent {
  constructor(private router: Router) {}

  gotohome() : void {
    this.router.navigate(['home'])
  }
}

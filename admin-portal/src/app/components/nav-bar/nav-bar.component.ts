import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-nav-bar',
  imports: [MatToolbarModule, MatDividerModule, MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {

  private loggedIn: boolean = false;

  get isLoggedIn(): boolean {
    return this.loggedIn;
  }

  toggleDisplay() {
    this.loggedIn = !this.loggedIn;
  }

}

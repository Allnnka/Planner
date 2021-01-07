import { Component, HostBinding, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','../../scss/_main.scss']
})
export class HeaderComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  @HostBinding('class.open') navbarOpened = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleNavbar(){
    this.navbarOpened = !this.navbarOpened;
  }

}

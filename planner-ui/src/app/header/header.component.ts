import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','../../scss/_main.scss']
})
export class HeaderComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  faSignOutAlt=faSignOutAlt;
  @HostBinding('class.open') navbarOpened = false;
  constructor(private router:Router,public auth: AuthService) { }

  ngOnInit(): void {
  }
  toggleNavbar(){
    this.navbarOpened = !this.navbarOpened;
  }
  logout() {
    this.auth.logout();
  }
}

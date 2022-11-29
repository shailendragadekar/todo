import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { api } from '../../shared/constants/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  authenticateUser() {
    this.auth.post(api.auth.login, { email: this.username, password: this.password })
      .subscribe((response: any) => {
        this.auth.setUserId(response.session.userId);
        this.auth.setAccessToken(response.session.id);
      }, (error) => {
        console.error(error);
      });
  }

}

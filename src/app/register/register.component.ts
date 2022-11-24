import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { AuthService } from '../services/auth.service';
import { api } from '../shared/constants/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(private logger: LoggerService, private auth: AuthService) { }

  ngOnInit(): void {
  }

  createAccount() {
    this.auth.post(api.auth.create, { email: this.email, password: this.password, username: this.email })
      .subscribe((response: any) => {
        console.log(response);
        this.logger.log('Account Created');
      }, (error) => {
        console.error(error);
      });
  }
}

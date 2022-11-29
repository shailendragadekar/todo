import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../logger.service';
import { AuthService } from '../../services/auth.service';
import { api } from '../../shared/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(private logger: LoggerService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  createAccount() {
    this.auth.post(api.auth.create, { email: this.email, password: this.password, username: this.email })
      .subscribe((response: any) => {
        this.logger.log('Account Created');
        this.router.navigate(['/login']);
      }, (error) => {
        console.error(error);
      });
  }
}

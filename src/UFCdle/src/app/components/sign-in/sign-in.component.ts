import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  faGoogle = faGoogle;
  ngOnInit() {}
}
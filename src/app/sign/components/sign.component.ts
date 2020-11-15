import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '@system/services/token.service';
import { UserService } from '@core/services/user.service';
import { first } from 'rxjs/operators';
import { ifNotNull } from '@witty-services/rxjs-common';
import { User } from '@core/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'wkd-sign',
  templateUrl: './sign.component.html'
})
export class SignComponent {

  public form: FormGroup;

  public constructor(private readonly authService: TokenService,
                     private readonly userService: UserService,
                     private readonly router: Router,
                     fb: FormBuilder) {
    this.form = fb.group({
      wkToken: ['', Validators.required]
    });
  }

  public sign(): void {
    if (this.form.invalid) {
      return;
    }

    this.authService.signIn(this.form.controls.wkToken.value);
    this.userService.getCurrentUser().pipe(
      ifNotNull(),
      first()
    ).subscribe((user: User | null) => user ? this.router.navigate(['/', 'app', 'dashboard']) : void 0);
  }
}

import { Component, model } from '@angular/core';

@Component({
  selector: 'app-login-form',
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  username = model<String>('')

onInput() {
  console.log("toto")
}

  updateUserName() {
    this.username.update(value => value.toUpperCase())
  }

}

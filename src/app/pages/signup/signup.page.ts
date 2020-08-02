import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: any = [];

  showPassword: boolean = false;
  passwordIcon = "eye-off-outline";
  constructor() {
    this.signupForm['password'] = "";
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("form submitted");
  }

  togglePassword() {
    // Password show hide functionality. Avoiding using inline if condition to make the code more readable.
    this.showPassword = !this.showPassword;
    if (!this.showPassword) {
      this.passwordIcon = "eye-off-outline";
    } else {
      this.passwordIcon = "eye-outline";
    }
  }
}

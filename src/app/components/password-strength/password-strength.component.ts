import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl:'./password-strength.component.html',
  })
  
  export class PasswordStrenght {
    @Input() password: string = '';
  
    get strength(): string {
      if ((!this.password)) {
        return 'blank';
      }
      if (this.password.length < 8) {
        return 'ckeck-length';
      }
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(this.password);
      if ((hasLetters && hasDigits && hasSymbols)) {
        return 'strong';
      } 
      if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)){
        return 'medium';
      } 
      else {
        return 'easy';
      }
    }
  }
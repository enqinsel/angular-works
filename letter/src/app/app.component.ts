import { Component } from '@angular/core';
import {faker} from '@faker-js/faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText =  faker.lorem.words()
  enterText = ''

  getInputValue(value: string) {
    this.enterText = value
  }

  compare(randomLetter:string, enteredLetter:string){
    if(!enteredLetter){
      return 'pending'
    }
    return enteredLetter === randomLetter ? 'correct' : 'danger'
  }
}

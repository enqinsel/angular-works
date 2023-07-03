import { Component } from "@angular/core";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})

export class ServiceComponent{

  // Boş string js'de false olarak algılanır
  password:string = "";
  length:number = 0;
  includeLenght:boolean = false;
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;


  modifyLenght(value:string){
    const parsedValue = parseInt(value)
    if(!isNaN(parsedValue)){
      this.length = parsedValue
    }
  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  createHandler(){
    const numbers = "1234567890"
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

    let validChars = '';

    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';

    for(let i=0; i<this.length; i++){
      const index = Math.floor(Math.random()*validChars.length)
      generatedPassword += validChars[index]
    }

    this.password = generatedPassword;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  result;
  serverElements = [{
    type: 'server',
    name: 'newServer',
    content: 'New Server'
  }];

  onServerAdded(serverData:{
    serverName: string,
    serverContent: string
  }){
    this.serverElements.push({
      type :'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onServerBlueprintAdded( blueprintData:{
    serverName: string,
    serverContent: string
  }){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onClickClean(cleanData:{
    firstNumber: string,
    secondNumber: string,
    operator: string
  }){
    this.result ='';
  }

  onClickCalckButton(calckData:{
    firstNumber: number,
    secondNumber: number,
    operator: string,
 
  }){
    switch (calckData.operator) {
      case '+':
       this.result = Number(calckData.firstNumber) + Number(calckData.secondNumber);
        break;
      case '-':
      this.result = Number(calckData.firstNumber) - Number(calckData.secondNumber);
        break;
      case '*':
        this.result = Number(calckData.firstNumber) * Number(calckData.secondNumber);
        break;
      case '/':
      this.result = Number(calckData.firstNumber) / Number(calckData.secondNumber);
      break;
      case '%':
      this.result = Number(calckData.firstNumber) % Number(calckData.secondNumber);
      break;
      default:
        console.log('error');
    }
  }
}

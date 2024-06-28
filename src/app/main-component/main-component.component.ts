import { Clipboard } from '@angular/cdk/clipboard';
import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {
message:string="";
resultMessage:string="";
messageFormat:string="";

constructor(private clipboard: Clipboard){

}

encodeBase64(){
  this.resultMessage= btoa(this.message);

}
decodeBase64(){
  this.resultMessage=atob(this.message);
 
}
encodeToBinary(){
  // Now I will encode string to binary format
this.resultMessage=this.message.split('').map((char)=>char.charCodeAt(0).toString(2).padStart(8,"0")).join(' ');
   console.log(this.message);
  
}
decodeToString(){
  this.resultMessage=this.message.split(' ').map(str=>String.fromCharCode(parseInt(str,2))).join('');
}
encodeToOctalString(){
  this.resultMessage=this.message.split('').map(n=>n.charCodeAt(0).toString(8).padStart(3,'0')).join(' ');
}
decodeOctalString(){
  this.resultMessage=this.message.split(' ').map(n=>String.fromCharCode(parseInt(n,8))).join('');
}
clearText(){
  this.message='';
   this.resultMessage='';
}
copyText(){
  this.clipboard.copy(this.resultMessage);
  console.log("Successfully copy");
}
}

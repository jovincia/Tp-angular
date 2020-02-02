import { Component } from '@angular/core';
import {log} from 'util';
import { Plugins } from 'protractor/built/plugins';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor() {}
  view: string =" ";
  nombre1:number;
  nombre2:number;
  nombre3:number;
  operateur:string;
  submit(){
    this.nombre2=+this.view;
    this.view=" ";
    switch(this.operateur){
      case "plus":
        console.log(this.nombre1+"+"+this.nombre2);
        console.log(this.nombre1 + this.nombre2);
        this.view += this.nombre1+this.nombre2;
        break;
       
 case "moins":{
  console.log(this.nombre1+"-"+this.nombre2);
  console.log(this.nombre1 - this.nombre2);
  this.view += this.nombre1-this.nombre2;
  break;
  
  }
  case "multi":{
    console.log(this.nombre1+"*"+this.nombre2);
    console.log(this.nombre1 * this.nombre2);
    this.view += this.nombre1*this.nombre2;
    break;

  
  }
  case"division":{
  console.log(this.nombre1+"/"+this.nombre2);
  console.log(this.nombre1 /this.nombre2);
  this.view += this.nombre1/this.nombre2;
  break;
  }
  case"modulo":{
    console.log(this.nombre1+"%"+this.nombre2);
    console.log(this.nombre1  % this.nombre2);
    this.view += this.nombre1 % this.nombre2;
    break;
    }

    }
  }

  clear(){
    this.view=" ";
    log(this.view);
  }
  

  click(nbr:number){
    this.view=this.view + nbr;
    log(this.view);
  }
  plus(){
    this.nombre1 =+ this.view;
    this.operateur = "plus";
    this.view="";
    console.log(this.view);
  }
  moins(){
    this.nombre1 =+ this.view;
    this.operateur = "moins";
    this.view="";
    console.log(this.view);

  }
  multi(){
  this.nombre1 =+ this.view;
  this.operateur = "multi";
  this.view="";
  console.log(this.view);
  }
  division(){
    this.nombre1 =+ this.view;
    this.operateur = "division";
    this.view="";
    console.log(this.view);
    }
    modulo(){
        this.nombre1 =+ this.view;
        this.operateur = "modulo";
        this.view="";
        console.log(this.view);
        }
        plus_moins(pm:number){
          pm=+this.view;
          if(pm >= 0){
            this.view="";
           this.view+= pm=+(pm*-1);
            console.log(this.view);
            
            }
            else{
              pm=+(pm*-1);
            this.view="";
            this.view+= pm=+(pm*-1);
            console.log(this.view);
          }
          
    }
    point(nbr1:number){
     
      nbr1=+this.view;
      this.view="";
      this.view+=nbr1+".";
      console.log(this.view);

    }
    
  
  


}


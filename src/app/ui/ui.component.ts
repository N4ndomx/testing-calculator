import { Component, OnInit } from '@angular/core';
import { addition } from "../addition/addition"
import { factorial } from '../factorial/factorial';
import { radianes } from '../radianes/radianes';
import { seno } from '../seno/seno';
import { coseno } from '../coseno/coseno';
import { tangente } from '../tangente/tangente';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  result = 0;
  operator1 = 0;
  operator2 = 0;

  ngOnInit() {
  }

  addition() {
    let myresult = 0;
    myresult = addition(this.operator1, this.operator2);
    this.result = myresult;
  }

  factorial() {
    let myresult = 0
    myresult = factorial(this.operator1)
    this.result = myresult
  }

  radianes() {
    let myresult = 0
    myresult = radianes(this.operator1)
    this.result = myresult
  }
  seno() {
    let myresult = 0
    myresult = seno(this.operator1)
    this.result = myresult

  }
  coseno() {
    let myresult = 0
    myresult = coseno(this.operator1)
    this.result = myresult
  }
  tangente() {
    let myresult = 0
    myresult = tangente(this.operator1)
    this.result = myresult
  }

}

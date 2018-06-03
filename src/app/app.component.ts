import { Zadania } from './model/zadania';
import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

declare var $: any;
declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  debug = false;
  title = 'app';
  nazwaZasobu;
  zadania = {
    'data': '2018-06-02',
    'zasoby': [{ 'id': '1', 'nazwa': 'Jurek' }, { 'id': '2', 'nazwa': 'Marek' }, { 'id': '3', 'nazwa': 'Czesiek' }],
    'bags': [
      { 'nazwa': 'Projekt1', 'osoby': [{ 'id': '4', 'nazwa': 'O11' }, { 'id': '7', 'nazwa': 'O12' }, { 'id': '10', 'nazwa': 'O13' }] },
      { 'nazwa': 'Projekt2', 'osoby': [{ 'id': '5', 'nazwa': 'O21' }, { 'id': '8', 'nazwa': 'O22' }, { 'id': '11', 'nazwa': 'O23' }] },
      { 'nazwa': 'Projekt3', 'osoby': [{ 'id': '6', 'nazwa': 'O31' }, { 'id': '9', 'nazwa': 'O32' }, { 'id': '12', 'nazwa': 'O33' }] }
    ]
  };

  options: any = {
    removeOnSpill: false
  };

  ngOnInit() {
    $(document).ready(function () {
      $('.datepicker').DatePicker();
    });
  }
  addZasob() {
    this.zadania.zasoby.push({ 'id': '11', 'nazwa': '' });
  }
  addProjekt() {

    this.zadania.bags.push({ 'nazwa': '', 'osoby': [] });
  }


}

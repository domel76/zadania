import { Zadania } from './model/zadania';
import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  nazwaZasobu;
  zadania = {
    'data': '2018-06-02',
    'zasoby': ['Jurek', 'Marek', 'Czesiek'],
    'bags': [
      { 'nazwa': 'Projekt1', 'osoby': ['O11', 'O12', 'O13'] },
      { 'nazwa': 'Projekt2', 'osoby': ['O21', 'O22', 'O23'] },
      { 'nazwa': 'Projekt3', 'osoby': ['O31', 'O32', 'O33'] }
    ]
  };

  options: any = {
    removeOnSpill: false
  };

  addZasob() {
    this.zadania.zasoby.push(this.nazwaZasobu);
    this.zadania.bags.push({ 'nazwa': '123', 'osoby': [] });
  }

}

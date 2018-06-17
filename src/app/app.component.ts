import { Zadania } from './model/zadania';
import { LOCALE_ID, Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { HttpClient } from '@angular/common/http';
import { toast } from 'angular2-materialize';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  debug = false;
  title = 'app';
  nazwaZasobu;
  zadania = null;
  /* zadania = {
    'data': '2018-06-02',
    'zasoby': [{ 'id': '1', 'nazwa': 'Jurek' }, { 'id': '2', 'nazwa': 'Marek' }, { 'id': '3', 'nazwa': 'Czesiek' }],
    'bags': [
      { 'nazwa': 'Projekt1', 'osoby': [{ 'id': '4', 'nazwa': 'O11' }, { 'id': '7', 'nazwa': 'O12' }, { 'id': '10', 'nazwa': 'O13' }] },
      { 'nazwa': 'Projekt2', 'osoby': [{ 'id': '5', 'nazwa': 'O21' }, { 'id': '8', 'nazwa': 'O22' }, { 'id': '11', 'nazwa': 'O23' }] },
      { 'nazwa': 'Projekt3', 'osoby': [{ 'id': '6', 'nazwa': 'O31' }, { 'id': '9', 'nazwa': 'O32' }, { 'id': '12', 'nazwa': 'O33' }] }
    ]
  }; */
  ikony = ['fa-user-tie', 'fa-male', 'fa-female'];

  options: any = {
    removeOnSpill: false
  };
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.zadania = {
      'data': new Date().toISOString().substr(0, 10),
      'zasoby': [{ 'id': '0', 'ikona': 'fa-male', 'nazwa': '' }],
      'bags': [{ 'nazwa': '', 'osoby': [] }]
    };
    this.otworzZadania();
  }
  addZasob() {
    this.zadania.zasoby.push({ 'id': '11', 'ikona': 'fa-male', 'nazwa': '' });
  }
  addProjekt() {

    this.zadania.bags.push({ 'nazwa': '', 'osoby': [] });
  }
  dodajDzien() {
    const dat = new Date(this.zadania.data);
    dat.setDate(dat.getDate() + 1);
    this.zadania.data = dat.toISOString().substr(0, 10);
  }
  odejmijDzien() {
    const dat = new Date(this.zadania.data);
    dat.setDate(dat.getDate() - 1);
    this.zadania.data = dat.toISOString().substr(0, 10);
  }
  zapiszZadania() {
    const req = this.http.post('/zadania/zad_create.php?data=' + this.zadania.data, this.zadania)
      .subscribe(
        res => {
          console.log(res);
          toast('Zapisano dane dla ' + this.zadania.data, 3000);
        },
        err => {
          console.log('Error');
          toast('Błąd zapisywania danych', 4000);
        }
      );
  }
  otworzZadania() {
    this.http.get('/zadania/zad_get.php?data=' + this.zadania.data).subscribe(data => {
      console.log(data);
      this.zadania = data;
      toast('Pobrano dane dla ' + this.zadania.data, 3000);
    });
  }

  zmienIkone(i) {
    const ikonaObecna = this.zadania.zasoby[i].ikona;
    let ikonaIndex = this.ikony.findIndex(record => record === ikonaObecna);
    ikonaIndex = (++ikonaIndex >= this.ikony.length) ? 0 : ikonaIndex++;
    this.zadania.zasoby[i].ikona = this.ikony[ikonaIndex];
  }

}

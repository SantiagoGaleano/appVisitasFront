import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatTableDataSource } from '@angular/material';
import { ExporterService } from './services/exporter.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  get_data: any;
  query: Observable<any[]>;

  dataFire: any;

  constructor(db: AngularFireDatabase, private excelservice: ExporterService) {
    this.items = db.list('visit').valueChanges();

    this.query = db.list('visit', ref => ref.orderByChild("managment").equalTo("Mensaje")).valueChanges();


    console.log(this.query);




    this.get_data = this.items.subscribe(response => this.dataFire = response);
    console.log('hola' + this.get_data)




  }

  consulta() {
    console.log(this.query);

    for (let data in this.dataFire) {
      console.log('data ' + data);
    }
  }

  exportarAsXLSX(): void {
    console.log(this.dataFire)

    this.excelservice.exportToExcel(this.dataFire, 'visitas');

  }





}

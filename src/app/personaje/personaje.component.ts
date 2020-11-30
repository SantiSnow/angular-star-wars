import { Component, OnInit } from '@angular/core';
import { personaje } from './../personaje';
import { DataService } from './../data.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personaje: any;

  constructor(private dataService: DataService) {

    this.dataService.getPersonaje().subscribe(data=>{
      this.personaje = data;
    });
  }

  ngOnInit(): void {
  }

}

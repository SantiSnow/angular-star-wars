import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { personaje } from './personaje';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log("Servicio funcionando");
  }

  getData(){
    return this.httpClient.get<personaje[]>('http://laravel.test/');
  }

}

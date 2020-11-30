import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { personaje } from './personaje';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    
  }

  getData(){
    return this.httpClient.get<personaje[]>('http://laravel.test/personajes');
  }

  getPersonaje(){
    return this.httpClient.get('http://laravel.test/personaje/1');
  }

}

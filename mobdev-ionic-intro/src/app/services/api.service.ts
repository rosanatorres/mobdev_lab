import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getPeople(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getFilms(){
    return this.http.get('https://swapi.dev/api/films');
  }

  getFilm(id){
    return this.http.get(`https://swapi.dev/api/films/${id}`);
  }

}

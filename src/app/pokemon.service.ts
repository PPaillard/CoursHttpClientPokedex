import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService{

  private url: string = "https://api.pokemontcg.io"

  constructor(private http : HttpClient){}

  getPokemons(): Observable<any> {
    return this.http.get(this.url+"/v1/cards")
  }

}

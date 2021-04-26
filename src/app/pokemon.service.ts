import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService{
  // Url de base de l'API
  private url: string = "https://api.pokemontcg.io"

  // j'instancie le client HTTP pour faire la requête sur l'API
  constructor(private http : HttpClient){}

  // je vais chercher sur l'API la liste des pokemons.
  getPokemons(): Observable<any> {
    return this.http.get(this.url+"/v1/cards")
  }

}

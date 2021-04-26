import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pokemon List ! ';
  // je créé ma liste de Pokemon
  listePokemon: any[]

  constructor(private service:PokemonService){}

  ngOnInit(): void {
    // j'appelle le service pour remplir mon tableau de pokemon
    this.service.getPokemons().subscribe(response => {
      this.listePokemon = response.cards
    })
  }

}

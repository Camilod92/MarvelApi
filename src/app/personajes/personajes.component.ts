import { Observable } from 'rxjs';
import { PersonajesApiService } from './personaje/shared/personajes-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private personajesdb:PersonajesApiService) { }

allCharacters:Observable<any>;


  ngOnInit() {
    this.getCharacters();
    console.log('alo',this.allCharacters)
  }
getCharacters(){
  this.allCharacters=this.personajesdb.getAllCharacters()
}
}

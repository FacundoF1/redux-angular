import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { IncrementarAction, MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  
  contador:number;
  // cambioContador = new EventEmitter<number>();

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe( state => this.contador=state );
  } 

  multiplicar(){
    // this.contador *=2;
    this.store.dispatch( new MultiplicarAction(5) );
    // this.cambioContador.emit(this.contador);
  }

  dividir(){
    this.store.dispatch( new DividirAction(5) );
    // this.cambioContador.emit(this.contador);
    // this.store.dispatch( );
  }


}

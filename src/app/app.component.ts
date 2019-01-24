import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contador: number;

  constructor(private store: Store<AppState>){
    // this.contador = 10;
    this.store.select('contador').subscribe( state => {
      console.log(state);
      this.contador=state;
    })
  }

  incrementar(){
    // this.contador++;
    //console.log(new IncrementarAction() )
    const accion = new IncrementarAction();
    this.store.dispatch( accion );
  }

  decrementar(){
    // this.contador--;
    const accion= new DecrementarAction();
    this.store.dispatch( accion );
  }

}

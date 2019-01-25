import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  contador;
  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe( state => this.contador=state );
  }

  ngOnInit() {
  }

  reset(){
    this.store.dispatch( new ResetAction() );
  }

}

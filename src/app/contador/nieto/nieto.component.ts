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
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  reset(){
    this.store.dispatch( new ResetAction() );
  }

}

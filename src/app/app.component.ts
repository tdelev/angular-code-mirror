import { Component } from '@angular/core';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/sparql/sparql';
import 'codemirror/addon/edit/matchbrackets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  code = '';

  onFocus() {

  }

  onBlur() {

  }
}

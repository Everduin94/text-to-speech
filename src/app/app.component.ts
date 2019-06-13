import { Component, OnInit } from '@angular/core';
import { SynthesisService } from './services/synthesis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'text-to-speech';

  constructor(public ss: SynthesisService) {
      ss.updateMessage(`This actually has pretty good sound quality, I'm kind of surprised.`);
  }

  ngOnInit() {

  }
}

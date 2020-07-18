import { Component, OnInit } from '@angular/core';
import {
  startAnimation
} from './generator'

@Component({
  selector: 'loadingpage-sample-load01',
  templateUrl: './load01.component.html',
  styleUrls: ['./load01.component.scss']
})
export class Load01Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
    startAnimation()
  }
}



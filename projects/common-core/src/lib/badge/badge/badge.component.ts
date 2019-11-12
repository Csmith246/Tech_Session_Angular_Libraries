import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  @Input() count: number = 0;
  @Input() top: string = "0px";
  @Input() right: string = "0px";

  constructor() { }

  ngOnInit() {
  }

}

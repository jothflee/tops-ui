import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'team-row',
  templateUrl: './team-row.component.html',
  styleUrls: ['./team-row.component.scss']
})
export class TeamRowComponent implements OnInit {

  @Input() team : any = null;
  constructor(  ) {

  }

  ngOnInit(): void {
    console.log("team-row", this.team)
  }
}

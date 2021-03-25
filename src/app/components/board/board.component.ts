import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Project, Team } from 'src/app/services/data.service';

@Component({
  selector: 'tops-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  teams$!: Observable<Team[]>;
  states = ['in development', 'testing', 'review', 'released'];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.teams$ = this.dataService.TeamTree();
  }
}

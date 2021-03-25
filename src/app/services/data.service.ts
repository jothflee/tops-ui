import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

const cache: { [key: string]: Observable<any> } = {};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private apiService: ApiService) {
    this.Projects();
  }

  // TeamProjectTree
  TeamTree(): Observable<Team[]> {
    const teams: Team[] = [];
    const teamMap: { [key: string]: Team } = {};
    this.Projects().subscribe((projects: Project[]) => {
      for (const project of projects) {
        let tmp = project.FullPath.split('/');
        // remove project
        tmp.pop();
        // not the fastest for loop
        // cue duffs device
        let currentFullPath = [];
        let prevTeamName = '';
        for (let i = 0; i < tmp.length; i++) {
          let teamName = tmp[i];
          currentFullPath.push(teamName);
          let fullTeamName = currentFullPath.join('/');
          if (!teamMap[fullTeamName]) {
            // add it
            teamMap[fullTeamName] = {
              Name: teamName,
              ID: 'unkn',
              Path: 'teamName',
              FullPath: fullTeamName,
              Server: 'test.com',
              Backend: null,
              Projects: [],
              Teams: []
            };

            // if i == 0 then it is a top level and push it
            if (i == 0) {
              teams.push(teamMap[fullTeamName]);
            }
          }

          // add prev
          if (prevTeamName != '') {
            teamMap[fullTeamName].Teams.push(teamMap[prevTeamName]);
          }

          // if the last, then add the project
          if (i + 1 == tmp.length) {
            teamMap[fullTeamName].Projects.push(project);
          }

          prevTeamName = fullTeamName;
        }
      }
    });

    return of(teams);
  }

  // Raw Projects
  Projects(): Observable<Project[]> {
    return this.apiService.Request('projects');

    return of([
      {
        Name: 'Project',
        ID: '1',
        Path: 'project',
        FullPath: 'TeamA/project',
        Server: 'test.com',
        Branches: ['main', 'rc-1.0.0', 'rc-1.0.1'],
        Backend: null
      },
      {
        Name: 'Project2',
        ID: '2',
        Path: 'project2',
        FullPath: 'TeamA/project2',
        Server: 'test.com',
        Branches: ['main', 'rc-1.0.0', 'rc-1.0.1'],
        Backend: null
      },
      {
        Name: 'Project1',
        ID: '3',
        Path: 'project1',
        FullPath: 'TeamB/project1',
        Server: 'test.com',
        Branches: ['main', 'rc-1.0.0', 'rc-1.0.1'],
        Backend: null
      }
    ]);
  }
}

// TODO: tops module
export class Project {
  constructor(
    public Name: string,
    public ID: string,
    public Path: string,
    public FullPath: string,
    public Server: string,
    public Branches: any[],
    public Backend: any
  ) {}
}

// TODO: tops module
export class Team {
  constructor(
    public Name: string,
    public ID: string,
    public Path: string,
    public FullPath: string,
    public Server: string,
    public Backend: any,
    public Projects: Project[],
    public Teams: Team[]
  ) {}
}

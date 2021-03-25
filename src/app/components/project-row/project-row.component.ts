import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project-row',
  templateUrl: './project-row.component.html',
  styleUrls: ['./project-row.component.scss']
})
export class ProjectRowComponent implements OnInit {
  @Input() project: any = null;

  stateMap: { [key: string]: string } = {
    main: '80%',
    'rc-*': '60%'
  };

  constructor() {}

  ngOnInit(): void {
    console.log('project-row', this.project);
  }

  getPosition(branchName: string): { [klass: string]: any } {
    let position = '0px';
    console.log('pos');
    for (const test in this.stateMap) {
      let re = new RegExp(test, 'i'); // constructor with string pattern as first argument

      if (re.test(branchName)) {
        position = this.stateMap[test];
        break;
      }
    }
    // TODO: be more flexy
    return {
      left: position
    };
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QueryService } from '../query.service';
import { clone } from 'lodash';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() query: any;
  @Input() groupLevel: number;
  @Input() groupIndex: number;
  @Output() handleDelete = new EventEmitter();
  constructor(private qs: QueryService) {}

  ngOnInit() {
    // console.log(JSON.stringify(this.query));
  }
  handleAddRule() {
    const newRule = this.qs.getNewRule();
    this.query.rules.push(newRule);
  }
  handleAddGroup() {
    const newGroup = this.qs.getNewGroup();
    this.query.rules.push(newGroup);
  }
  handleDeleteGroup(id) {
    console.log('Delete group', id, this.groupIndex);
    this.handleDelete.emit({
      rule: this.query,
      id,
      groupLevel: this.groupLevel,
      groupIndex: this.groupIndex
    });
  }
  handleChildDelete({ rule, id, groupLevel, groupIndex }) {
    console.log(rule, id, groupLevel, groupIndex);
    this.query.rules.splice(groupIndex, 1);
  }
}

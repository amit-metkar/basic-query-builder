import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {
  @Input() rule: any;
  @Input() groupLevel: number;
  @Input() groupIndex: number;
  @Output() handleDelete = new EventEmitter();
  @Output() ruleChange = new EventEmitter();
  constructor() {}

  @Input()
  get ruleValue() {
    return this.rule;
  }
  set ruleValue(val) {
    this.rule = val;
    this.ruleChange.emit(this.ruleValue);
  }

  ngOnInit() {
    // console.log('Rule', this.rule, this.groupLevel);
  }

  handleDeleteRule(id: string) {
    console.log('Delete rule', id, this.groupLevel, this.groupIndex);
    this.handleDelete.emit({
      rule: this.rule,
      id,
      groupLevel: this.groupLevel,
      groupIndex: this.groupIndex
    });
  }
}

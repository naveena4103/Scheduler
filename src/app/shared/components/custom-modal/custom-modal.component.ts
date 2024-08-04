import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomModalComponent implements OnInit {
  @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();
  @Input('headerTitle') headerTitle: string

  constructor() { }

  closeModal() {
    this.closeDialog.emit()
  }

  ngOnInit(): void {

  }

}

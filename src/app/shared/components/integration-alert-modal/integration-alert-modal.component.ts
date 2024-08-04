import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-integration-alert-modal',
  templateUrl: './integration-alert-modal.component.html',
  styleUrls: ['./integration-alert-modal.component.scss']
})
export class IntegrationAlertModalComponent implements OnInit {
  constructor(
    public alertDialogRef: MatDialogRef<IntegrationAlertModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data
  ) {}

  isSync = false;

  ngOnInit(): void {
    this.isSync = this.data?.isSync || false;
  }

  confirm() {
    this.alertDialogRef.close(true);
  }

  cancel() {
    this.alertDialogRef.close(false);
  }
}

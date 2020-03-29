
    import { Component, OnInit, Inject } from '@angular/core';
    import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
    import { ModalData } from '../model.data';
    import { FormGroup, FormControl } from '@angular/forms';
    
    
    @Component({
      selector: 'app-my-modal',
      templateUrl: './my-modal.component.html',
      styleUrls: ['./my-modal.component.css']
    })
    
    export class MyModalComponent implements OnInit {
      profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
      });
      constructor(
        public dialogRef: MatDialogRef<MyModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ModalData) { }
    
      onNoClick(): void {
        this.dialogRef.close(this.profileForm);
      }
    
      ngOnInit() {
      }
    
    }
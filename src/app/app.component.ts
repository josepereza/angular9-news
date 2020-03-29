import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyModalComponent } from './my-modal/my-modal.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string;
  color: string;
  auto: string;
  nombre:string;
  apellido:string;

  

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '350px',
      data: { name: this.name}
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res.value);
      this.nombre = res.value.firstName;
     this.apellido = res.value.lastName;
    });
  }
}

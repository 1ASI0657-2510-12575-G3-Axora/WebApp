import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContainer,
  MatDialogContent,
  MatDialogModule, MatDialogRef
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {ContainerServiceService} from "../../service/container-service.service";

@Component({
  selector: 'app-contianer-edit',
  standalone: true,
  imports: [
    MatDialogContainer,
    MatDialogContent,
    MatDialogModule,
    MatButton,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatHint,
    MatCardActions,
    MatSlideToggle,
    FormsModule
  ],
  templateUrl: './contianer-edit.component.html',
  styleUrl: './contianer-edit.component.css'
})
export class ContianerEditComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  private dialogRef: MatDialogRef<ContianerEditComponent>,
              private containerService: ContainerServiceService ) {}


  saveChanges() {

    this.containerService.updateContainer(this.data).subscribe(
      (response) => {
        console.log('Template updated successfully', response);
        this.dialogRef.close(response);
      },
      (error) => {
        console.error('Error updating template', error);
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}

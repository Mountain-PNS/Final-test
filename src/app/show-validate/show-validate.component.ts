import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-validate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-validate.component.html',
  styleUrl: './show-validate.component.css'
})
export class ShowValidateComponent {
@Input() field : any
@Input() key : string
constructor(){
  this.key = ''
}
}

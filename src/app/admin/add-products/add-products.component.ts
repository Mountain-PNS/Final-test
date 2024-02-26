import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowValidateComponent } from '../../show-validate/show-validate.component';


@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,ShowValidateComponent],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

}

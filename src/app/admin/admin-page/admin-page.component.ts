import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsideComponent } from '../../layout/aside/aside.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, AsideComponent,HeaderComponent,FooterComponent,RouterOutlet],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}

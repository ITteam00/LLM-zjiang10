import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { NzIconModule } from 'ng-zorro-antd/icon';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent,InputComponent,NzIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
}

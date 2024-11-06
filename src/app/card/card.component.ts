import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-card',
  standalone: true, // 添加 standalone: true
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [NzCardModule],
})
export class CardComponent {}

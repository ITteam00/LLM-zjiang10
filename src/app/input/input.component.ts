import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';


@Component({
  selector: 'app-input',
  standalone: true, // 添加 standalone: true
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  imports: [NzInputModule],

})
export class InputComponent {}

import { Component, EventEmitter, Output } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AIGenerationService } from '../Service/ai-generation.service';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';



@Component({
  selector: 'app-input',
  standalone: true, // 添加 standalone: true
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  imports: [NzInputModule,FormsModule,NzIconModule],

})
export class InputComponent {
  inputText: string = '';
  @Output() responseGenerated = new EventEmitter<string>();


  constructor(private aiGenerationService: AIGenerationService) {}

  sendInput() {
    // console.log(this.inputText)
    this.aiGenerationService.generateContent(this.inputText).subscribe((response: string | undefined) => {
      // Emit the response to the parent component
      // console.log(response)
      this.responseGenerated.emit(response);
    });
  }
}

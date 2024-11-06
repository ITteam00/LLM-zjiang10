// import {TestBed} from '@angular/core/testing';
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
 
// import {environment} from '../environments/environment';
// import {AIGenerationService} from "./AIGenerationService";
// import {HttpErrorResponse} from "@angular/common/http";
 
// fdescribe('AIGenerationService', () => {
//   let service: AIGenerationService;
//   let httpMock: HttpTestingController;
 
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [AIGenerationService]
//     });
//     service = TestBed.inject(AIGenerationService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });
 
//   afterEach(() => {
//     httpMock.verify(); // 确保没有未处理的请求
//   });
 
//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
 
//   it('should generate content and return only the content string', () => {
//     const mockResponse = {
//       output:{choices: [
//         {
//           finish_reason: 'stop',
//           message: {
//             role: 'assistant',
//             content: 'This is a test response'
//           }
//         }
//       ]},
//       usage: {
//         total_tokens: 10,
//         output_tokens: 5,
//         input_tokens: 5
//       },
//       request_id: '123456'
//     };
 
//     const systemMessage = '这是一个测试回复。MAGA！！！';
//     const userMessage = '测试输入';
 
//     service.generateContent(userMessage).subscribe(content => {
//       expect(content).toBe('This is a test response');
//     });
 
//     const req = httpMock.expectOne(environment.apiUrl);
//     expect(req.request.method).toBe('POST');
//     expect(req.request.headers.get('Authorization')).toBe(`Bearer ${environment.apiKey}`);
//     expect(req.request.headers.get('Content-Type')).toBe('application/json');
 
//     expect(req.request.body).toEqual({
//       model: 'qwen-max',
//       input: {messages: [
//         {role: 'system', content: systemMessage},
//         {role: 'user', content: userMessage}
//       ]},
//       parameters: {
//         temperature: 0.8,
//         seed: 12360,
//         result_format: 'message'
//       }
//     });
 
//     req.flush(mockResponse);
//   });
 
//   it('should handle errors', (done) => {
//     const systemMessage = 'You are a helpful assistant';
//     const userMessage = 'Hello, world!';
 
//     service.generateContent(userMessage).subscribe(
//       () => {
//         fail('should have failed with the error');
//         done();
//       },
//       (error: HttpErrorResponse) => {
//         expect(error.status).toBe(500);
//         expect(error.statusText).toBe('Server Error');
//         expect(error.message).toContain('Http failure response for https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions: 500 Server Error');
//         done();
//       }
//     );
 
//     const req = httpMock.expectOne(environment.apiUrl);
//     req.flush('Server Error', {status: 500, statusText: 'Server Error'});
//   });
// })



import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { AIGenerationService } from './ai-generation.service';
 
fdescribe('AIGenerationService', () => {
  let service: AIGenerationService;
  let httpMock: HttpTestingController;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AIGenerationService]
    });
 
    service = TestBed.inject(AIGenerationService);
    httpMock = TestBed.inject(HttpTestingController);
  });
 
  afterEach(() => {
    httpMock.verify();
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  it('should generate content', () => {
    const mockResponse = {
      output: {
        choices: [
          {
            finish_reason: 'stop',
            message: {
              role: 'assistant',
              content: '这是一个测试回复。MAGA！！！'
            }
          }
        ]
      },
      usage: {
        total_tokens: 10,
        output_tokens: 5,
        input_tokens: 5
      },
      request_id: '123456'
    };
 
    const inputText = '测试输入';
 
    service.generateContent(inputText).subscribe(response => {
      expect(response).toBe('这是一个测试回复。MAGA！！！');
    });
 
    const req = httpMock.expectOne(environment.apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${environment.apiKey}`);
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
 
    const requestBody = req.request.body;
    expect(requestBody.model).toBe('qwen-max');
    expect(requestBody.input.messages[1].content).toBe(inputText);
 
    req.flush(mockResponse);
  });
 
  it('should handle errors', () => {
    const errorMessage = 'An error occurred';
    const inputText = '测试输入';
 
    service.generateContent(inputText).subscribe(
      () => fail('should have failed with an error'),
      (error) => {
        expect(error.status).toBe(500);
        expect(error.error).toBe(errorMessage);
      }
    );
 
    const req = httpMock.expectOne(environment.apiUrl);
    req.flush(errorMessage, { status: 500, statusText: 'Internal Server Error' });
  });
});
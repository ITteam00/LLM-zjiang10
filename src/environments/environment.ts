// src/environments/environment.ts
// 使用 ng build --prod 或 ng serve --configuration=production，
// Angular 将使用 environment.prod.ts 文件。
// https://dashscope.console.aliyun.com/apiKey

export const environment = {
    production: false,
    // apiUrl: 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation',
    apiUrl: '/api/v1/services/aigc/text-generation/generation',
    apiKey: 'sk-0996171072c34722afb783b4de8d12b1'
  };
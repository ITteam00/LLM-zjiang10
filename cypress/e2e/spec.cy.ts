// describe('My First Test', () => {
//   it('Visits the initial project page', () => {
//     cy.visit('/')

//     cy.get('[data-cy="add-counter-btn"]').click();
//     cy.get('[data-cy="decrease-shower"]').contains('number: 0');
//     cy.get('[data-cy="increase-btn"]').click();
//     cy.get('[data-cy="increase-btn"]').click();
//     // cy.get('.btn').contains('+').click();
//     cy.get('[data-cy="decrease-shower"]').contains('number: 2');
//     cy.get('[data-cy="decrease-btn"]').click();

//     cy.get('[data-cy="decrease-shower"]').contains('number: 1');
//   })
// })


describe('AI Generation Test', () => {
  it('Visits the initial project page and generates content', () => {
    cy.visit('/');

    // 输入文本并点击发送按钮
    cy.get('textarea[nz-input]').type('测试输入');
    cy.get('button').contains('Trump 2024').click();

    // 验证生成的响应内容
    cy.get('nz-card p').should('contain', '这是一个测试回复。MAGA！！！');
  });
});

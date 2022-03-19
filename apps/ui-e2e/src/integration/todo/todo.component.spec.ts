describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todocomponent--primary&args=todo;'));
  it('should render the component', () => {
    cy.get('playground-todo').should('exist');
  });
});
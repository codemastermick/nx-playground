describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todolistcomponent--primary&args=todos;'));
  it('should render the component', () => {
    cy.get('playground-todo-list').should('exist');
  });
});
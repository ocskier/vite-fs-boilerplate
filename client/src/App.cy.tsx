import App from './App';

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />);
  });
  it('renders headline', () => {
    cy.mount(<App />);
    const headline = 'Click on the Vite and React logos to learn more';
    cy.get('p.read-the-docs').contains(headline).should('exist');
  });
  it('renders the correct count', () => {
    cy.mount(<App />);
    cy.get('button').contains('count is').click();
    cy.get('button').contains('count is').should('have.text', 'count is 1');
  });
});

import Loading from '@shared/loading'

describe('<Loading />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Loading msg="Test message"/>)
  })
})
describe('Hooks', () => {
    before(() => {
      cy.log('runs once before all tests in the block')
    })
  
    beforeEach(() => {
      cy.log('runs before each test in the block')
    })
  
    afterEach(() => {
      cy.log('runs after each test in the block')
    })
  
    after(() => {
      cy.log('runs once after all tests in the block')
    })

    it('test-1', () => {
        cy.log('first test log ...')
    })

    it('test-2', () => {
        cy.log('second test log ...')
    })

    it('test-3', () => {
        cy.log('third test log ...')
    })
  })
/// <reference types="cypress" />

describe('Login page', () => {
    beforeEach(() => {
        cy.visit('https://propoze.app/login')
      })

    afterEach(() => {
        cy.wait(3000)
    })

    it('has all elements', () => {

        cy.get('.auth__content').contains('E-mail').should('exist')
        cy.get('.auth__content').contains('Password').should('exist')
        cy.get('.auth__content').contains('Create account').should('exist')
        cy.get('.auth__content').contains('Forgot password?').should('exist')
    })
    it('checking mandatory fields', () => {

        cy.wait(1000)
        cy.get('.auth__content').contains('Password*').should('exist')
        cy.get('.auth__content').contains('E-mail*').should('not.exist')
        
    })
    it.skip('can sign up with enter key', () => {
        
        cy.wait(1000)
        cy.get(':nth-child(1) > .input').type('suncica772@gmail.com')
        cy.get(':nth-child(2) > .input').type('Suncica{enter}')
        cy.wait(4000)
        cy.get('.nav__links__item > .btn').click()
        
    })
    it('does not show validation message for wrong email or password', () => {

        cy.wait(1000)
        cy.get(':nth-child(1) > .input').type('test@gmail.com')
        cy.get(':nth-child(1) > .input').type('Suncica')
        cy.get('form > .btn').click()
        cy.get('.auth__content').contains('Incorrect or invalid email address').should('not.exist')
       
    })
    it('missing Log in button in the header', () => {

        cy.get('.header').contains('Log in').should('not.exist')
    })
    it('"Create account" button leads to signup page', () => {

        cy.wait(2000)
        cy.get('.t-eta > .t-link').click()
    })
    it('"Forgot password?" link leads to Forgot password page', () => {

        cy.get('.field__forgot-password > .t-link').click()
    })
    it('clicking "Send reset link" on Forgot password page does not redirect to Log in page ', () => {

        cy.wait(1000)
        cy.get('.field__forgot-password > .t-link').click()
        cy.wait(2000)
        cy.get('.input').type('suncica772@gmail.com')
        cy.get('form > .btn').click()
    })
    it.skip('clicking sign out button leads to login page', () => {

        cy.wait(1000)
        cy.get(':nth-child(1) > .input').type('suncica772@gmail.com')
        cy.get(':nth-child(2) > .input').type('Suncica')
        cy.get('form > .btn').click()
        cy.wait(4000)
        cy.get('.nav__links__item > .btn').click()
    })
    it('leads to successfull login with valid data', () => {

        cy.wait(1000)
        cy.get(':nth-child(1) > .input').type('suncica772@gmail.com')
        cy.get(':nth-child(2) > .input').type('Suncica')
        cy.get('form > .btn').click()
    })
    it.skip('does not log out after pressing back button', () => {

        cy.wait(1000)
        cy.get(':nth-child(1) > .input').type('suncica772@gmail.com')
        cy.get(':nth-child(2) > .input').type('Suncica')
        cy.contains('Log in').click()
        cy.wait(5000)
        cy.get('.nav__links__item > .btn').click()
        
    })
})
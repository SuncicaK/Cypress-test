/// <reference types="cypress" />

describe('Onboarding page', () => {

    afterEach(() => {
        cy.wait(3000)
    })

    it('logs in successfully', () => {
        cy.visit('https://propoze.app/login')
        cy.wait(1000)
        cy.get('input[name="email"]').type('suncica772@gmail.com')
        cy.get('input[name="password"]').type('Suncica')
        cy.contains('Log in').click()
    })
    it('checking mandatory fields', () =>{
        cy.wait(1000)
        cy.get(':nth-child(2) > .field__lbl').should('have.text', 'Company name*')
        cy.get(':nth-child(5) > .field__lbl').should('have.text', 'Address line 1*')
        cy.get(':nth-child(7) > .field__lbl').should('have.text', 'Country*')
        cy.get(':nth-child(9) > .field__lbl').should('have.text', 'City*')
        cy.get(':nth-child(10) > .field__lbl').should('have.text', 'Postal code*')
        
    })
    it('filling onboarding form', () =>{
        cy.get(':nth-child(2) > .input').type('test')
        cy.get(':nth-child(5) > .input').type('test')
        cy.get('.css-8mmkcg').click().type('Croatia{enter}')
        cy.get(':nth-child(9) > .input').type('test')
        cy.get(':nth-child(10) > .input').type('test')
        cy.get('form > .btn').click()

    })

 
})
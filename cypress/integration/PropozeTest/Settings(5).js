/// <reference types="cypress" />

describe('Settings page', () => {
    
    afterEach(() => {
        cy.wait(3000)
    })
    it('log in', () => {

        cy.visit('https://propoze.app/login')
        cy.wait(2000)
        cy.get(':nth-child(1) > .input').type('suncica772@gmail.com')
        cy.get(':nth-child(2) > .input').type('Suncica')
        cy.contains('Log in').click()
    })
    it('opens account setting', () => {
        
        cy.wait(2000)
        cy.get('.companyselector > .btn').click()
        cy.wait(2000)
        cy.get('.companyselector__buttons > :nth-child(1) > a').click()
    })
    it('can not change address setting on General info page', () => {

        cy.get('.settings__header').should('contain', 'General information about your company such as name and address.')
        cy.get('form').should('not.have.text', 'Address*')
    })
    it('checking mandatory fields on General info form', () => {

        cy.wait(1000)
        cy.contains('Company name*').should('exist')
        cy.contains('Company logo*').should('not.exist')
        
    })
    it('filling the company info form', () => {

        cy.get('.input').clear().type('Test')
        cy.get('form > .btn').click()
    })
    it('checking mandatory fields on Address form', () => {

        cy.get(':nth-child(2) > a').click()
        cy.wait(1000)
        cy.contains('Address line 1*').should('exist')
        cy.contains('Country*').should('exist')
        cy.contains('City*').should('exist')
        cy.contains('Postal code*').should('exist')
        
    })
    it('Address page accepts inaccurate information', () => {

        cy.get(':nth-child(2) > a').click()
        cy.get(':nth-child(2) > .input').clear().type('Test')
        cy.wait(1000)
        cy.get('.css-8mmkcg').click().type('Croatia{enter}')
        cy.wait(1000)
        cy.get(':nth-child(6) > .input').clear().type('test')
        cy.wait(1000)
        cy.get(':nth-child(7) > .input').clear().type('1457215475')
        cy.wait(1000)
        cy.get('form > .btn').click()

    })
    it('missing mandatory fields on Tax settings page', () => {

        cy.get(':nth-child(3) > a').click()
        cy.contains('VAT id*').should('not.exist')
    })
    it('Account page is missing options ', ()=> {

        cy.get(':nth-child(2) > ul > li > a').click()
        cy.contains('Delete').should('exist')
        cy.contains('Change password').should('not.exist')
    })
  

})
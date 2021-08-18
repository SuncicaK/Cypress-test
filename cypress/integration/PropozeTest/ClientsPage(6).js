/// <reference types="cypress" />

describe('ClientsPage', () => {
    afterEach(() => {
        cy.wait(3000)
    })

    it('logs in', () => {
        cy.visit('https://propoze.app/login')
        cy.wait(2000)
        cy.get('input[name="email"]').type('suncica772@gmail.com')
        cy.get('input[name="password"]').type('Suncica{enter}')
        cy.contains('Log in').click()
    })
    it('Clients form dissapears when clicking outside of the form', () => {

        cy.get('.companyselector > .btn').click()
        cy.get('.companyselector__buttons > :nth-child(2) > a').click()
        cy.get('.settings__header__action > .btn').click()
        cy.get('.modal').click('right')

    })
    it('missing mandatory fields in Clients form', () => {

        
        cy.get('.settings__header__action > .btn').click()
        cy.wait(1000)
        cy.get('.modal__content').contains('Client name*').should('exist')
        cy.get('.modal__content').contains('E-mail*').should('not.exist')
        cy.get('.modal__content').contains('Address line 1*').should('not.exist')
        cy.get('.modal__content').contains('Country*').should('not.exist')
        cy.get('.modal__content').contains('City*').should('not.exist')
        cy.get('.modal__content').contains('Postal code*').should('not.exist')
        cy.get('.modal').click('right')
    })
    it('adding a client', () => {

        cy.get('.settings__header__action > .btn').click()
        cy.wait(1000)
        cy.get('.modal__content > :nth-child(1) > .input').clear().type('test')
        cy.get('.btn-group > .btn--primary').click()
    })
    it('Wrong trash icon name is visible on "Clients" page', () => {


        cy.get('.btn--ghost > svg').trigger('mouseover').contains('icon trash 16')
    })
    it('checking if edit button works proprely', () => {
        
        cy.get('.btn-group > .btn--outline').click()
        cy.wait(1000)
        cy.get('.modal__content > :nth-child(1) > .input').clear().type('123')
        cy.wait(1000)
        cy.get('.btn-group > .btn--primary').click()

    })
    it('validation message showing when deleting client', () => {

        
        cy.get('.btn--ghost').click()
        cy.get('.modal__header > .t-delta').contains('Confirm delete').should('exist')
        cy.get('.modal__footer > .btn-group > .btn--ghost').click()

    })
    it('Search bar missing for searching clients', () => {
        
        cy.get('.dashboard__content').contains('Search clients').should('not.exist')

    })
    it.skip('deletes a client', () => {
        cy.get('.btn--ghost').click()
        cy.get('.btn--warning').click()
    })
})
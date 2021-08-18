/// <reference types="cypress" />

describe('ServicesPage', () => {
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
    it('Units form dissapears when clicking outside of the form', () => {

        cy.get('.companyselector > .btn').click()
        cy.get('.companyselector__buttons > :nth-child(4) > a').click()
        cy.get('.settings__header__action > .btn').click()
        cy.get('.modal').click('right')

    })
    it('checking mandatory fields in Units form', () => {
        
        cy.get('.settings__header__action > .btn').click()
        cy.wait(1000)
        cy.get('.modal__content').contains('Unit name*').should('exist')
        cy.get('.modal').click('right')
    })
    it('adding unit', () => {

        cy.get('.settings__header__action > .btn').click()
        cy.wait(1000)
        cy.get('.field > .input').clear().type('test')
        cy.get('.btn-group > .btn--primary').click()
    })
    it('wrong trash icon name is visible on "Units" page', () => {
       
        cy.get('.btn--ghost > svg').trigger('mouseover').contains('icon trash 16')
    })
    it('validation message showing when deleting unit', () => {
        
        cy.get('.btn--ghost').click()
        cy.get('.modal__header > .t-delta').contains('Confirm delete').should('exist')
        cy.get('.modal__footer > .btn-group > .btn--ghost').click()

    })
    it('checking if edit button works proprely', () => {
        
        cy.get('.btn-group > .btn--outline').click()
        cy.wait(1000)
        cy.get('.field > .input').clear().type('123')
        cy.wait(1000)
        cy.get('.btn-group > .btn--primary').click()

    })
    it('checking if cancel button works proprely', () => {
        
        cy.get('.btn-group > .btn--outline').click()
        cy.wait(1000)
        cy.get('.field > .input').clear().type('123')
        cy.wait(1000)
        cy.get('.modal__footer > .btn-group > .btn--ghost').click()

    })
    it('search bar missing for searching units', () => {
        
        cy.get('.dashboard__content').contains('Search units').should('not.exist')

    })
    it.skip('delete a unit', () => {

        cy.get('.btn--ghost').click()
        cy.get('.btn--warning').click()
    })
})
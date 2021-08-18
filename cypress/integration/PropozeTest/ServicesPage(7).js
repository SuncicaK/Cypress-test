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
    it('Services form dissapears when clicking outside of the form', () => {

        cy.get('.companyselector > .btn').click()
        cy.get('.companyselector__buttons > :nth-child(3) > a').click()
        cy.get('.settings__header__action > .btn').click()
        cy.get('.modal').click('right')

    })

    it('checking mandatory fields in Services form', () => {
  
        cy.get('.settings__header__action > .btn').click()
        cy.wait(1000)
        cy.get('.modal__content').contains('Service name*').should('exist')
        cy.get('.modal').click('right')
    })
    it('adding a service', () => {

        cy.get('.settings__header__action > .btn').click()
        cy.wait(1000)
        cy.get('.field > .input').clear().type('test')
        cy.get('.btn-group > .btn--primary').click()
    })
    it('Wrong trash icon name is visible on "Services" page', () => {
       
        cy.get('.btn--ghost > svg').trigger('mouseover').contains('icon trash 16')
    })
    it('validation message showing when deleting service', () => {
        
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
    it('search bar missing for searching services', () => {
        
        cy.get('.dashboard__content').contains('Search services').should('not.exist')

    })
    it.skip('delete a service', () => {

        cy.get('.btn--ghost').click()
        cy.get('.btn--warning').click()
    })
})
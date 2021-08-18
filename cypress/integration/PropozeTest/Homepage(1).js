/// <reference types="cypress" />

describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('https://propoze.app/')
      })
      afterEach(() => {
        cy.wait(3000)
    })
    it('accepts cockies', () =>{

        cy.get('#rcc-confirm-button').click()
    })
    it('title is visible', () => {

        cy.contains('Simple, beautiful and blazing fast proposals').should('be.visible')
    })

    it('button "Create account" leads to sign up page', () => {

        cy.get('div[style="opacity: 1; transform: none;"] > .btn').contains('Create account').click()
       
    })
    it('button "Product Hunt" leads to ProductHunt page', () => {

        cy.wait(2000)
        cy.get('.hero__producthunt > a')
        .should('have.attr', 'href', 'https://www.producthunt.com/posts/propoze?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-propoze')
   
    })
    it('button "Preview demo proposal" leads to demo-proposal page', () => {

        cy.wait(2000)
        cy.get('.feature-block__content > .btn').contains('Preview demo proposal').click()
       
    })
    it('button "Try Propoze for free" leads to sign up page', () => {

        cy.wait(2000)
        cy.get('.banner__content > div > .btn').contains('Try Propoze for free').click()
       
    })
    it('button "Send feedback" works properly', () => {

        cy.get('.action-block__content > div > .btn').contains('Send feedback')
        .should('have.attr', 'href', 'mailto:support@propoze.app')
       
    })
   

})
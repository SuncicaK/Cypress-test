/// <reference types="cypress" />

describe('Sign Up page', () => {

    beforeEach(() => {
        cy.visit('https://propoze.app/sign-up')
      })

    afterEach(() => {
        cy.wait(3000)
    })
    it('accepts cockies', () =>{
        cy.get('#rcc-confirm-button').click()
    })

    it('links', () => {

        //Get in touch
        cy.get('.footer--public__content > :nth-child(1)').contains('Get in touch').should('have.attr', 'href', 'mailto:support@propoze.app')

        //Request a feature
        cy.wait(1000)
        cy.get('.footer--public__content > :nth-child(1)').contains('Request a feature').should('have.attr', 'href', 'mailto:support@propoze.app')

        //Terms of service
        cy.get(':nth-child(2) > .footer--public__group-list > :nth-child(1) > .footer--public__group-link').click()
        cy.get('.heading-block').contains('Terms of service').should('exist')
        cy.wait(2000)
        cy.get('.nav__links > :nth-child(2) > .btn').click()

        //Privacy policy
        cy.get('#rcc-confirm-button').click()
        cy.scrollTo('bottom')
        cy.get(':nth-child(2) > .footer--public__group-list > :nth-child(2) > .footer--public__group-link').click()
        cy.get('.heading-block').contains('Privacy policy').should('exist')
        cy.wait(2000)
        cy.get('.nav__links > :nth-child(2) > .btn').click()

        //Company information
        cy.get(':nth-child(2) > .footer--public__group-list > :nth-child(3) > .footer--public__group-link').click()
        cy.get('.heading-block').contains('Company information').should('exist')
        cy.wait(2000)
        cy.get('.nav__links > :nth-child(2) > .btn').click()

        //Instagram link
        cy.get('.footer--public__content > :nth-child(3)')
        .contains('Instagram').should('have.attr', 'href', 'https://www.instagram.com/propoze.app')

        //LinkdIn link
        cy.get('.footer--public__content > :nth-child(3)')
        .contains('Linkedin').should('have.attr', 'href', 'https://www.linkedin.com/company/propozeapp')

        //Twitter
        cy.get('.footer--public__content > :nth-child(3)')
        .contains('Twitter').should('have.attr', 'href', 'https://twitter.com/propozeapp')

        //Blog
        cy.get(':nth-child(4) > .footer--public__group-link').invoke('removeAttr', 'target').click()
        cy.wait(2000)
        cy.go(-1)

        //Prototyp 
        cy.get('.footer--public__copy')
        .contains('PROTOTYP').should('have.attr', 'href', 'https://prototyp.digital')
       
})
})
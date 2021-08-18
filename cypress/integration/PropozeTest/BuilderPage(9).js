/// <reference types="cypress" />

describe('BuilderPage', () => {
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
    it('checking mandatory fields in Builder form', () => {
        
        cy.get('.nav__links > :nth-child(2) > .btn').click()
        cy.wait(2000)
        cy.get('.proposal-service__add > .btn--primary').click()
        cy.get('form').contains('Proposal name*').should('exist')
        cy.get('form').contains('Client*').should('exist')
        cy.get('form').contains('Currency*').should('exist')
        cy.get('form').contains('Display date & time*').should('exist')
        cy.get('form').contains('Valid until*').should('exist')
        cy.get('.proposal-service').contains('Service*').should('exist')
        cy.get('.proposal-service').contains('Service description*').should('not.exist')
        cy.get('.proposal-service').contains('Unit*').should('exist')
        cy.get('.proposal-service').contains('Quantity*').should('exist')
        cy.get('.proposal-service').contains('Unit price*').should('exist')
        cy.get('.proposal-service').contains('Discount (%)*').should('exist')
        cy.get('.actionbar__buttons > .btn--outline').click()

    })
    it('making a proposal', () => {

        const filePath = "picture.jpg"

        cy.get('.nav__links > :nth-child(2) > .btn').click()
        cy.wait(2000)
        cy.get('.subheader__wrapper > .input').type('Test1')
        cy.get(':nth-child(1) > .css-2b097c-container > .css-1mgdkxw-control > .css-1wy0on6 > .css-ienc07-indicatorContainer')
        .click().type('123{enter}')
        cy.get(':nth-child(2) > .css-2b097c-container > .css-1mgdkxw-control > .css-1wy0on6 > .css-ienc07-indicatorContainer')
        .click().type('HRK{enter}')
        cy.wait(1000)
        cy.get('.proposal-service__add > .btn--primary').click()
        cy.get('.proposal-service__header > .field > .css-2b097c-container > .css-1mgdkxw-control > .css-1wy0on6 > .css-ienc07-indicatorContainer')
        .click().type('123{enter}')
        cy.get('.slate__editor').type('test')
        cy.get('.proposal-service__fields > :nth-child(1) > .css-2b097c-container > .css-1mgdkxw-control > .css-1wy0on6 > .css-ienc07-indicatorContainer')
        .click().type('123{enter}')
        cy.fixture('picture.jpg').then(Cypress.Blob.base64StringToBlob)
        .then((fileContent) => {
        cy.get('.dropzone__uploadmessage > p').attachFile(
          {filePath: 'picture.jpg'},{subjectType: 'drag-n-drop'})
        })
        cy.get('.actionbar__buttons > .btn--primary').click()
        cy.get('[href="/dashboard/proposals/draft"]').click()
    })
    it('delete button missing on builder form', () => {

        cy.get('.actionbar__buttons > .btn--outline').invoke('removeAttr', 'target').click() 
        cy.get('.nav__links__item > .btn').click()
        cy.get('.actionbar__toggle').click()
        cy.get('.actionbar__drawer').contains('Delete').should('not.exist')
        
    })
    it('wrong options menu and delete icon name is visible on "Builder" page', () => {

        cy.get('.actionbar__toggle > .btn__icon').trigger('mouseover').contains('icon more 16')
        cy.get('.actionbar__toggle > .btn__icon').click('left')
        cy.wait(2000)
        cy.get('.photobox > .btn > svg').trigger('mouseover').contains('icon trash 16')
        cy.wait(1000)
        cy.get('[href="/dashboard/proposals/draft"]').click()
    })
    
})
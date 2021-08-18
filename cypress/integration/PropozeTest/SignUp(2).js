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
    it('does not have all elements', () => {

        cy.contains('E-mail').should('exist')
        cy.contains('Password').should('exist')
        cy.contains('Confirm password').should('not.exist')
        cy.contains('First Name').should('not.exist')
        cy.contains('Last Name').should('not.exist')
        cy.contains('Date of Birth').should('not.exist')
        cy.contains('Terms of Use').should('not.exist')
    })
    it('contains all correct functionalities', () => {
        
        cy.get('.auth__content').contains('Log in').click()
        
    })
    it('Sign Up page does not need "Forgot password?" link', () => {
        
        cy.get('form').contains('Forgot password?').should('exist')
        
    })
    it.skip('can sign up with enter key', () => {

        //cy.get('.nav__links__item > .btn').click() 
        cy.wait(1000)
        cy.get(':nth-child(1) > .input').type('suncica772@gmail.com')
        cy.get(':nth-child(2) > .input').type('Suncica{enter}')
        
    })
    it('should show mandatory symbol (*) on mandatory fields', () => {

        cy.wait(1000)
        //cy.get('.nav__links__item > .btn').click() 
        cy.contains('Password*').should('exist')
        cy.contains('E-mail*').should('not.exist')
    })
    it('should display Invalid e-mail address', () => {

        cy.wait(1000) 
        cy.get(':nth-child(2) > .input').type('Suncica')
        cy.get('form > .btn').click()
        cy.get('.alert').should('be.visible')
       
    })
    it('accepts blank spaces on password field', () => {

        cy.wait(1000)
        //cy.get(':nth-child(1) > .input').type('suncica772@gmail.com')
        cy.get(':nth-child(2) > .input').type('      ')
        cy.get('form > .btn').click()
        cy.get('.auth__content').contains('Invalid password').should('not.exist')
       
    })
    it('accepts inccorect e-mail address while signin in', () => {

        cy.wait(1000)
        cy.get(':nth-child(1) > .input').type('suncica772@emailmkl.com')
        cy.get('.auth__content').contains('Invalid e-mail adddress').should('not.exist')
        cy.get('form > .btn').click()

    })
    it('should have minimum password lenght', () => {

        cy.wait(1000)
        cy.get(':nth-child(1) > .input').type('suncica772@gmail.com')
        cy.get(':nth-child(2) > .input').type('Sunci')
        cy.get('form > .btn').click()
        cy.get('.auth__content').contains('Invalid password').should('exist')
        
    })
    it('accepts only numbers in password field', () => {

        cy.wait(1000)
        cy.get(':nth-child(2) > .input').type('123456')
        cy.get('form > .btn').click()
        cy.get('.auth__content').contains('Password needs a number and lowercase letter').should('not.exist')
    })
    it('accepts only letters in password field', () => {

        cy.wait(1000)
        cy.get(':nth-child(2) > .input').type('abcdef')
        cy.get('form > .btn').click()
        cy.get('.auth__content').contains('Password needs a number and lowercase letter').should('not.exist')
        
    })
    it('does not reload the page when clicking Create account button', () => {

        cy.wait(1000)
        cy.get(':nth-child(2) > .input').type('suncica772')
        cy.get('.nav__links__item > .btn').click()
        //cy.reload();
    })
    it('clicking logo leads to homepage ', () => {

        cy.wait(1000)
        cy.get('.header__branding > .logo > .logo__link').click()

    })
    it('signs successfully', () => {
        
        //cy.get('.nav__links__item > .btn').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .input').type('suncica772@gmail.com')
        cy.get(':nth-child(2) > .input').type('Suncica')
        cy.get('form > .btn').click()
    })

    it.skip('does not shows validation error entering existing E-mail address', () => {

        cy.wait(1000)
        cy.get(':nth-child(1) > .input').type('suncica772@gmail.com');
        cy.get(':nth-child(2) > .input').type('suncica772')
        cy.get('form > .btn').click()
        cy.get('.auth__content').contains('Incorrect or invalid email address').should('not.exist')
    })
  
})

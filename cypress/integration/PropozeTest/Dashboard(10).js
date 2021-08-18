/// <reference types="cypress" />


describe('Dashboard', () => {
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
    it('delete button missing on "In progress" page', () => {

        cy.get('.actionbar__toggle').click()
        cy.get('.actionbar__drawer').contains('Delete').should('not.exist')
        cy.get('.actionbar__toggle > .btn__icon').click('left')
        
    })
    it('wrong options menu icon name is visible on "In progress" page', () => {

        cy.get('.actionbar__toggle > .btn__icon').trigger('mouseover').contains('icon more 16')
    })
    it('dupilcating a proposal', () => {

        cy.wait(1000)
        cy.get('.actionbar__toggle').click()
        cy.get('.actionbar__drawer > :nth-child(1)').click()
        cy.get('.dashboard__section > :nth-child(2) > :nth-child(1)').click('left')
        cy.wait(1000)
        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > :nth-child(2) > .actionbar__toggle').click()
        cy.get('.actionbar__drawer > :nth-child(1)').click()
        cy.get('.dashboard__section > :nth-child(2) > :nth-child(1)').click('left')
    })
    it('archiving a proposal', () => {

        cy.wait(1000)
        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > :nth-child(2) > .actionbar__toggle').click()
        cy.wait(1000)
        cy.get('.actionbar__drawer > :nth-child(3)').click()
        cy.wait(1000)
        cy.get('.btn-group > .btn--primary').click()
    })
    it('archived proposals do not have "Preview" button', () => {

        cy.get('.dashboard__sidebar__proposals > ul > :nth-child(3) > a').click()
        cy.get('.proposal-item').contains('Preview').should('not.exist')
        cy.wait(1000)
        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > :nth-child(2) > .actionbar__toggle').click()
        cy.get('.actionbar__drawer').contains('Preview').should('not.exist')
        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > :nth-child(2) > .actionbar__toggle').click()
    })

    it('wrong options menu icon name is visible on "Archived" page', () => {

        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > :nth-child(2) > .actionbar__toggle > .btn__icon').trigger('mouseover').contains('icon more 16')
    })
    it('unable to delete archived proposals one after another', () => {

        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > :nth-child(2) > .actionbar__toggle').click()
        cy.wait(1000)
        cy.get('.actionbar__drawer > :nth-child(3)').click()
        cy.wait(1000)
        cy.get('.btn-group > .btn--primary').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > :nth-child(2) > .actionbar__toggle').click()
        cy.wait(1000)
        cy.get('.actionbar__drawer').contains('Delete').click()
    })
    it('validation message showing when deleting proposal', () => {

        cy.get('.dashboard__sidebar__proposals > ul > :nth-child(1) > a').click()
        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > :nth-child(2) > .actionbar__toggle').click()
        cy.get('.actionbar__drawer > :nth-child(1)').click()
        cy.wait(1000)
        cy.get('.actionbar__drawer > :nth-child(3)').click()
        cy.get('.btn-group > .btn--primary').click()
        cy.wait(1000)
        cy.get('.dashboard__sidebar__proposals > ul > :nth-child(3) > a').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > :nth-child(2) > .actionbar__toggle').click()
        cy.wait(1000)
        cy.get('.actionbar__drawer > :nth-child(3)').click()
        cy.wait(1000)
        cy.get('.modal__header').contains('Delete this proposal?').should('exist')
        cy.get('.btn-group > .btn--primary').click()
        
    })
    it('duplicating proposal as a template', () => {

        cy.get('.actionbar__toggle').click()
        cy.get('.actionbar__drawer > :nth-child(2)').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > a').click()
          
    })
    it('wrong options menu icon name is visible on "Templates" page', () => {

        cy.get('.actionbar__toggle > .btn__icon').trigger('mouseover').contains('icon more 16')
    })
    it('validation message showing when deleting a template', () => {

        cy.get(':nth-child(4) > a').click()
        cy.get('.actionbar__toggle').click()
        cy.wait(1000)
        cy.get('.actionbar__drawer > :nth-child(3)').click()
        cy.wait(1000)
        cy.get('.modal__header').contains('Delete this template?').should('exist')
        cy.get('.btn-group > .btn--primary').click()
    })
    it('changing information about client is not visible on Proposal page', () => {

        cy.get('.logo').click()
        cy.wait(1000)
        cy.get('.dashboard__sidebar__manage > ul > :nth-child(1) > a').click()
        cy.get('.btn-group > .btn--outline').click()
        cy.wait(1000)
        cy.get('.modal__content > :nth-child(1) > .input').clear().type('Test')
        cy.get('.btn-group > .btn--primary').click()
        cy.wait(1000)
        cy.get('.dashboard__sidebar__proposals > ul > :nth-child(1) > a').click()
        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > .actionbar__buttons > .btn--outline').invoke('removeAttr', 'target').click()
        cy.get('.proposal__to__client > .t-small').contains('Test').should('not.exist')
        cy.get('.logo__link').click()
    })
    it('search bar works properly', () => {

        cy.get('.input').click().type('Test')
        cy.wait(1000)
        cy.get('.search__results__wrapper').contains('Test1').should('exist')
        cy.get(':nth-child(2) > .proposal-item__title > .t-zeta').click()
        cy.wait(1000)
        cy.get('[href="/dashboard/proposals/draft"]').click()

    })
    it('search bar missing status of proposals', () => {

        cy.get('.input').click().type('Test')
        cy.get('.search__results__wrapper > :nth-child(1)').contains('Archived').should('not.exist')
        cy.get('.input').clear()
    })
    it('publishing proposal', () => {

        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > .actionbar__buttons > .btn--primary').click()
        cy.wait(1000)
        cy.get('.modal__header').contains('Ready to publish this proposal?').should('exist')
        cy.get('.btn-group > .btn--primary').click()
        cy.wait(1000)
        cy.get('.dashboard__sidebar__proposals > ul > :nth-child(2) > a').click()
        
    })
    it('wrong options menu icon name is visible on "Published" page', () => {

        cy.get('.dashboard__sidebar__proposals > ul > :nth-child(2) > a').click()
        cy.get('.actionbar__toggle').trigger('mouseover').contains('icon more 16')
    })
    it('copied link leads to published proposals', () => {

        cy.get('.dashboard__sidebar__proposals > ul > :nth-child(2) > a').click()
        cy.get('.actionbar__buttons > .btn--primary').click()
        cy.wait(1000)
        cy.get('.Toastify__toast-body').contains('Proposal URL successfully copied to clipboard').should('exist')
       
    })
    it('proposals can be published if client is deleted', () => {

        cy.get('.dashboard__sidebar__manage > ul > :nth-child(1) > a').click()
        cy.wait(1000)
        cy.get('.btn--ghost').click()
        cy.get('.modal__header').contains('Confirm delete').should('exist')
        cy.get('.btn--warning').click()
        cy.wait(1000)
        cy.get('.dashboard__sidebar__proposals > ul > :nth-child(1) > a').click()
        cy.wait(1000)
        cy.get('.actionbar__buttons > .btn--primary').click()
        cy.get('.modal__header').contains('Ready to publish this proposal?').should('exist')
        cy.get('.btn-group > .btn--primary').click()
        cy.wait(1000)
        cy.get('.dashboard__sidebar__proposals > ul > :nth-child(2) > a').click()
    })
    it('unpublishing proposal', () => {

        cy.get(':nth-child(1) > .proposal-item__actions > .actionbar > .actionbar__buttons > button.btn--outline').click()
        cy.wait(1000)
        cy.get('.modal__header').contains('Unpublish this proposal?').should('exist')
        cy.get('.btn-group > .btn--primary').click()
    })
    it('deleting account', () => {

        cy.get('.companyselector > .btn').click()
        cy.get('.companyselector__buttons > :nth-child(1) > a').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > ul > li > a').click()
        cy.get('.settings > .btn').click()
        cy.wait(1000)
        cy.get('.modal__header').contains('Confirm delete').should('exist')
        cy.get('.btn--warning').click()

    })

})
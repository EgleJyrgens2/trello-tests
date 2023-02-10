import BoardPage from "../pages/EgleBoardPage";
import Boards from "../pages/EgleBoards";
import LoginPage from "../pages/LoginPage";

describe('Test on Trello board', () => {
    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'Egle Kanban board';
    const myKanbanBoardUrl = 'https://trello.com/b/MYLv5bOL/egle-kanban-board';

    beforeEach(() => {
        LoginPage.openTrelloLoginPage();
        cy.viewport(1440, 900)

        //this information is kept in file cypress.congig.js, block 'env'
        LoginPage.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        Boards.boardsViewShouldBeVisible();
        Boards.openBoardByName(myKanbanBoard);
    });

    it('Checks that specific Trello board is open', () => {
        BoardPage.boardUrlIsCorrect(myKanbanBoardUrl);
    });

    it('Open and close card details', () => {
        const name = "My first list";
        const cardname1 = "Alabama";

        BoardPage.createNewList(name);
        cy.get('.js-add-a-card').click();
        cy.get('.list-card-details').last().type(cardname1 + '{enter}');
        cy.get('.list-card-title').last().should('contain', cardname1);
        cy.get('.list-card-title').click();
        cy.get('.card-detail-window').contains('Description');
        cy.get('.icon-md').click();
        cy.get('.card-detail-window').should('not.exist');
        cy.get('.list-header-extras-menu').last().click();
        cy.get('.js-close-list').click();

    });

    it('Add label to card and remove it', () => {
        const name = "My second list";
        const cardname2 = "Banana";

        BoardPage.createNewList(name);
        cy.get('.js-add-a-card').click();
        cy.get('.list-card-details').last().type(cardname2 + '{enter}');
        cy.get('.list-card-title').should('contain',cardname2);
        cy.get('.list-card-title').click();
        cy.get('.js-edit-labels').click();
        cy.get('.nch-textfield__input').type('blue'+'{enter}');
        cy.get('[data-testid="card-label"]').click();
        cy.get('[data-testid="popover-close"] > .css-1wits42').click();
        //cy.get('[data-testid="card-label"]').should('be.visible');
        cy.get('.icon-md').click();
        //cy.get('[data-testid="compact-card-label"]').should('be.visible');
        cy.get('.list-card-title').last().click();
        cy.get('[data-testid="card-label"]').click();
        cy.get('[data-testid="card-label"]').last().click();
        cy.get('.icon-md').click();
        cy.get('[data-testid="compact-card-label"]').should('not.exist');
        cy.get('.list-header-extras-menu').last().click();
        cy.get('.js-close-list').click();
    });

    it('Add card as a template', () => {
        const name = "My third list";
        const cardname3 = "Adding card as a template";

        BoardPage.createNewList(name);
        cy.get('.js-add-a-card').last().click();
        cy.get('.list-card-details').last().type(cardname3 + '{enter}');
        cy.get('.list-card-title').last().should('contain', cardname3);
        cy.get('.list-card-title').last().click();
        cy.get('.js-convert-to-template > .js-sidebar-action-text').click();
        cy.get('.icon-md').click();
        cy.get('.badge').should('have.text', 'This card is a template.');
        cy.get('.list-header-extras-menu').last().click();
        cy.get('.js-close-list').click();
    });

    it('Create new card from template and delete template', () => {
        const name = "My fourth list";
        const cardname4 = "Adding a card again";
        
        BoardPage.createNewList(name);
        cy.get('.js-add-a-card').last().click();
        cy.get('.list-card-details').last().type(cardname4 + '{enter}');
        cy.get('.list-card-title').last().should('contain', cardname4);
        cy.get('.list-card-title').last().click();
        cy.get('.js-convert-to-template > .js-sidebar-action-text').click();
        cy.get('.icon-md').click();
        cy.get('.badge').last().should('have.text', 'This card is a template.');
        cy.get('.list-card-title').last().click();
        cy.get('[data-testid="create-card-from-template-banner-button"]').click();
        cy.get('[data-testid="create-card-from-template-button"]').click();
        cy.get('.icon-md').click();
        cy.get('.badge-text').click();
        cy.get(':nth-child(5) > .u-clearfix > .toggle-button').click();
        cy.get('.icon-md').click();
        cy.get('.list-header-extras-menu').last().click();
        cy.get('.js-close-list').click();
    });


    it('Edit template', () => {
        const name = "My fifth list";
        const cardname5 = "Adding a card again";
        const tempalteName = "different name for template";
        
        BoardPage.createNewList(name);
        cy.get('.js-add-a-card').last().click();
        cy.get('.list-card-composer-textarea').type(cardname5 + '{enter}');
        cy.get('.list-card-title').last().should('contain', cardname5);
        cy.get('.list-card-title').last().click();
        cy.get('.js-convert-to-template > .js-sidebar-action-text').click();
        cy.get('.icon-md').click();
        cy.get('.badge').last().should('have.text', 'This card is a template.');
        cy.get('.list-card-title').last().click();
        cy.get('.mod-card-back-title').click().clear();
        cy.get('.mod-card-back-title').type(tempalteName + '{enter}');
        cy.get('.icon-md').click();
        cy.get('.list-header-extras-menu').last().click();
        cy.get('.js-close-list').click();
    });

});

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

        //this information is kept in file cypress.congig.js, block 'env'
        LoginPage.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        Boards.boardsViewShouldBeVisible();
        Boards.openBoardByName(myKanbanBoard);
    });

    it.skip('Checks that specific Trello board is open', () => {
        BoardPage.boardUrlIsCorrect(myKanbanBoardUrl);
    });

    it.skip('Open and close card details', () => {
        const name = "My new list";
        const cardname1 = "Alabama";

        BoardPage.createNewList(name);
        cy.get('.js-add-a-card').type(cardname1 + '{enter}');
        cy.get('.list-card-title').click();
        cy.get('.card-detail-window').contains('Description');
        cy.get('.icon-md').click();
        cy.get('.card-detail-window').should('not.exist');
    });

    it('Add label to card and remove it', () => {
        const name = "My second list";
        const cardname1 = "Banana";

        BoardPage.createNewList(name);
        cy.get('.js-add-a-card').last().type(cardname1 + '{enter}');
        cy.get('.list-card-title').last().click();
        cy.get('.js-edit-labels').click();
        cy.get('.nch-textfield__input').type('blue'+'{enter}');
        cy.get('[data-testid="card-label"]').last().click();
        cy.get('[data-testid="popover-close"] > .css-1wits42').click();
        cy.get('.icon-md').click();
        cy.get('[data-testid="compact-card-label"]').should('be.visible');
        cy.get('.list-card-title').last().click();
        cy.get('[data-testid="card-label"]').click();
        cy.get('[data-testid="card-label"]').last().click();
        cy.get('.icon-md').click();
        cy.get('[data-testid="compact-card-label"]').should('not.exist');
    });

    it.skip('Add card as a template', () => {
        const name = "My other list";
        const cardname1 = "Template card";

        BoardPage.createNewList(name);
        cy.get('.js-add-a-card').last().type(cardname1 + '{enter}');
        cy.get('.list-card-title').last().click();
        cy.get('.js-convert-to-template > .js-sidebar-action-text').click();
        cy.get('.icon-md').click();
        cy.get('.badge').should('have.text', 'This card is a template.');
    });

    it.skip('Create new card from t', () => {
        
    });
});

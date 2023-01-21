import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";

describe('Test on Trello board', () => {

    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'Egle Board';
    const myKanbanBoardUrl = 'https://trello.com/b/DIKkcx2G/egle-board';


    beforeEach(() => {
        LoginPage.openTrelloLoginPage();

        //this information is kept in file cypress.congig.js, block 'env'
        LoginPage.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        Boards.boardsViewShouldBeVisible();
        Boards.openBoardByName(myKanbanBoard);
    });

    it('Checks that specific Trello board is open', () => {
        BoardPage.boardUrlIsCorrect(myKanbanBoardUrl);
    });

    it('Hide menu bar on the left (minimize)', () => {
        cy.get('[data-testid="workspace-boards-and-views-lists"]').should('be.visible');
        cy.get('[data-testid="workspace-navigation-collapse-button"]').click();
        cy.get('[data-testid="workspace-boards-and-views-lists"]').should('not.be.visible');
        cy.get('[data-testid="workspace-navigation-expand-button"]').click();
        cy.get('[data-testid="workspace-boards-and-views-lists"]').should('be.visible');
    });

    it('Edit board name and change it back', () => {
        cy.get('.js-board-editing-target').type('something');
        cy.get('.board-header').click();
        cy.get('.js-board-editing-target').should('have.text', 'something');
        cy.get('.js-board-editing-target').type('Egle Board');
        cy.get('.board-header').click();
        cy.get('.js-board-editing-target').should('contain', myKanbanBoard);
    });

    it('Star and unstar the board', () => {
        cy.get('.board-header-star-container .icon-star').should('be.visible').and('have.css', 'color','rgb(23, 43, 77)');
        cy.get('.board header-star-container .icon-starred').should('not.exist');
        cy.get('.board-header-star-container .icon-star').click();
        cy.get('.board-header-star-container .icon-star').should('not.exist');
        cy.get('.board-header-star-container .icon-starred').should('be.visible').and('have.css', 'color', 'rgb(242, 214, 0)');
        cy.get('.board-header-star-container .icon-starred').click();
        cy.get('.board-header-star-container .icon-starred').should('not.exist');
        cy.get('.board-header-star-container .icon-star').should('be.visible').and('have.css','color','rgb(23, 43, 77)');
    });
});


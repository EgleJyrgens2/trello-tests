import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";

describe('Test on Trello board', () => {

    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'Yevgenii Board';
    const myKanbanBoardUrl = 'https://trello.com/b/9U9M5idl/yevgenii-board';

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

    it('Changing workshop visibility', () => {
       cy.get('#permission-level').click();
       cy.contains('Private').click();
       cy.get('#permission-level').should('contain', 'Private');
       cy.get('#permission-level').click();
       cy.get('.pop-over-content').contains('Workspace').click();
       cy.get('#permission-level').should('contain', 'Workspace');
    });

    it('Change background color', () => {
        cy.get('[aria-label="Show menu"]'); //.click();
        cy.get('.board-menu-content-frame').contains('Change background').click();
        cy.get('.board-menu-content-frame').contains('Colors').click();
        cy.get('.image').eq(0).click(); //changing to blue
        //cy.get('.image').should('have.css', 'color').should('contain', 'rgb(23, 43, 77)').click();
        cy.get('[title="Close the board menu.').click();
        cy.get('#board').should('have.css', 'color').should('contain', 'rgb(23, 43, 77)');
    });
});

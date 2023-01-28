import BoardPage from "../pages/AnneBoardPage";
import Boards from "../pages/AnneBoards";
import LoginPage from "../pages/LoginPage";

describe('Test on Trello board', () => {

    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'Anne Board';
    const myKanbanBoardUrl = 'https://trello.com/b/0dCM1t0a/anne-board';

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

    it('Edit board name and change it back', () => {
        cy.get('h1.js-board-editing-target').should('be.visible');
        cy.get('h1.js-board-editing-target').should('have.text','Anne Board');
        cy.get('h1.js-board-editing-target').click();
        //cy.get('h1.js-board-editing-target').next().type(myKanbanBoard + 'updated{enter}');
        cy.get('.js-rename-board').type('muudetud{enter}');
        cy.get('.js-rename-board').should('have.text','muudetud');
        cy.get('.js-rename-board').click();
        cy.get('.js-rename-board').type('Anne Board{enter}');
        cy.get('h1.js-board-editing-target').should('have.text','Anne Board');

    });
    it('Change background color', () => {
        cy.get('[aria-label="Show menu"]');//.click();
        cy.get('.js-change-background').click();
        cy.get('.js-bg-colors').contains('Colors').click();
        cy.get('.image').eq(7).click(); //changing to turquoise
        cy.get('.board-menu-header-close-button').click();
      
    });

    it('Rename list (column)', () => {
        cy.get('.list-header-target').eq(0).should('be.visible').click();
        cy.get('.js-list-name-input').eq(0).type('Muudetud nimetus{enter}');
        cy.get('.js-list-name-assist').eq(0).should('have.text','Muudetud nimetus');
    
    }); 
    it('Copy list (column)', () => {
        cy.get('.list-header-extras').eq(0).should('be.visible').click();
        cy.get('.pop-over-header-title');
        cy.get('.js-copy-list').click();
        cy.get('textarea.js-autofocus').click().type('New List{enter}');
        cy.get('.list-header-extras').eq(1).should('be.visible');
    
    }); 
});
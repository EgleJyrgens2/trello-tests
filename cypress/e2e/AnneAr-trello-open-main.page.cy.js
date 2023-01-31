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

    it('Archive list (column)', () => {
        cy.get('.js-open-add-list').click();
        cy.get('.list-name-input').type('Totally new List{enter}').click;
        cy.get('.list-header-extras').eq(4).should('be.visible').click();
        cy.get('.js-close-list').click();
        cy.get('.board-canvas').should('not.contain','Totally new List');
    }); 

    it('Create list for sorting list by card names', () => {
        cy.get('.js-open-add-list').click();
        cy.get('.list-name-input').type('List for sorting cards{enter}');
        cy.get('.board-canvas').should('contain','List for sorting cards');
    }); 

    it('Create cards for sorting', () => {
        cy.contains('textarea','List for sorting cards').parent().parent().within(() => {
        cy.get('.js-add-a-card').click();
        cy.get('.list-card-composer-textarea').type('Anne{enter}');
        cy.get('.list-card-composer-textarea').type('X-Ray{enter}'); 
        cy.get('.list-card-composer-textarea').type('Bernard{enter}');
        cy.get('.js-cancel').click();
    });
    });
    it.only('Sort list by card names', () => {
        cy.contains('textarea','List for sorting cards').parent().parent().within(() => {
        cy.get('.list-header-extras-menu').click();
        cy.get('.js-sort-cards').click();
        cy.get('.js-sort-by-card-name').click();

    });
    });
   
}); 
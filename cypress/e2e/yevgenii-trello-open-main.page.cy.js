import BoardPage from "../pages/BoardPageYO";
import Boards from "../pages/BoardsYO";
import LoginPage from "../pages/LoginPage";

describe('Test on Trello board', () => {

    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'Yevgenii Kanban Board'; 
    //Yevgenii Board
    //Yevgenii Kanban Board
    const myKanbanBoardUrl = 'https://trello.com/b/7NjvvWsJ/yevgenii-kanban-board';
    //https://trello.com/b/9U9M5idl/yevgenii-board
    //https://trello.com/b/7NjvvWsJ/yevgenii-kanban-board

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

    it.only('Change background color', () => {
        cy.get('[aria-label="Show menu"]'); //.click();
        cy.get('.board-menu-content-frame').contains('Change background').click();
        cy.get('.board-menu-content-frame').contains('Colors').click();
        cy.get('.image').eq(0).click(); //changing to blue
        //cy.get('.image').should('have.css', 'color').should('contain', 'rgb(23, 43, 77)').click();
        cy.get('[title="Close the board menu.').click();
        cy.get('#board').should('have.css', 'color').should('contain', 'rgb(23, 43, 77)');
    });

    //Week 2
    it('Rename list(column)', () => {
        cy.get('.list-header-target').eq(0).type('123{enter}');
        cy.get('.list-header-name-assist').eq(0).should('contain','123');
    });

    it('Copy list', () => {
        cy.get('.js-open-list-menu').eq(0).click();
        cy.get('.js-copy-list').click();
        cy.get('[name="name"].js-autofocus').type('unique name');
        cy.get('.js-submit').click();
        cy.get('#board').children().should('contain','unique name');
    });

    it('Set list limits', () => {
        cy.get('.list-header-extras-menu').eq(0).click();
        cy.get('.js-set-list-limit').click();
        cy.get('[name="list-limit"]').type('2');
        cy.get('.js-submit').click();
        cy.get('.js-list-limit-badge').should('be.visible');
        cy.get('.js-add-a-card').eq(0).click();
        cy.get('.js-card-title').type('new card{enter}');
        cy.get('.list-cards').eq(0).children('.list-card').should('have.length.at.least', 3);//('be.gt', 2);
        cy.get('.exceeds-list-limit').should('be.visible');
        cy.get('.exceeds-list-limit').should('have.css', 'background-color').should('contain','rgb(250, 243, 192)');
    });

    it('Remove list limit', () => {
        cy.get('.list-header-extras-menu').eq(0).click();
        cy.get('.js-set-list-limit').click();
        cy.get('.js-remove-limit').click();
        cy.get('.js-list-limit-badge').should('not.be.visible');
    });
});

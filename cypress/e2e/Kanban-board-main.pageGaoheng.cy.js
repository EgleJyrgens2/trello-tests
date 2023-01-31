import BoardPage from "../pages/BoardPageGao";
import Boards from "../pages/BoardsGao";
import LoginPage from "../pages/LoginPage";

describe('Test on Trello board', () => {
    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'Gao Kanban Board';
    const myKanbanBoardUrl = 'https://trello.com/b/8EMNheoQ/gao-kanban-board';

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

    it('Set limit for a list', () => {
        const listTitle = 'Backlog';
        const number = '2';
        const cardTitle = 'Here is a new card';
        BoardPage.setLimitForAList(listTitle, number, cardTitle);
    });

    it('Remove limit of a list', () => {
        //This code somehow can not run successfully 
        const listTitle = 'Backlog';
        BoardPage.removeLimitOfAList(listTitle);

        // //Remove added limit
        // cy.contains('textarea', 'Backlog').parent().parent().within(() => {
        //     cy.get('.js-open-list-menu').click();
        // });
        // cy.get('.js-set-list-limit').click();
        // cy.get('.js-remove-limit').click();

        // //Verify the limit is removed
        // cy.contains('textarea', 'Backlog').parent().parent().within(() => {
        //     cy.get('.list-header-extras-limit-badge').should('not.be.visible');
        // });
    });

    it('Create cards for sorting', () => {
        cy.contains('textarea', 'List for sorting cards').parent().parent().within(() => {
            cy.get('.js-add-a-card').click();
            cy.get('.list-card-composer-textarea').type('Anne{enter}');
            cy.get('.list-card-composer-textarea').type('X-Ray{enter}');
            cy.get('.list-card-composer-textarea').type('Bernard{enter}');
            cy.get('.js-cancel').click();
        });
    });
    it.only('Sort list by card names', () => {
        cy.contains('textarea', 'List for sorting cards').parent().parent().within(() => {
            cy.get('.list-header-extras-menu').click();
        });
        cy.get('.js-sort-cards').click();
        cy.get('.js-sort-by-card-name').click();
    });
});

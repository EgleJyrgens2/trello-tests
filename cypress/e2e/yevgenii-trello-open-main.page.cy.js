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

    //Week 1
    it('Changing workshop visibility', () => {
       cy.get('#permission-level').click();
       cy.contains('Private').click();
       cy.get('#permission-level').should('contain', 'Private');
       cy.get('#permission-level').click();
       cy.get('.pop-over-content').contains('Workspace').click();
       cy.get('#permission-level').should('contain', 'Workspace');
    });

    it('Change background color', () => {
        cy.get('[aria-label="Show menu"]').click();
        cy.wait(1000);
        cy.get('.board-menu-content-frame').contains('Change background').click();
        cy.get('.board-menu-content-frame').contains('Colors').click();
        cy.get('.image').eq(0).click(); //changing to blue
        cy.get('[title="Close the board menu.').click();
        cy.get('#board').should('have.css', 'color').should('contain', 'rgb(23, 43, 77)');
    });

    //Week 2
    it('Rename list(column)', () => {
        cy.get('.list-header-target').eq(0).type('123{enter}');
        cy.get('.list-header-name-assist').eq(0).should('contain','123');
        //rename back
        cy.get('.list-header-target').eq(0).type('Backlog{enter}');
        cy.get('.list-header-name-assist').eq(0).should('contain','Backlog');
    });

    it('Copy and archive list', () => {
        cy.get('.js-open-list-menu').eq(0).click();
        cy.get('.js-copy-list').click();
        cy.get('[name="name"].js-autofocus').type('unique name');
        cy.get('.js-submit').click();
        cy.get('#board').children().should('contain','unique name');
        //archive list
        cy.get('.js-open-list-menu').eq(1).click();
        cy.get('.js-close-list').click();
        cy.wait(1000);
    });

    it('Set and Remove list limits', () => {
        //set list limits
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
        //remove list limits
        cy.get('.list-header-extras-menu').eq(0).click();
        cy.get('.js-set-list-limit').click();
        cy.get('.js-remove-limit').click();
        cy.get('.js-list-limit-badge').should('not.be.visible');
        //archive card
        cy.contains('new card').rightclick();
        cy.get('.icon-archive').click();
    });

    //Week 3
    it('Add and Delete member', () => {
        //create card, add member
        cy.get('.icon-add').first().click();
        cy.get('.js-card-title').type('add/delete member');
        cy.get('.js-add-card').click();
        cy.contains('add/delete').click();
        cy.get('.js-change-card-members').click();
        cy.get('.full-name').click();
        cy.get('.pop-over-header-close-btn').click();
        cy.get('.card-detail-window').scrollIntoView();
        cy.get('.card-detail-item-header').should('contain','Members').should('be.visible');
        cy.get('.js-close-window').click();
        cy.get('.list-card').contains('add/delete').next().next().should('have.class','list-card-members').should('be.visible');
        //delete member
        cy.get('.list-card').contains('add/delete').click();
        cy.get('.js-change-card-members').click();
        cy.get('.full-name').click();
        cy.get('.pop-over-header-close-btn').click();
        cy.get('.card-detail-window').scrollIntoView();
        cy.get('.js-close-window').click();
        cy.get('.list-card').contains('add/delete').next().next().should('have.class','list-card-members').should('not.be.visible');
        //archive card
        cy.contains('add/delete').rightclick();
        cy.get('.icon-archive').click();
    });

    it('Move card', () => {
        cy.get('.icon-add').first().click();
        cy.get('.js-card-title').type('Move card{enter}');
        //move card
        cy.contains('Move card').click();
        cy.get('.icon-move').click();
        cy.get('.js-select-position').select('1');
        cy.get('.js-submit').click();
        cy.get('.card-detail-window').scrollIntoView();
        cy.get('.js-close-window').click();
        cy.get('.list-card').first().should('contain','Move card');
        //archive card
        cy.contains('Move card').rightclick();
        cy.get('.icon-archive').click();
    });

    it('Copy card', () => {
        cy.get('.icon-add').first().click();
        cy.get('.js-card-title').type('Original card{enter}');
        //copy card
        cy.contains('Original card').click();
        cy.get('.js-copy-card').click();
        cy.get('[name="name"]').last().type('Copied card');
        cy.get('.js-select-position').select('1');
        cy.get('.js-submit').click();
        cy.get('.card-detail-window').scrollIntoView();
        cy.get('.js-close-window').click();
        cy.get('.list-card').first().should('contain','Copied card');
        cy.contains('Original card').should('be.visible');
        //archive both cards
        cy.contains('Original card').rightclick();
        cy.get('.icon-archive').click();
        cy.contains('Copied card').rightclick();
        cy.get('.icon-archive').click();
    });

    it('Make card a template and create new card', () => {
        cy.get('.icon-add').first().click();
        cy.get('.js-card-title').type('Template card{enter}');
        //make card a template
        cy.contains('Template card').click();
        cy.get('.js-convert-to-template').click();
        cy.get('.js-convert-to-template').should('not.be.visible');
        cy.get('.card-detail-window').scrollIntoView();
        cy.get('.card-detail-window').contains('This is a Template card').should('be.visible');
        cy.get('.js-close-window').click();
        cy.contains('Template card').contains('This card is a template.').should('be.visible');
        //create card using a template
        cy.contains('Template card').click();
        cy.contains('Create card from template').click();
        cy.get('[data-testid="card-title-textarea"]').type('New card{enter}');
        cy.wait(1000);
        cy.get('.js-close-window').click();
        cy.get('.list').first().should('contain','Template card').should('be.visible');
        cy.get('.list').first().should('contain','New card').should('be.visible');
        //delete created cards
        cy.contains('New card').rightclick();
        cy.get('.icon-archive').click();
        cy.contains('Template card').click();
        cy.get('.icon-remove').click();
        cy.get('.js-confirm').click();
    });
});

//EDIT CONFIG BACK
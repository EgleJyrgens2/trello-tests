import EgleBoardPage from "../pages/EgleBoardPage";
import EgleBoards from "../pages/EgleBoards";
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
        EgleBoards.boardsViewShouldBeVisible();
        EgleBoards.openBoardByName(myKanbanBoard);
    });

    it.skip('Checks that specific Trello board is open', () => {
        EgleBoardPage.boardUrlIsCorrect(myKanbanBoardUrl);
    });

    it.skip('Hide menu bar on the left (minimize)', () => {
        cy.get('[data-testid="workspace-boards-and-views-lists"]').should('be.visible');
        cy.get('[data-testid="workspace-navigation-collapse-button"]').click();
        cy.get('[data-testid="workspace-boards-and-views-lists"]').should('not.be.visible');
        cy.get('[data-testid="workspace-navigation-expand-button"]').click();
        cy.get('[data-testid="workspace-boards-and-views-lists"]').should('be.visible');
    });

    it.skip('Edit board name and change it back', () => {
        cy.get('h1.js-board-editing-target').click();
        cy.get('.js-rename-board').type('something{enter}');
        cy.get('.js-rename-board').should('have.text','something');
        cy.get('.js-rename-board').click();
        cy.get('.js-rename-board').type('Egle Board{enter}');
        cy.get('.js-board-editing-target').should('contain', myKanbanBoard);
    });

    it.skip('Star and unstar the board', () => {
        cy.get('.board-header-star-container .icon-star').should('be.visible').and('have.css', 'color','rgb(23, 43, 77)');
        cy.get('.board header-star-container .icon-starred').should('not.exist');
        cy.get('.board-header-star-container .icon-star').click();
        cy.get('.board-header-star-container .icon-star').should('not.exist');
        cy.get('.board-header-star-container .icon-starred').should('be.visible').and('have.css', 'color', 'rgb(242, 214, 0)');
        cy.get('.board-header-star-container .icon-starred').click();
        cy.get('.board-header-star-container .icon-starred').should('not.exist');
        cy.get('.board-header-star-container .icon-star').should('be.visible').and('have.css','color','rgb(23, 43, 77)');
    });

    it('Create new list', () => {
        const name = "My new list";

        EgleBoardPage.createNewList(name);
    });
    
    it('Add 3 cards into list', () => {
        const cardname1 = "Alabama";
        const cardname2 = "X-games";
        const cardname3 = "Banana";

        EgleBoardPage.addNewCardIntoList1(cardname1);
        EgleBoardPage.addNewCardIntoList2(cardname2);
        EgleBoardPage.addNewCardIntoList3(cardname3);
        cy.get('.list-card-title').should('have.length', 3);
        
    });

    it('Sort cards alphabetically', () => {
        const cardname1 = "Alabama";
        const cardname2 = "X-games";
        const cardname3 = "Banana";

        EgleBoardPage.sortCardsAlphabetically(cardname1, cardname2, cardname3);
    });

    it('Sort cards by Date (newest first)', () => {
        const cardname1 = "Alabama";
        const cardname2 = "X-games";
        const cardname3 = "Banana";

        EgleBoardPage.sortCardsByNewestDate(cardname1, cardname2, cardname3);
    });

    it('Sort cards by Date (oldest first)', () => {
        const cardname1 = "Alabama";
        const cardname2 = "X-games";
        const cardname3 = "Banana";

        EgleBoardPage.sortCardsByOldestDate(cardname1, cardname2, cardname3);
    });

});
import BoardPage from "../pages/BoardPageGao";
import Boards from "../pages/BoardsGao";
import LoginPage from "../pages/LoginPage";

describe('Test on Trello board', () => {

    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'Gao Board';
    const myKanbanBoardUrl = 'https://trello.com/b/5mqsWnW0/gao-board';

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

    it('Star and unstar the board', () => {
        BoardPage.starTheBoard();
        BoardPage.unstarTheBoard();
    });

    it('Star and unstar the board from the side bar menu', () => {
        BoardPage.starTheBoardfromSideMenu();
        BoardPage.unstarTheBoardFromSideMenu();
    });

    it('Hide and open the menu bar on the left', () => {
        BoardPage.hideSideMenuBar();
        BoardPage.openSideMenuBar();
    });

    it('Edit board name and change it back', () => {
        const name1 = "Gao Board";
        const name2 = "Gao's Board"
        //Change the name of the board
        BoardPage.changeBoardName(name1, name2);
        //Change the name of the board back
        BoardPage.changeBoardName(name2, name1);
    });

    it('Change the workspace visibility', () => {
        //Change the workspace visibility
        BoardPage.changeWorkspaceVisibilityToPrivate();

        //Change the workspace visibility back
        BoardPage.changeWorkspaceVisibilityToDefault();
    });

    it('Change the board background color', () => {
        let number = 2;
        BoardPage.changeBoardBackgroundColor(number);
        cy.get('.image').eq(2).should('have.attr', 'style', 'background-color: rgb(81, 152, 57);');
        cy.get('#trello-root').should('have.attr', 'style', 'background-color: rgb(81, 152, 57);');
    });

    it('Archive a list', () => {
        const listTitle = 'List for test';
        BoardPage.createANewList(listTitle);
        BoardPage.archiveAList(listTitle);
    });

    it('Change the position of the list "In review" in the columns', () => {
        BoardPage.changeInReviewListPosition();
    });

    it('Rename a list', () => {
        const listTitle1 = 'Backlog';
        const listTitle2 = 'To do';
        BoardPage.renameAList(listTitle1, listTitle2);
    });

    it('Copy a list', () => {
        const listTitle1 = 'Done';
        const listTitle2 = 'Cancelled';
        BoardPage.copyAList(listTitle1, listTitle2);
    });

    it('Sort a list by card name (alphabetically)', () => {
        const listTitle = 'A new list'
        const cardTitle1 = 'Alisa';
        const cardTitle2 = 'Xiaomi';
        const cardTitle3 = 'Bob';
        BoardPage.createANewList(listTitle);
        BoardPage.sortListCardsByName(listTitle, cardTitle1, cardTitle2, cardTitle3);
    });

    it('Sort a list by date created (newest first)', () => {
        const listTitle = 'A new list'
        BoardPage.sortListCardsByDateNewestFirst(listTitle);
    });

    it('Sort a list by date created (oldest first)', () => {
        const listTitle = 'A new list'
        BoardPage.sortListCardsByDateOldestFirst(listTitle)
    });
});

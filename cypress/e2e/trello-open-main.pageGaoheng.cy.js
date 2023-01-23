import BoardPage from "../pages/BoardPageGao";
import Boards from "../pages/Boards";
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
});

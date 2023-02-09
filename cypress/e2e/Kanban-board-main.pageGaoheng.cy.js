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

    it('Set limit for a list and remove it', () => {
        const listTitle = 'To Do';
        const number = '2';
        const cardTitle = 'Card1';
        const cardTitle2 = 'Card2';
        const cardTitle3 = 'Card3';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.addACard(listTitle, cardTitle2);
        BoardPage.setLimitForAList(listTitle, number, cardTitle);
        BoardPage.addACard(listTitle, cardTitle3);
        BoardPage.verifyLimitIconColorChangeWhenLimitIsReached(listTitle);
        BoardPage.removeLimitOfAList(listTitle);
    });

    //Testing the card functionality
    it('Add a new card, edit its name and archive it', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'New card!!!';
        const cardTitle2 = 'New card edited!!!'
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.editCardName(listTitle, cardTitle, cardTitle2);
        BoardPage.archiveACard(listTitle, cardTitle2);
    });

    it('Drag and drop card to another list(column)', () => {
        //This test case passes but drag action is not done
        const listTitle = 'Backlog';
        const cardTitle = 'Drag this card to the list Design';
        const listTitle2 = 'Design';
        const cardTitle2 = 'Copied';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.dragAndDropACard(listTitle, cardTitle, listTitle2, cardTitle2);
        // cy.get(':nth-child(1) > .list > .list-cards > .js-member-droppable > .list-card-details')
        // .dragTo('[href="/c/sjBPNjL0/81-copied"] > .list-card-details');
        
    });

    it('Move a card without opening card detail window', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'Move this card to another list';
        const listTitle2 = 'Design';
        const number = '1';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.moveCardRightClickMouseFunctionButton(listTitle, cardTitle, listTitle2, number);

    });

    it('Copy a card without opening card detail window', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'Make a copy of this card';
        const listTitle2 = 'Design';
        const cardTitle2 = 'Copied';
        const number = '1';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.copyCardRightClickMouseFunctionButton(listTitle, cardTitle, cardTitle2, listTitle2, number);
    });

    it('Open and close card details', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'Gao card';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.openACardDetailPage(listTitle, cardTitle);
        BoardPage.closeACardDetailPage();
        BoardPage.archiveACard(listTitle, cardTitle);
    });

    it('Add and remove a label to a card ', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'Banana';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.addLabelToACard(listTitle, cardTitle);
        BoardPage.removeLabelOfACard(listTitle, cardTitle);
    });

    it('Make card a template', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'Strawberry';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.makeACardTemplate(listTitle, cardTitle);
    });

    it('Create a new card from a template(without editing the template)', () => {
        const listTitle = 'To Do';
        const cardTitle = 'Apple';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.makeACardTemplate(listTitle, cardTitle);
        BoardPage.createACardFromTemplate(listTitle, cardTitle);
    });

    it('Create a new card from a template(editing the template)', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'Apple';
        const cardTitle2 = 'Orange';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.makeACardTemplate(listTitle, cardTitle);
        BoardPage.editATemplateAndCreateACard(listTitle, cardTitle, cardTitle2);
    });

    it('Remove a template', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'Berry';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.makeACardTemplate(listTitle, cardTitle);
        BoardPage.removeATemplate(listTitle, cardTitle);
    }); 

    it('Add description to a card and remove it', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'To add description';
        const description = 'My description';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.addDescriptionToACard(listTitle, cardTitle, description);
        BoardPage.removeDescriptionOfACard(listTitle, cardTitle);
    }); 
    
    it('Add, edit and delete a comment', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'To add a comment';
        const comment = 'Comment';
        const comment2 = 'Comment!!! edited';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.addAComment(listTitle, cardTitle, comment);
        BoardPage.editAComment(listTitle, cardTitle, comment, comment2);
        BoardPage.deleteAComment(listTitle, cardTitle, comment2);

    }); 

    it('Add and remove a member on the card detail window', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'To add a member';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.addCardMember(listTitle, cardTitle);
        BoardPage.removeCardMember(listTitle, cardTitle);
    });

    it.only('Move card using Move button in the card detail window', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'Move this card';
        const listTitle2 = 'Design';
        const number = '2';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.moveACardUsingMoveButtonFromDetailWindow(listTitle, cardTitle, listTitle2, number);
    });

    it.only('Copy a card using Copy button in the card detail window', () => {
        const listTitle = 'Backlog';
        const cardTitle = 'Copy this card';
        const cardTitle2 = 'Copied card';
        const listTitle2 = 'Design';
        const number = '3';
        BoardPage.addACard(listTitle, cardTitle);
        BoardPage.copyACardUsingCopyButtonFromDetailWindow(listTitle, cardTitle, cardTitle2, listTitle2, number);
    });
});

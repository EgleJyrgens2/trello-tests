class BoardPage {
    constructor() {
        this.boardName = '.js-rename-board';
        this.boardEmptySpace = '#board';
        this.unstarredIcon = '.board-header-star-container .icon-star';
        this.starredIcon = "[class*='icon-starred']";
        this.starredIconSideMenuBar = '.EAuDYQ9KJljpKy';
        this.boardLists = '.U7CjW6VI55nfAg';

        this.navigationCollapseButton = '[data-testid="workspace-navigation-collapse-button"]';
        this.navigationExpandButton = '[data-testid="workspace-navigation-expand-button"]';
        this.workspaceBoardViewLists = '[data-testid="workspace-boards-and-views-lists"]';

        this.workspaceVisibilityButton = '.js-change-vis';
        this.workspaceDropDownList = '.pop-over-list';

        this.threeDotMenuButton = '.js-react-root > .hCk0lP6IjMWs52 > .nch-icon > .css-snhnyn';
        this.changeBackgroundButton = '.js-change-background';
        this.backgroundColors = '.js-bg-colors';
        this.image = '.image'
        this.closeMenu = '.js-hide-sidebar';
        //Selectors for adding a list
        this.addAListButton = '.js-add-list';
        this.enterListTitle = '.list-name-input';
        this.saveListButton = '.js-save-edit';
        //Selector for the three-dot list menu button
        this.listMenuButton = '.js-open-list-menu';
        //Selector for archiving a list
        this.archiveListButton = '.js-close-list';
        //Selectors for changing the list position
        this.moveListButton = '.js-move-list';
        this.listPositionValueButton = '.js-pos-value';
        this.listPositionValueOptions = '.js-select-list-pos';
        this.confirmMovingButton = '.js-commit-position';
        //Selectors for copying a list
        this.copyListButton = '.js-copy-list';
        this.copyListWindow = '.pop-over.is-shown';
        this.copyListTitleInput = '[name="name"].js-autofocus';
        this.copyListSubmit = '.js-submit'
        //Selectors for renaming a list
        this.listNameArea = '.js-editing-target';
        this.listNameInput = '.js-list-name-input.is-editing';
        //Selectors for creating cards
        this.addACardButton = '.js-add-a-card';
        this.cardTitleInput = '.js-card-title';
        this.addCardConfirmButton = '.js-add-card';
        this.cancelAddingCard = '.js-cancel';
        this.cardList = '.list-cards';
        //Selectors for sorting list cards
        this.sortByButton = '.js-sort-cards';
        this.sortByName = '.js-sort-by-card-name';
        this.sortByDateNewestFirst = '.js-sort-newest-first';
        this.sortByDateOldestFirst = '.js-sort-oldest-first';
        //Selectors for setting and removing limit for a list
        this.setListLimitButton = '.js-set-list-limit';
        this.listLimitInput = '.set-list-limit';
        this.limitSaveButton = '.js-submit';
        this.listHeader = '.list-header-extras-limit-badge';
        this.cardWholeList = '.list-card';
        this.removeLimit = '.js-remove-limit';
    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }

    beforeStaringMyBoard(){
        cy.get(this.starIconBoard).should('have, attr', )
    }

    starMyBoard(){
        cy.get(this.starIconBoard).click();
        cy.get(this.starIconBoard)
    }

    changeBoardName(name1, name2){
        cy.get(this.boardName).contains(name1);
        cy.get(this.boardName).click().type(name2);
        cy.get(this.boardEmptySpace).click();
    }

    starTheBoard(){
        //The default status of the board
        cy.get(this.unstarredIcon).should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get(this.starredIcon).should('not.exist');
        cy.get(this.starredIconSideMenuBar).should('not.exist');

        cy.get(this.unstarredIcon).click();
        cy.get(this.starredIcon).should('be.visible')
        .should('have.css', 'color', 'rgb(242, 214, 0)');
        cy.get(this.unstarredIcon).should('not.exist');
        cy.get(this.starredIconSideMenuBar).should('exist');
    }

    unstarTheBoard(){
        cy.get(this.starredIcon).click();
        cy.get(this.unstarredIcon).should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get(this.starredIcon).should('not.exist');
        cy.get(this.starredIconSideMenuBar).should('not.exist');
    }

    starTheBoardfromSideMenu(){
        //The default status of the board
        cy.get(this.boardLists).eq(1).should('exist');
        cy.get(this.unstarredIcon).should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get(this.starredIcon).should('not.exist');

        cy.get(this.boardLists).eq(1).click({ force: true });
        cy.get(this.starredIcon).should('be.visible')
        .should('have.css', 'color', 'rgb(242, 214, 0)');
        cy.get(this.unstarredIcon).should('not.exist')
        cy.get(this.starredIconSideMenuBar).should('be.visible');
    }

    unstarTheBoardFromSideMenu(){
        cy.get(this.starredIconSideMenuBar).click();
        cy.get(this.unstarredIcon).should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get(this.starredIcon).should('not.exist');
        cy.get(this.starredIconSideMenuBar).should('not.exist');
    }

    hideSideMenuBar(){
        cy.get(this.navigationCollapseButton).should('be.visible');
        cy.get(this.workspaceBoardViewLists).should('be.visible');
        cy.get(this.navigationExpandButton).should('not.be.visible');

        //Hide the menu bar
        cy.get(this.navigationCollapseButton).click();
        cy.get(this.workspaceBoardViewLists).should('not.be.visible');
        cy.get(this.navigationExpandButton).should('be.visible');
    }

    openSideMenuBar(){
        cy.get(this.navigationExpandButton).should('be.visible');
        cy.get(this.workspaceBoardViewLists).should('not.be.visible');
        cy.get(this.navigationCollapseButton).should('not.be.visible');

        //Open the menu bar
        cy.get(this.navigationExpandButton).click();
        cy.get(this.workspaceBoardViewLists).should('be.visible');
        cy.get(this.navigationCollapseButton).should('be.visible');
    }

    changeWorkspaceVisibilityToPrivate(){
        cy.get(this.workspaceVisibilityButton).contains('Workspace');
        cy.get(this.workspaceVisibilityButton).click();
        cy.get(this.workspaceDropDownList).contains('Private').click();
        cy.get(this.workspaceVisibilityButton).contains('Private');
    }

    changeWorkspaceVisibilityToDefault(){
        cy.get(this.workspaceVisibilityButton).click();
        cy.get(this.workspaceDropDownList).contains('Workspace').click();
        cy.get(this.workspaceVisibilityButton).contains('Workspace');
    }

    changeBoardBackgroundColor(number){
        cy.get(this.threeDotMenuButton).click({ force: true });
        cy.get(this.changeBackgroundButton).click();
        cy.get(this.backgroundColors).click();
        cy.get(this.image).eq(number).click(); // number ranges 0-8
        cy.get(this.closeMenu).click();
    }

    createANewList(listTitle){
       cy.get(this.addAListButton).click();
       cy.get(this.enterListTitle).click().type(listTitle);
       cy.get(this.saveListButton).click();
       cy.contains('textarea', listTitle).should('exist');
    }

    archiveAList(listTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.listMenuButton).click();
        });
        cy.get(this.archiveListButton).click();

        //Verify that the list is not visible on the board
        cy.contains('textarea',listTitle).should('not.exist');
    }

    changeInReviewListPosition(){
        //Change the position of the list "In review"
        cy.contains('textarea','In review').parent().parent().within(() => {
            cy.get(this.listMenuButton).click();
        });
        cy.get(this.moveListButton).click();
        cy.get(this.listPositionValueButton).click({force: true});
        cy.get(this.listPositionValueOptions).find('option').eq(1).contains('2 (current)');
        cy.get(this.listPositionValueOptions).select(2);
        cy.get(this.confirmMovingButton).click();

        //Verify the position of the list "In review" is changed
        cy.contains('textarea','In review').parent().parent().within(() => {
            cy.get(this.listMenuButton).click();
        });
        cy.get(this.moveListButton).click();
        cy.get(this.listPositionValueButton).click({force: true});
        cy.get(this.listPositionValueOptions).find('option').eq(2).contains('3 (current)');
    }

    renameAList(listTitle1, listTitle2){
        cy.contains('textarea', listTitle1).parent().parent().within(() => {
            cy.get(this.listNameArea).click();
            cy.get(this.listNameInput).type(listTitle2)
        });
        cy.get(this.boardEmptySpace).click();

        //Verify that the name of the list is successfully changed
        cy.contains(listTitle2).should('exist');
        // //Strange here!!! After changing the name
        // //of a list, the textarea still shows the previous name before refreshing the page.
    }

    copyAList(listTitle1, listTitle2){
        //Copy a list
        cy.contains('textarea', listTitle1).parent().parent().within(() => {
            cy.get(this.listMenuButton).click();
        });
        cy.get(this.copyListButton).click();
        cy.get(this.copyListWindow).should('be.visible');
        cy.get(this.copyListTitleInput).type(listTitle2);
        cy.get(this.copyListSubmit).click();

        //Check that the copied list is visible on the board
        cy.contains('textarea', listTitle2).should('exist');
    }

    sortListCardsByName(listTitle, cardTitle1, cardTitle2, cardTitle3){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            //Add the first card 
            cy.get(this.addACardButton).click();
            cy.get(this.cardTitleInput).type(cardTitle1);
            cy.get(this.addCardConfirmButton).click();

            //Add the second card
            cy.get(this.cardTitleInput).type(cardTitle2);
            cy.get(this.addCardConfirmButton).click();

            //Add the third card
            cy.get(this.cardTitleInput).type(cardTitle3);
            cy.get(this.addCardConfirmButton).click();
            cy.get(this.cancelAddingCard).click();

            cy.get('.js-open-list-menu').click();
        });

        //Sort the list alphabetically
        cy.get(this.sortByButton).click();
        cy.get(this.sortByName).click();

        //Verify that the cards are sorted alphabetically
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.cardList).first().contains('Alisa');
            cy.get(this.cardList).last().contains('Xiaomi');
        });
    }

    sortListCardsByDateNewestFirst(listTitle){
        cy.contains('textarea',listTitle).parent().parent().within(() => {
            cy.get(this.listMenuButton).click();
        });

        //Sort the list by date created (newest first)
        cy.get(this.sortByButton).click();
        cy.get(this.sortByDateNewestFirst).click();
        
        //Verify that the cards are sorted by date created (newest first)
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.cardList).first().contains('Bob');
            cy.get(this.cardList).last().contains('Alisa');
        });
    }

    sortListCardsByDateOldestFirst(listTitle){
        cy.contains('textarea',listTitle).parent().parent().within(() => {
            cy.get(this.listMenuButton).click();
        });

        //Sort the list by date created (oldest first)
        cy.get(this.sortByButton).click();
        cy.get(this.sortByDateOldestFirst).click();
        
        //Verify that the cards are sorted by date created (oldest first)
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.cardList).first().contains('Alisa');
            cy.get(this.cardList).last().contains('Bob');
        });
    }

    
    setLimitForAList(listTitle, number, cardTitle){
        //Set the limit of a list to 2
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.listMenuButton).click();
        });
        cy.get(this.setListLimitButton).click();
        cy.get(this.listLimitInput).type(number);
        cy.get(this.limitSaveButton).click();

        // Verify that the limit information is now visible in the list card
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.listHeader).should('contain', '2 / 2');
        });

        //Check the current number of cards in the list
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.cardWholeList).should('have.length', '2');
        });
        cy.contains('textarea', listTitle).parent().parent()
        .should('have.css', 'background-color', 'rgb(235, 236, 240)');

        //add as card for the limit to be reached
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.addACardButton).click();
            cy.get(this.cardTitleInput).type(cardTitle);
            cy.get(this.addCardConfirmButton).click();
        });

        //Verify that if limit is reached, then column changes color
        cy.contains('textarea', listTitle).parent().parent()
        .should('have.css', 'background-color', 'rgb(250, 243, 192)');
    }

    removeLimitOfAList(listTitle){
        //Remove added limit
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.listMenuButton).click();
        });
        cy.get(this.setListLimitButton).click();
        cy.get(this.removeList).click();

        //Verify the limit is removed
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.listHeader).should('not.be.visible');
        });
    }

    addACard(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.addACardButton).click();
            cy.get(this.cardTitleInput).type(cardTitle);
            cy.get(this.addCardConfirmButton).click();
        });
    }
}           

export default new BoardPage()
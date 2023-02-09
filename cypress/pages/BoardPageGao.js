class BoardPage {
    constructor() {
        //Selectors for the board
        this.boardName = '.js-rename-board';
        this.boardEmptySpace = '#board';
        this.unstarredIcon = '.board-header-star-container .icon-star';
        this.starredIcon = "[class*='icon-starred']";
        this.starredIconSideMenuBar = '.EAuDYQ9KJljpKy';
        this.boardLists = '.U7CjW6VI55nfAg';
        //Selectors for navigation bar
        this.navigationCollapseButton = '[data-testid="workspace-navigation-collapse-button"]';
        this.navigationExpandButton = '[data-testid="workspace-navigation-expand-button"]';
        this.workspaceBoardViewLists = '[data-testid="workspace-boards-and-views-lists"]';
        //Selectors for workspace
        this.workspaceVisibilityButton = '.js-change-vis';
        this.workspaceDropDownList = '.pop-over-list';
        //Selectors for changing background color
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
        this.popupWindow = '.pop-over'
        //Selectors for editing the name of a card
        this.cardDetailWindowTitle = '.window-title';
        this.cardDetailWindowHeader = '.window-header';
        this.closeCardDetailWindow = '.js-close-window';
        //Selectors for archiving a card
        this.cardArchiveButton = '.js-archive-card';
        this.cardArchiveBanner = '[data-testid="card-back-archive-banner"]';
        //Selectors for moving a card by using Move button in the card detail window
        this.cardMoveButton = '.js-move-card';
        this.cardMovingTargetListButton = '.js-list-value';
        this.cardMovingTargetListOption = '.js-select-list';
        this.cardMivingPositionButton = '.js-pos-value';
        this.cardMovingPositionOption = '.js-select-position';
        this.cardMovingConfirmButton = '.js-submit';
        //Selector for copying a card by using Copy button in the card detail window
        this.cardCopyButton = '.js-copy-card';
        //Selectors for opening and closing a card detail window
        this.cardDetailWindow = '.card-detail-window';
        this.cardDetailWindowTitle = '.window-title';
        //Selectors for adding and removing a label
        this.labelsButton = '.js-edit-labels';
        this.labelsOptions = '[data-testid="card-label"]';
        this.closeLabelsPopupWindow = '[data-testid="popover-close"]';
        this.labelInCardDetailWindow = '[data-testid="card-label"]';
        this.labelInCardFromList = '[data-testid="compact-card-label"]';
        this.labelOptionsCheckbox = 'input[type="checkbox"]';
        //Selectors for making a card template
        this.templateConvertingButton = '.js-convert-to-template';
        this.cardConvertingButton = '.js-convert-to-card';
        this.templateCardBanner = '[data-testid="template-card-back-banner"]';
        this.templateCardBannerButton = '[data-testid="create-card-from-template-banner-button"]';
        this.templateIconFromList = '.is-template';
        //Selector for creating a card from template and editing a card template
        this.createCardFromTemplateButton = '[data-testid="create-card-from-template-button"]';
        this.templateCardTitleEditing = '.qCdjU7Pdk8GuFY';
        this.cardTitle = '.list-card-title';
        //Selectors for adding and removing description 
        this.descriptionContent = '.description-content';
        this.cardDescription = '.card-description';
        this.descriptionEditButton = '.js-edit-desc-button';
        //Selectors for adding, editing and deleting a comment
        this.writeACommentArea = '.js-new-comment-input';
        this.saveComment = '.js-add-comment';
        this.commentSection = '.js-list-actions';
        this.commentIcon = '.badge-icon';
        this.commentTotalNumber = '.badge-text';
        this.commentDeleteButton = '.js-confirm-delete-action';
        this.commentDeleteConfirmButton = '.js-confirm';
        this.commentEditButton = '.js-edit-action';
        this.commentBoxInput = '.comment-box-input';
        //Selectors for adding and removing a card member
        this.membersButton = '.js-change-card-members';
        this.memberName = '.full-name';
        this.checkedIcon = '.checked-icon';
        this.membersPopupWindow = '.pop-over';
        this.closeMembersPopupWindow = '.icon-close';
        this.memberAvatar = '.member-avatar';
        this.subscribeIcon = '.icon-subscribe';
    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }

    beforeStaringMyBoard(){
        cy.get(this.starIconBoard).should('have, attr', )
    }

    //The following functions are about the Trello board
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
    
    //The following functions are about the list 
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
        cy.get(this.popupWindow).should('be.visible');
        cy.get(this.listLimitInput).type(number);
        cy.get(this.limitSaveButton).click();

        // Verify that the limit information is now visible in the list card
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.listHeader).should('contain', '2 / 2');
        });

        //Check the current number of cards in the list
        // cy.contains('textarea', listTitle).parent().parent().within(() => {
        //     cy.get(this.cardWholeList).should('have.length', '2');
        // });
        cy.contains('textarea', listTitle).parent().parent()
        .should('have.css', 'background-color', 'rgb(235, 236, 240)');
    }

    verifyLimitIconColorChangeWhenLimitIsReached(listTitle){
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
        cy.get(this.removeLimit).click();
        
        //Verify the limit is removed
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.listHeader).should('not.be.visible');
        });
    }

    //The following functions are about cards
    addACard(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.addACardButton).click({force: true});
            cy.get(this.cardTitleInput).type(cardTitle);
            cy.get(this.addCardConfirmButton).click();
        });
    }

    editCardName(listTitle, cardTitle, cardTitle2){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click()
        });
        cy.get(this.cardDetailWindowTitle).clear().type(cardTitle2);
        cy.get(this.cardDetailWindowHeader).click();
        cy.get(this.closeCardDetailWindow).click();
    }

    archiveACard(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click({force: true});    
        });
        cy.get(this.cardArchiveButton).click()
        cy.get(this.cardArchiveBanner).should('contain', 'This card is archived.');
        cy.get(this.closeCardDetailWindow).click();
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).should('not.exist');
        });
    }

    dragAndDropACard(listTitle, cardTitle, listTitle2, cardTitle2){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).trigger('dragstart'); 
        });
        
        cy.contains('textarea', listTitle2).parent().parent().within(() => {
            cy.contains(cardTitle2).dispatchEvent(new CustomEvent('dragover', {bubbles: true}));
        });  
    }

    moveCardRightClickMouseFunctionButton(listTitle, cardTitle, listTitle2, number){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).rightclick();    
        });
        cy.get(this.cardMoveButton).click();
        cy.get(this.cardMovingTargetListButton).click({force: true});
        cy.get(this.cardMovingTargetListOption).select(listTitle2);
        cy.get(this.cardMivingPositionButton).click({force: true});
        cy.get(this.cardMovingPositionOption).select(number);
        cy.get(this.cardMovingConfirmButton).click();
        
        //Verify that the card is moved to the right position
        cy.contains('textarea', listTitle2).parent().parent().within(() => {
            cy.get(this.cardList).find('a').eq(number-1).should('have.contain', cardTitle);
        });
    }

    copyCardRightClickMouseFunctionButton(listTitle, cardTitle, cardTitle2, listTitle2, number){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).rightclick();    
        }); 
        cy.get(this.cardCopyButton).click();
        cy.contains('textarea', cardTitle).type(cardTitle2);
        cy.get(this.cardMovingTargetListButton).click({force: true});
        cy.get(this.cardMovingTargetListOption).select(listTitle2);
        cy.get(this.cardMivingPositionButton).click({force: true});
        cy.get(this.cardMovingPositionOption).select(number);
        cy.get(this.cardMovingConfirmButton).click();

        //Verify that the card is moved to the right position
        cy.contains('textarea', listTitle2).parent().parent().within(() => {
            cy.get(this.cardList).find('a').eq(number-1).should('have.contain', cardTitle2);
        });
    }

    openACardDetailPage(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();    
        });
        //Verify that the card detail page is open
        cy.get(this.cardDetailWindow).should('be.visible');
        //Verify that the correct card is open
        cy.get(this.cardDetailWindowTitle).should('contain', cardTitle);
    }

    closeACardDetailPage(){
        cy.get(this.closeCardDetailWindow).click();
        //Verify that the card detail page is closed
        cy.get(this.cardDetailWindow).should('not.exist');
    }

    addLabelToACard(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();    
        });
        cy.get(this.labelsButton).click();
        cy.get(this.labelsOptions).eq(0).click();
        cy.get(this.closeLabelsPopupWindow).click();
        
        //cy.get('[data-testid="card-label"]').should('have.data-color', 'green').click();
        //cy.contains('data-color', 'green')

        //verify that the label is successfully added to the card detail window
        cy.get(this.cardDetailWindow).scrollIntoView();
        cy.get(this.labelInCardDetailWindow).should('be.visible');
        //.should('have.data-color', 'green');

        //verify that the label is also visibel in the list
        cy.get(this.closeCardDetailWindow).click();
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).within(() => {
                cy.get(this.labelInCardFromList).should('be.visible');
                cy.get(this.labelInCardFromList)
                .should('have.css','background-color', 'rgb(123, 200, 108)');
            });
        });   
    }

    removeLabelOfACard(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();    
        });
        cy.get(this.labelsButton).click();
        cy.get(this.labelOptionsCheckbox).eq(0).uncheck({force: true});
        cy.get(this.closeLabelsPopupWindow).click();
        cy.get(this.closeCardDetailWindow).click();
    }

    makeACardTemplate(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();    
        });
        cy.get(this.templateConvertingButton).should('contain', 'Make template');
        cy.get(this.templateConvertingButton).click({force: true});

        //Verify that the card is successfully made a card
        cy.get(this.templateCardBanner).should('be.visible')
        .should('contain', 'This is a Template card.');
        cy.get(this.templateCardBannerButton).should('be.visible')
        .should('contain', 'Create card from template');
        cy.get(this.cardConvertingButton).scrollIntoView()
        .should('be.visible').should('contain', 'Template');
        cy.get(this.closeCardDetailWindow).click();
        //Verify that the card template is visible in the list
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).within(() => { 
                cy.get(this.templateIconFromList).should('be.visible')
                .should('contain', 'This card is a template.');
            });
        });
    }

    createACardFromTemplate(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).within(() => { 
                cy.get(this.templateIconFromList).should('be.visible')
                .should('contain', 'This card is a template.');
                cy.get(this.templateIconFromList).click();
            });
        });
        cy.get(this.templateCardBannerButton).click();
        cy.get(this.createCardFromTemplateButton).click();

        //Verify that a new card is created from the template
        cy.get(this.cardDetailWindow).should('be.visible');
        cy.get(this.cardDetailWindowTitle).should('have.text', cardTitle);
        //Verify the card deatil window is not the template card detail window
        cy.get(this.cardDetailWindow).scrollIntoView();
        cy.get(this.cardConvertingButton).should('not.exist');
        cy.get(this.templateCardBanner).should('not.exist');
        cy.get(this.templateCardBannerButton).should('not.exist');
        cy.get(this.closeCardDetailWindow).click();
        //Verify that there two cards with the same name displayed in the list
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.get(this.cardList).find(this.cardTitle).should('have.length', 2);
        });
    }

    editATemplateAndCreateACard(listTitle, cardTitle, cardTitle2){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).within(() => { 
                cy.get(this.templateIconFromList).should('be.visible')
                .should('contain', 'This card is a template.');
                cy.get(this.templateIconFromList).click();
            });
        });
        cy.get(this.templateCardBannerButton).click();
        cy.get(this.templateCardTitleEditing).clear().type(cardTitle2);
        cy.get(this.createCardFromTemplateButton).click();

        //Verify that a new card is created from the template
        cy.get(this.cardDetailWindow).should('be.visible');
        cy.get(this.cardDetailWindow).should('not.have.text', cardTitle);
        cy.get(this.cardDetailWindowTitle).should('contain', cardTitle2);
        cy.get(this.closeCardDetailWindow).click();
        //Verify that this newly created card is also visible in the list
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle2).should('be.visible');
        });
    }

    removeATemplate(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).within(() => { 
                cy.get(this.templateIconFromList).should('be.visible')
                .should('contain', 'This card is a template.');
                cy.get(this.templateIconFromList).click();
            });
        });
        cy.get(this.cardDetailWindow).scrollIntoView();
        cy.get(this.cardConvertingButton).click();
        //Verify that the card is not a template anymore
        cy.get(this.cardConvertingButton).should('not.exist');
        cy.get(this.templateConvertingButton).should('be.visible').should('contain', 'Make template');
        cy.get(this.cardDetailWindow).scrollIntoView();
        cy.get(this.templateCardBanner).should('not.exist');
        cy.get(this.templateCardBannerButton).should('not.exist');
        cy.get(this.closeCardDetailWindow).click();
        //Verify that the card template is not visible in the list
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).within(() => { 
                cy.get(this.templateIconFromList).should('not.exist');
            });
        });
    }

    addDescriptionToACard(listTitle, cardTitle, description){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();
        });
        cy.get(this.descriptionContent).click();
        cy.get(this.cardDescription).type(description);
        cy.get(this.cardDetailWindow).click();
        cy.get(this.closeCardDetailWindow).click();
    }

    removeDescriptionOfACard(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();    
        });
        cy.get(this.descriptionEditButton).click();
        cy.get(this.descriptionContent).find('textarea').clear();
        cy.get(this.cardDetailWindow).click();
        cy.get(this.closeCardDetailWindow).click();
    }

    addAComment(listTitle, cardTitle, comment){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();    
        });
        cy.get(this.writeACommentArea).click().type(comment);
        cy.get(this.saveComment).click();
        //Verify a comment is successfully added
        cy.get(this.commentSection).should('contain', comment);
        cy.get(this.closeCardDetailWindow).click();
        //Verify the comment icon is displayed on this card in the list
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).within(() => {
                cy.get(this.commentIcon).should('be.visible');
                cy.get(this.commentTotalNumber).should('have.text', '1');
            });
        });
    }

    editAComment(listTitle, cardTitle, comment, comment2){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();    
        });
        
        cy.contains('textarea', comment).parent().parent().parent().parent().parent().within(() => {
            cy.get(this.commentEditButton).click();
            cy.get(this.commentBoxInput).type(comment2);
            cy.get(this.saveListButton).click();
        });
        cy.get(this.closeCardDetailWindow).click();

        //Verify a comment is successfully edited
        cy.get(this.commentSection).should('contain', comment2);
        cy.get(this.closeCardDetailWindow).click();
        //Verify the comment icon is still displayed on this card in the list
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).within(() => {
                cy.get(this.commentIcon).should('be.visible');
            });
        });
        
    }

    deleteAComment(listTitle, cardTitle, comment){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();    
        });
        cy.get(this.commentDeleteButton).click();
        cy.get(this.commentDeleteConfirmButton).click();

        //Verify the comment is deleted successfully
        cy.get(this.commentSection).contains(comment).should('not.exist');
        cy.get(this.closeCardDetailWindow).click();
        //Verify the comment icon is not displayed on this card in the list
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).within(() => {
                cy.get(this.commentIcon).should('not.exist');
                cy.get(this.commentTotalNumber).should('not.exist');
            });
        });
    }

    addCardMember(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();    
        });
        cy.get(this.membersButton).click();
        cy.get(this.memberName).click();
        cy.get(this.checkedIcon).should('be.visible');
        cy.get(this.membersPopupWindow).within(() => {
            cy.get( this.closeMembersPopupWindow).click();
        });
        
        //Verify the member avatar is displayed in the card detail window
        cy.get(this.cardDetailWindow).within(() => {
            cy.get(this.memberAvatar).should('be.visible');
        });
        cy.get(this.closeCardDetailWindow).click();
        //Verify the member avatar is displayed in the card in the list
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).within(() => {  
                cy.get(this.memberAvatar).should('be.visible');
                cy.get(this.subscribeIcon).should('be.visible');
            });
        });
    }

    removeCardMember(listTitle, cardTitle){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();    
        });
        cy.get(this.membersButton).click();
        cy.get(this.memberName).click();
        cy.get(this.checkedIcon).should('not.be.visible');
        cy.get(this.membersPopupWindow).within(() => {
            cy.get(this.closeMembersPopupWindow).click();
        });
        //Verify the member avatar is not displayed in the card detail window
        cy.get(this.cardDetailWindow).within(() => {
            cy.get(this.memberAvatar).should('not.exist');
        });
        cy.get(this.closeCardDetailWindow).click();
        //Verify the member avatar is displayed in the card in the list
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).within(() => {  
                cy.get(this.memberAvatar).should('not.exist');
                cy.get(this.subscribeIcon).should('not.exist');
            });
        });
    }

    moveACardUsingMoveButtonFromDetailWindow(listTitle, cardTitle, listTitle2, number){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click();    
        });
        cy.get(this.cardMoveButton).click()
        cy.get(this.cardMovingTargetListButton).click({force: true});
        cy.get(this.cardMovingTargetListOption).select(listTitle2);
        cy.get(this.cardMivingPositionButton).click({force: true});
        cy.get(this.cardMovingPositionOption).select(number);
        cy.get(this.cardMovingConfirmButton).click();
        cy.get(this.closeCardDetailWindow).click();

        //Verify that the card is moved to the right position
        cy.contains('textarea', listTitle2).parent().parent().within(() => {
            cy.get(this.cardList).find('a').eq(number-1).should('contain', cardTitle);
        });
    }

    copyACardUsingCopyButtonFromDetailWindow(listTitle, cardTitle, cardTitle2, listTitle2, number){
        cy.contains('textarea', listTitle).parent().parent().within(() => {
            cy.contains(cardTitle).click(); 
        });
        cy.get(this.cardCopyButton).click();
        cy.contains('textarea', cardTitle).type(cardTitle2);
        cy.get(this.cardMovingTargetListButton).click({force: true});
        cy.get(this.cardMovingTargetListOption).select(listTitle2);
        cy.get(this.cardMivingPositionButton).click({force: true});
        cy.get(this.cardMovingPositionOption).select(number);
        cy.get(this.cardMovingConfirmButton).click();
        cy.get(this.closeCardDetailWindow).click();
        
        //Verify that the card is moved to the right position
        cy.contains('textarea', listTitle2).parent().parent().within(() => {
            cy.get(this.cardList).find('a').eq(number-1).should('contain', cardTitle2);
        });
    }
}           

export default new BoardPage()
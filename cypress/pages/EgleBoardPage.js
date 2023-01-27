
class BoardPage {
    constructor() {
      this.addNewListButton = '.placeholder';
      this.listNameInput = '.list-name-input';
      this.boardEmptySpace = '#board';
      this.list4AddButton = ':nth-child(4) > .list > .card-composer-container > .open-card-composer';
      this.cardTextArea = '.list-card-composer-textarea';
      this.fourthList = '#board > :nth-child(4)'
      this.listMenuButton = '.list-header-extras-menu';
      this.sortCardByButton = '.js-sort-cards';
      this.sortCardByNameButton = '.js-sort-by-card-name';
      this.sortingSuccessModal = '.rITN5tmguRbI3Z';
      this.fourthListCardList = ':nth-child(4) > .list > .list-cards';
      this.sortCardByDateOldest = '.js-sort-oldest-first';
      this.sortCardByDateNewest = '.js-sort-newest-first';
      this.cardTitleList = '.list-card-title';
      this.fourthListName = ':nth-child(4) > .list > .list-header > .list-header-target'
      this.fourthListNameInput = 'list-header-name mod-list-name js-list-name-input'
      this.fourthListTab = '[style=""] > .list > .list-header > .list-header-target'
      this.archiveButton = '.js-close-list';
      this.listHeader = '.list-header-target';
      this.boardCanvas = '.board-canvas';
      this.copyListButton = '.js-copy-list';
      this.listAddName = '.js-autofocus';
    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }
    
    createNewList(name){
        cy.get(this.addNewListButton).click();
        //cy.get(this.listNameInput).type(name).type ('{enter}');
        cy.get(this.listNameInput).type(name + '{enter}');
        cy.get(this.boardEmptySpace).click();
        cy.get(this.boardEmptySpace).contains(name);
    }

    addNewCardIntoList1(cardname1){
        cy.get(this.list4AddButton).click();
        cy.get(this.cardTextArea).type(cardname1 + '{enter}');
        cy.get(this.fourthList).should('contain', cardname1);
        cy.get(this.boardEmptySpace).click();
    }
    
    addNewCardIntoList2(cardname2){
        cy.get(this.list4AddButton).click();
        cy.get(this.cardTextArea).type(cardname2 + '{enter}');
        cy.get(this.fourthList).should('contain', cardname2);
        cy.get(this.boardEmptySpace).click();
    }
    
    addNewCardIntoList3(cardname3){
        cy.get(this.list4AddButton).click();
        cy.get(this.cardTextArea).type(cardname3 + '{enter}');
        cy.get(this.fourthList).should('contain', cardname3);
        cy.get(this.boardEmptySpace).click();
    }

    sortCardsAlphabetically(cardname1, cardname2, cardname3){
        cy.get(this.listMenuButton).last().click();
        cy.get(this.sortCardByButton).click();
        cy.get(this.sortCardByNameButton).click();
        cy.get(this.sortingSuccessModal).contains('Successfully sorted list').should('be.visible');
        cy.get(this.cardTitleList).eq(0).should('contain', cardname1);
        cy.get(this.cardTitleList).eq(1).should('contain', cardname3);
        cy.get(this.cardTitleList).eq(2).should('contain', cardname2);
 
    }

    sortCardsByNewestDate(cardname1, cardname2, cardname3){
        cy.get(this.listMenuButton).last().click();
        cy.get(this.sortCardByButton).click();
        cy.get(this.sortCardByDateNewest).click();
        cy.get(this.sortingSuccessModal).contains('Successfully sorted list').should('be.visible');
        cy.get(this.cardTitleList).eq(0).should('contain', cardname3);
        cy.get(this.cardTitleList).eq(1).should('contain', cardname2);
        cy.get(this.cardTitleList).eq(2).should('contain', cardname1);
    }

    sortCardsByOldestDate(cardname1, cardname2, cardname3){
        cy.get(this.listMenuButton).last().click();
        cy.get(this.sortCardByButton).click();
        cy.get(this.sortCardByDateOldest).click();
        cy.get(this.sortingSuccessModal).contains('Successfully sorted list').should('be.visible');
        cy.get(this.cardTitleList).eq(0).should('contain', cardname1);
        cy.get(this.cardTitleList).eq(1).should('contain', cardname2);
        cy.get(this.cardTitleList).eq(2).should('contain', cardname3);
    }

    renameList(listName){
        cy.get(this.fourthListName).type(listName + '{enter}');
        cy.get(this.boardEmptySpace).click();
        cy.get(this.fourthList).should('contain', listName);
    }

    changeListPosition(){
        //cy.get(this.fourthList)
    }

    archiveList(listName){
        cy.get(this.listMenuButton).last().click();
        cy.get(this.archiveButton).click();
        cy.get(this.boardCanvas).should('not.contain', listName);
    }
    
    copyList(listName){
        cy.get(this.listMenuButton).last().click();
        cy.get(this.copyListButton).type(listName + '{enter}');
        cy.get(this.boardCanvas).should('contain', listName);
    }

}

export default new BoardPage()
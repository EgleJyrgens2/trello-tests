class BoardPage {
    constructor() {
      this.addNewListButton = '.placeholder';
      this.listNameInput = '.list-name-input';
      this.boardEmptySpace = '#board';
    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }
    
    createNewList(name){
        cy.get(this.addNewListButton).click();
        cy.get(this.listNameInput).type(name);
        cy.get(this.boardEmptySpace).contains(name);
    }
    
}

export default new BoardPage()
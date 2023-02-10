class Boards {
    constructor() {
        this.boardsMainTitle = 'Most popular templates';
        this.addBoardButton = '.FwTZlPFZOdDHDe';
        this.newBoardTitle = '[data-testid="create-board-title-input"]';
        this.createBoardSubmitButton = '[data-testid="create-board-submit-button"]';
    }

    openBoardByName(name) {
        cy.contains(name).click();
        cy.get('h1').contains(name).should('be.visible');
    }

    boardsViewShouldBeVisible() {
        cy.get('.spinner').should('not.exist');
        cy.url().should('include', '/boards');
        cy.contains(this.boardsMainTitle).should('be.visible');
    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }
    createKanBanBoard(newBoardName) {
        cy.get(this.addBoardButton).click();
        cy.get(this.newBoardTitle).type(newBoardName + '{enter}');
        cy.get(this.createBoardSubmitButton).click();
    }

    setLimitToList

}

export default new Boards()
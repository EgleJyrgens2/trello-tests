class BoardPage {
    constructor() {

    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }
}

export default new BoardPage()
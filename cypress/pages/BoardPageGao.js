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
}           

export default new BoardPage()
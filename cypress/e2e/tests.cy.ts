
describe('Home page', () => {
  it('Check links', () => {
    cy.fixture("links.json").then(({homePageLinkUrls, homePageLinks}) => {
      homePageLinkUrls.forEach(($link: string) => {
          cy.log(`Testing: ${$link}`)
          cy.request({url: $link, failOnStatusCode: false}).then((response) => {         
            expect(response.status).to.eq(200);
          });
      });
      cy.visit("/");
      homePageLinks.forEach((link: string) => {
        cy.get(`[data-test='${link}']`).should("have.attr", "href");
      });
    });   
  });
});

describe.skip('Contact page', () => {
  it('Testing contact form', () => { 
    cy.visit("/contact");
    cy.intercept("api/contact").as("contact");
    cy.get("#first_name").type("Kevin");
    cy.get("#last_name").type("Bacon");
    cy.get("#email").type("kevin@bacon.com");
    cy.get("#message").type("My message for you.")
    //cy.wait(2000)
    cy.get("[type='submit']").click();
    cy.wait("@contact");
    cy.contains("Thank you, Kevin. We have received your message!").should("be.visible");
  });
});

describe('Eshop', () => {
  it('Testing adding item to cart', () => {
    cy.intercept("/api/auth/session").as("session");
    cy.visit("/eshop");
    cy.contains("Wooden cuppery").should("be.visible");
    cy.wait("@session"); 
    cy.contains("Add").click();
    cy.get(".counter").should("have.text", "1");  
  });
});
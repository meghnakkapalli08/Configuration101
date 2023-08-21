describe("Automation using Cypress", () => {
  it("Open website and enter username, password", () => {
    cy.visit(
      "https://automationteststore.com/"
    );
  });

class loginPage {

  // Action Method to visit the home page of the Website
  visitHome() {
      cy.visit("https://automationteststore.com/")
  }

  // Action method to move to login page
  moveToLogin() {
      const lnk = cy.contains('Login')
      lnk.click()
      return this
  }

  // Action Method to fill username
  fillUsername(value) {
      const field = cy.get('#loginFrm_loginname')
      field.clear()
      field.type(value)
      return this
  }

  // Action Method to fill password
  fillPassword(value) {
      const field = cy.get('#loginFrm_password')
      field.clear()
      field.type(value)
      return this
  }

  // Action Method to click on Login
  login() {
      const btn = cy.get('button[title="Login"]')
      btn.click()
      return this
  }
}

export default loginPage
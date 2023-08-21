describe ('Test Suite', function() {
{
  it('Valid Login Test', function() {
    // Creating object for the class loginPage
    const lp = new loginPage()

    lp.visitHome()
    lp.moveToLogin()
    lp.fillUsername('project12345')
    lp.fillPassword('project12345')
    lp.login()

    // Assertion to verify that we logged in successfully
    cy.title().should('be.equal', 'My Account')

  }

  it('Category Selection Test', function() {

    const cs = new categorySelection()
    cy.xpath('//nav[@class="productSelection').click()
    cs.assertCategory('Men')
})


  it('Checkout Test', function() {

      const co = new checkout()
      const lp = new loginPage()

      co.clickCheckout()
      lp.fillUsername('project12345')
      lp.fillPassword('project12345')
      lp.login()
      co.assertCheckoutConfirmation('Checkout Confirmation')
      co.confirmOrder()
      co.confirmationMessage()
      co.continueClick()
  })
})
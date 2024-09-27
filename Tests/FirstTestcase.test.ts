import { Selector, t } from "testcafe";
import HomePage from "../Pages/HomePage";
import UrlPage from "../Utils/UrlPage";
import ProductPage from "../Pages/ProductPage";


fixture('Testing Home Page')
  .page(UrlPage.getPageUrl())
  .afterEach(async (t) => {
    const { error, log } = await t.getBrowserConsoleMessages();
    if (!t.ctx.passed) {
      // console.log('\n' + 'Errors in cosole log' + error + '\n',);
    }
  });


//HomePageTest
ValidateHomePageFunctionality();

function ValidateHomePageFunctionality(): any {
  test('Validate Home page functionality', async (t) => {
   await t.maximizeWindow();
   await HomePage.clickOnMobileLink();
   await ProductPage.ClickOnFirstProduct();
   await ProductPage.ClickOnAddToCartButton();
   await ProductPage.ValidateCartCount();
   t.ctx.passed=true;
  });
}
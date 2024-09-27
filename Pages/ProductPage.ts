import { Selector, t } from "testcafe";

export default class ProductPage {
    static laptopAndAccLink: Selector =  Selector('span').withText('Laptops & Accessories');
    static  BudgetLaptopCategoryLink: Selector = Selector('a').withExactText('Budget laptops');
    static firstProductlink: Selector =  Selector('[data-cy="image-container"]').nth(1);
    static addToCartButton: Selector = Selector('button').withText('Add to cart').nth(1);
    static cartCountSelector: Selector = Selector('#nav-cart-count');


    public static async ClickOnFirstProduct(): Promise<void> {
        await t.expect(this.laptopAndAccLink.exists).ok({timeout: 10000});
        await t.hover(this.laptopAndAccLink);
        await t.click(this.BudgetLaptopCategoryLink);
        await t.expect(this.firstProductlink.exists).ok({timeout: 10000});        
    }

    public static async ClickOnAddToCartButton(): Promise<void> {
        await t.expect(this.addToCartButton.exists).ok({timeout: 10000});
        await t.click(this.addToCartButton);
    }

    public static async ValidateCartCount(): Promise<void>{
        await t.expect(await this.cartCountSelector.innerText).eql('1');
    }


}
import { Selector, t } from 'testcafe';

export default class HomePage {
    static ButtonSelector: Selector = Selector('[data-csa-c-content-id="nav_cs_mobiles"]')

    public static async clickOnButton(): Promise<any> {
        await t.click(this.ButtonSelector)
    }
}
import { Selector, t } from 'testcafe';

export default class HomePage {
    static mobileLinkSelector: Selector = Selector('[data-csa-c-content-id="nav_cs_mobiles"]');
    
    public static async clickOnMobileLink(): Promise<any> {
        await t.doubleClick(this.mobileLinkSelector)
    }
}
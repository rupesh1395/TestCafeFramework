export default class UrlPage {
    static baseUrl: string = 'https://www.amazon.in/';

    public static getPageUrl(): string {
        return this.baseUrl;
    }

}
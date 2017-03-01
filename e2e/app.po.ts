import { browser, element, by } from 'protractor';

export class SceptrePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sp-root h1')).getText();
  }
}

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
var expect = require('chai').expect;

describe('Selenium Test - User Story', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('IP Read Test - User Story', async function() {
    this.test.myfield = {
      extra:'extra info',
      num: 12.5
      };
    this.test.attachments = ['/absolut/path/to/file.png'];
    await driver.get("http://checkip.dyndns.org/");
    await driver.manage().window().setRect({ width: 1304, height: 739 });

    const body = await driver.findElement(By.tagName("body"));
    const body_str = await body.getText()
    expect(body_str).to.be.a('string').and.satisfy(msg => msg.startsWith('Current IP Address: '));

  })
})
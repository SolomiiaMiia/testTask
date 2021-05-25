const { Builder, By, WebDriver, } = require("selenium-webdriver");
const test = require('selenium-webdriver/testing');
const web = WebDriver;

// 1 open page
const driver = new Builder().forBrowser('chrome').build();
driver.get('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');

// 3 
// fill input
function FillInput() {
  let search = driver.findElement({ css: '[name="username"]' }).sendKeys("Elon Musk");
  let searchBtn = driver.findElement({ css: '[name="password"]' }).sendKeys("12345");

}

FillInput()


// click the button login through 3500
function clickDtn() {
  driver.findElement({ css: '[type="submit"]' }).click();
}
setTimeout(clickDtn, 3500);


// 4 search element input of the pages
function searchEllements() {
  driver.findElements(By.css('input'));
  driver.findElement(By.css('.btn btn-success'));
}
searchEllements();


// driver.quit();

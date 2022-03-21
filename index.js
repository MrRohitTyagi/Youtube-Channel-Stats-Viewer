const Link = "https://socialblade.com/";
const puppeteer = require("puppeteer");
const input = require('readline-sync');
const fs = require('fs');

(async function () {

try {
    let browserWillLaunch = await puppeteer.launch({
        headless: false,
        args: ["--start-maximized"],
        defaultViewport: null,
      });
  
      let page = await browserWillLaunch.newPage();
      await page.goto(Link);

      // await page.click('input[name="query"]')

      let searchinp = input.question()
      await page.type('#SearchInput',searchinp,{delay :50});

      await page.click('button[type="submit"]')

      await page.waitFor(3000);

      await page.waitForSelector('.YouTubeUserTopLight')
      
      let value = await page.evaluate(() => Array.from(document.querySelectorAll('.YouTubeUserTopLight'), element => element.textContent));
      console.log(value);

      fs.appendFileSync('new.txt',value[0] + ':-');

      let uploads = await page.evaluate( () => document.querySelector('#youtube-stats-header-uploads').textContent)
      console.log(uploads);

      fs.appendFileSync('new.txt',uploads +`

      `);
      /////////////////////////

      fs.appendFileSync('new.txt',value[1] + ':-');

      let suscribers = await page.evaluate( () => document.querySelector('#youtube-stats-header-subs').textContent)
      console.log(suscribers);

      fs.appendFileSync('new.txt',suscribers +`

      `);

      /////////////////////////////

      fs.appendFileSync('new.txt',value[2] + ':-');

      let VideosViews = await page.evaluate( () => document.querySelector('#youtube-stats-header-views').textContent)
      console.log(VideosViews);

      fs.appendFileSync('new.txt',VideosViews +`

      `);

      //////////////////////////
      fs.appendFileSync('new.txt',value[3] + ':-');

      let country = await page.evaluate( () => document.querySelector('#youtube-user-page-country').textContent)
      console.log(country);

      fs.appendFileSync('new.txt',country +`

      `);

      ////////////////////

      fs.appendFileSync('new.txt',value[4] + ':-');

      let channelType = await page.evaluate( () => document.querySelector('#youtube-user-page-channeltype').textContent)
      console.log(channelType);

      fs.appendFileSync('new.txt',channelType +`

      `);

      //////////////
      fs.appendFileSync('new.txt',value[5] + ':-');

      let UserCreated = await page.evaluate(() => Array.from(document.querySelectorAll('span[style="font-weight: bold;"]'), element => element.textContent));
      
      fs.appendFileSync('new.txt',UserCreated[5] +`

      `);

      ///////////------------------------//////////////////

    }

      
catch (error) {
    console.log(error);
}
    
      

})();

async function waitandclick(selector, cPage) {
    try {
      await cPage.waitForSelector(selector)
      await cPage.click(selector, {delay: 50
      })
  
    } catch (error) {
      console.log(error);
    }
  
  }



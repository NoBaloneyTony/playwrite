const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();
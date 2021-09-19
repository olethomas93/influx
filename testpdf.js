const puppeteer = require('puppeteer')
var fs = require('fs');

(async () => {
  // launch a new chrome instance
  const browser = await puppeteer.launch({
    headless: false
  })

  // create a new page
  const page = await browser.newPage()
  // await page.goto('http://www.ferjekai.no', {
  //   waitUntil: 'networkidle2',
  // });
  // set your html as the pages content
  const html = fs.readFileSync(`${__dirname}/test.html`, 'utf8')
  await page.setContent(html, {
    waitUntil: 'domcontentloaded'
  })

  // create a pdf buffer
  const pdfBuffer = await page.pdf({
    format: 'A4'
  })

  // or a .pdf file
  await page.pdf({
    format: 'A4',
    path: `${__dirname}/my-fance-invoice.pdf`
  })

  // close the browser
  await browser.close()
})();
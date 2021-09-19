'use strict';

const express = require('express');
const puppeteer = require('puppeteer')
const EmailController = require('./EmailController')
const app = express();
app.use(express.static(`${__dirname}/my-app/build`))

app.get('/', async (req, res, next) => {
//   const {html, ttRenderMs} = await ssr(`${req.protocol}://${req.get('host')}/index.html`);
//   // Add Server-Timing! See https://w3c.github.io/server-timing/.
//   res.set('Server-Timing', `Prerender;dur=${ttRenderMs};desc="Headless render time (ms)"`);
  return res.send("hello"); // Serve prerendered page as response.
});


app.get('/pdf',async(req,res,next)=>{

    const url = req.query.target;

    const browser = await puppeteer.launch({
        headless: true
    });
   
    const webPage = await browser.newPage();
    await webPage.setViewport({width:1745,height:771,deviceScaleFactor:1});
    await webPage.goto(url, {
        waitUntil: "networkidle0"
    });
    
    const pdf = await webPage.pdf({
        landscape:true,
        width: 1920,
        height:1080,
    });

    await browser.close();

    EmailController.sendEmail(req,res,pdf)
    // res.contentType("application/pdf");
    // res.send(pdf);





})

app.listen(8080, () => console.log('Server started. Press Ctrl+C to quit'));
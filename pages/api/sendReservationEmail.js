require('dotenv').config();
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');

module.exports = async (req, res) => {
  let { language, email } = req.body;
  let template;
  let html;

  if (language) {
    const data = await fetch(
      `http://localhost:3000/email/index-${language}.hbs`
    );
    let templateHtml = await data.text();
    console.log(templateHtml);
    template = handlebars.compile(templateHtml);
    html = template(req.body);
  }

  let pdfFile;

  var options = {
    format: 'A4',
    headerTemplate: '<p></p>',
    footerTemplate: '<p></p>',
    displayHeaderFooter: false,
    printBackground: true,
  };

  const browser = await puppeteer.launch({
    args: [],
    executablePath:
      process.platform === 'win32'
        ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
        : process.platform === 'linux'
        ? '/usr/bin/google-chrome'
        : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    ignoreHTTPSErrors: true,
  });

  var page = await browser.newPage();

  await page.goto(`data:text/html;charset=UTF-8,${html}`, {
    waitUntil: 'networkidle0',
  });

  pdfFile = await page.pdf(options);
  await browser.close();

  const transporter = nodemailer.createTransport({
    host: 'smtp.carbooking.me',
    port: 587,
    secure: false,
    ignoreTLS: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const mailOption = {
    from: ` "Car Booking Montenegro" <${process.env.NEXT_PUBLIC_EMAIL}>`,
    to: `${email}; stevanzecevic3@gmail.com; ${process.env.NEXT_PUBLIC_EMAIL}`,
    subject:
      language === 'en'
        ? 'Reservation confirmation email'
        : 'Potvrda rezervacije',
    html,
    attachments: [
      {
        filename: language === 'en' ? 'Invoice.pdf' : 'Racun.pdf',
        content: pdfFile.toString('base64'),
        encoding: 'base64',
      },
    ],
  };

  const emailResponse = await transporter.sendMail(mailOption);

  return res.json({ status: 'success' });
};

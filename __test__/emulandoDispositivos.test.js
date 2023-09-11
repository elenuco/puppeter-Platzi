const puppeteer = require('puppeteer');

describe('Emulando dispositivos', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('https://platzi.com/', {
      waitUntil: 'networkidle2',
    });
  });

  afterEach(() => {
    page = '';
  });

  it('Emulando dispositivos de forma manual', async () => {
    await page.emulate({
        name:'Mi Dispositivo',
        viewport:{
            with: 375,
            height:667,
            deviceScaleFactor:2,
            isMobile:true,
            hasTouch:true,
            isLandscape:true
        },
        userAgent:'Mozilla/5.0(Windows NT 10.0; WOW54) AppleWebKit/537.36 (KHTML, like Geko) Chrome/60.0.3440.75 Safari/357.36',
    })
    await page.waitforTimeOut(3000)
  }, 350000);

  it('Emulando sitio de escritorio', async () => {
    await page.setViewport({
        with:1280,
        height: 800,
    })
    await page.waitforTimeOut(3000)
  }, 350000); 
});
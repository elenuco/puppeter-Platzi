const puppeteer = require('puppeteer');

describe('Extraer informacion', () => {
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

  it('Extraer el contenido del titulo y url', async () => {
    const title = await page.title();
    const url = await page.url();
    expect(title).toBe('No importa el reto, prepárate en Platzi');
    expect(url).toBe('https://platzi.com/');
  }, 5000);

  it('Extraer informacion del selector - forma 1', async () => {
    const selector = await page.waitForSelector('#cms-landings > section > section.Hero > div > p.Hero-content-subtitle');
    const button = await page.evaluate((name) => name.textContent, selector);
    console.log(button);
    expect(button).toBe('La plataforma de aprendizaje en línea donde puedes desarrollar tus habilidades y adaptarte al futuro profesional.');
  }, 5000);

  it('Extraer informacion del selector - forma 2', async () => {
    await page.waitForSelector('#cms-landings > section > section.Hero > div > p.Hero-content-subtitle');
    const button = await page.$eval('#cms-landings > section > section.Hero > div > p.Hero-content-subtitle', (button) => button.textContent);
    console.log(button);
    expect(button).toBe('La plataforma de aprendizaje en línea donde puedes desarrollar tus habilidades y adaptarte al futuro profesional.');
  }, 5000);

  it('Constar elementos de una pagina', async () => {
    // $$eval es un query selector all - trae varios elementos (Array)
    // ¢eval es un query selector - trae el primer elemento
    const elementos = await page.$$eval('img', (imagenes) => imagenes.length);
    expect(elementos).toBe(18);
  }, 5000)
});
const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {
	it('Debe abrir y cerrar el navegador', async () => {
		const browser = await puppeteer.launch({
			headless: false,
            defaultViewport: null,
		});
		const page = await browser.newPage();
		await page.goto('https://yahoo.com');
		await page.waitForTimeout(5000);
        await page.waitForSeletor('img');
        //recarga la pagina
        await page.reload();
        await page.waitForSeletor('img');
        //Navegar a otro sitio
        await page.goto('https://platzi.com');
        await page.waitForSeletor('img');
		await page.waitForSeletor('#home-public > div > div.BaseLayout > header > nav > div.Logo > div > a > div > figure:nth-child(1) > img');
		//ir hacia atras y adelante
        await page.goBack()
        await page.goForward()
        //abrir otra pagina en otra pestaña
        const page2 = await browser.newPage()
        await page2.goto('url')
        await page2.waitForTimeout(2000)
		await browser.close();
	}, 30000);
});
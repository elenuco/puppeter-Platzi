const puppeteer= require('puppeteer')
describe('Interactuando con elemento', async()=>{

    it('Debe de abrir y cerrar navegador', async()=>{
        const browser= await puppeteer.launch({
            headless:false,
            defaultViewport:null
        })
        const page= await browser.newPage()
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
        page.on('dialog', async()=>{
            await dialog.accept()
        })
    })
})
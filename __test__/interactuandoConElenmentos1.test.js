const puppeteer= require('puppeteer')
describe('Interactuando con elemento', async()=>{

    it('Debe de abrir y cerrar navegador', async()=>{
        const browser= await puppeteer.launch({
            headless:false,
            defaultViewport:null
        })
        const page= await browser.newPage()
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
        page.on('dialog', (dialog)=>{
            await puppeteer.Dialog.accept()
        })
        //click derecho
        await page.click('#authentication > span', {button:'right', delay:500})
        await page.waitForTimeout(3000)
        //Double Click
        await page.click('#authentication > button', {clickCount:2, delay:500})
        await page.goto('https://devexpress.github.io/testcafe/example')
        await page.type('#developer-name', 'Javier', {delay:100})
        await page.click('#remote-testing')
        await page.click('#tried-test-cafe')
        await page.click('#comments', 'Esto es un comentario')
        await page.click('#submit-button')
        await page.waitForTimeout(3000)
        await browser.close()
    })
})
const puppeteer= require('puppeteer')
describe('Tipos de espera', async()=>{

    it('Mostrar todos los diferentes tipos de espera', async()=>{
        const browser= await puppeteer.launch({
            headless:false,
            defaultViewport:null
        })
        const page= await browser.newPage()
        await page.goto('https://Platzi.com', {waitUntil: 'networkidle2'})
        //espera explicita
        //await page.waitForTimeout(5000)
        //Espera por un css selector
        //await page.waitForSeletor('#home-public > div > div.BaseLayout > header > nav > div.Logo > div > a > div > figure:nth-child(1) > img')
        //Espera por un path
        await page.waitForXPath('//*[@id="Header-v2"]/nav/div[1]/div/a/div/figure[2]')
        await page.goto('https://demoqa.com/modal-dialogs')
        //const button=await page.waitForSelector('#showSmallModal',{visible: true})
        const button=await page.waitForXPath('//*[@id="showSmallModal"]',{visible: true})
        await page.click()
        //espera  por funcion
        await page.waitForFunction(()=>document.querySelector('#example-modal-sizes-title-sm')..innerText === 'Small Modal')
        await browser.close()
        //Ejemplo para observar el Viewport
        const observeResize=await page.waitForFunction('window.innerWidth<100')
        await page.setViewport({width:50, height:50})  
        await observeResize
        await page.click('#closeSmallModal')
        await page.waitForFunction(()=> !document.querySelector('#example-modal-sizes-title-sm'))

        await browser.close()
        
    },35000)
    
})
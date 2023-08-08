const puppeteer = require('puppeteer')

describe('Interactuando con elemntos', () => {

    it('Debe abrir', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            //  slowMo: 0,
            // devtools:false,
            defaultViewport: null//expanda al tam de la ventana
            // defaultViewport: {
            //     width:2100,
            //     height:1080
            // }

        })

        const page = await browser.newPage()
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

        //Con esta instruccion le damos aceptar a los alerts que nos salgan en la pagina
        page.on('dialog', async (dialog) => {
            await dialog.accept()

        })

        //click derecho
        // await page.click('#authentication > span', { button: 'right', delay:500})
        // await page.waitForTimeout(3000)

        //Doble click

        await page.click('#authentication > button', { clickCount: 2, delay: 500 })


        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name', 'Monica Evelyn', { delay: 100 })
        await page.click('#windows')

        await page.click('#remote-testing')
        //await page.select(’#id-select-element’, ‘value’) --> PARA SELECCIONAR DE UNA LISTA DESPLEGABLE
        await page.select('#preferred-interface', 'JavaScript API')

        await page.click('#tried-test-cafe')

        await page.type('#comments', 'Test para formulario realizado en Puppeteer como prueba e2e', { delay: 100 })
        await page.click('#submit-button')


        await new Promise(r => setTimeout(r, 3000));

        await browser.close()


    }, 350000)
})
//
//await page.waitForTimeout(3000) reemplace con await new Promise(r => setTimeout(r, 3000));
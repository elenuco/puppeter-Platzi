module.exports={
    click: async function(page, selector, opts={}){
try{
   await page.waitForSelector(selector)
   await page.click(selector, opts)
}catch(e){
throw new Error('Error al dar click en el selector${selector}')
}
    },
    doubleClick: async function(page, selector, opts={}){
        try{
           await page.waitForSelector(selector)
           await page.click(selector, opts)
        }catch(e){
        throw new Error('Error al dar click en el selector${selector}')
        }
            }
}
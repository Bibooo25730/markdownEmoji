const puppeteer = require("puppeteer-core")
const fs = require("fs")

const start = async ()=>{
     const browser = await  puppeteer.launch({
          executablePath:'/usr/bin/google-chrome'
     });
     const page =await browser.newPage();
     await page.goto('https://www.webfx.com/tools/emoji-cheat-sheet/',{timeout:120000})
     // 网页的图片
     // await page.screenshot({fullPage:true,path:"/home/bibooo/markdown/cheat.png"})
     // 获取
    const imageAttributes = await page.$$eval("#smileys_and_people .apple img", (imgs) => {
        return imgs.map((img) => {
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt');
            return {
                src: src,
                alt: alt,
                // 其他属性
            };
        });
    });

    const divAttributes = await page.evaluate(() => {
        const element = document.querySelector("#smileys_and_people");
        const divs = element.querySelectorAll("._tips > div");
        let data = [];

        divs.forEach((div) => {
            const className = div.className;
            const content = div.textContent;
            data.push({ [className]: content });
        });

        const result = [];
        for (let i = 0; i < data.length; i += 2) {
            const shortcode = data[i].shortcode;
            const unicode = data[i + 1].unicode;
            result.push({ shortcode, unicode });
        }
        return result
    });
    const combinedArray = imageAttributes.map((obj, index) => {
        return {
            ...obj,
            ...divAttributes[index]
        };
    });
    // 写入 smileys_and_people .apple
    const content = JSON.stringify(combinedArray);
    fs.writeFile('smileys_and_people_apple.txt',content,(err)=>{
        if(err){
            throw  new Error('ERR')
        }
        console.log('内容已写入到 smileys_and_people_apple.txt');
    })
    await page.close()

}
// start()
const starts = async ()=> {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome'
    });
    const page = await browser.newPage();
    await page.goto('https://www.webfx.com/tools/emoji-cheat-sheet/', {timeout: 120000})
    // 获取 .google && windows
    const imageAttributes = await page.$$eval("#smileys_and_people .windows img", (imgs) => {
        return imgs.map((img) => {
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt');
            return {
                src: src,
                alt: alt,
                // 其他属性
            };
        });
    });
    let content = JSON.stringify(imageAttributes)
    //smileys_and_people_google.txt && smileys_and_people_windows.txt
    fs.writeFile("smileys_and_people_windows.txt",content,(err)=>{
         if(err){
             throw new Error('err')
         }else{
             console.log('已经输入成功了')
         }
    })
}
starts()
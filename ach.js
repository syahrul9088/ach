const fetch = require('node-fetch');
const readlineSync = require('readline-sync');
var randomize = require('randomatic')
var random = require('random-name')
const { URLSearchParams } = require('url');
const cheerio = require('cheerio');
const rp = require('request-promise');
const fs = require('fs-extra');
const delay = require('delay')

const functionRegist = (email, reff) => new Promise((resolve, reject) => {
    const bodys = {
        accountType: "email",
        mail: email,
        passwd: "c3d8e383a971dd43b705810efec2e946",
        shareCode: reff//"zii3lo"
        }
    
      fetch('https://app.alchemywallet.cn/achwallet/user/v1/register', { 
          method: 'POST', 
          body: JSON.stringify(bodys),
          headers: {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            "Accept-Language": 'en',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json; charset=UTF-8',
            'Host': 'app.alchemywallet.cn',
            'Language': 'english',
            'User-Agent': 'Mozilla/5.0 (Linux; U; Android 5.1.1; en; G011A Api/LMY48Z) AppleWebKit/534.30 (KHTML, like Gecko) Version/5.0 Mobile Safari/534.30'
            //Content-Length: 119
          }
      })
      .then(res => res.json())
      .then(result => {
          resolve(result);
      })
      .catch(err => reject(err))
  });

(async () => {
    const reff = readlineSync.question('[?] Reff: ')
    const jumlah = readlineSync.question('[?] Jumlah reff: ')
    for (var i = 0; i < jumlah; i++){
    try {
        const rand = randomize('0', 5)
        const nama = random.first()
        const email = `${nama}${rand}@gmail.com`
        const regist = await functionRegist(email, reff)
        console.log(`[+] ${regist.returnMsg}`)
    } catch (e) {
        console.log(e)
    }
}
})()
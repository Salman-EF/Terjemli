class TranslateService {

    iterate = (obj) => {
        return new Promise((resolve,reject) => {
            const $this = this;
            Object.keys(obj).forEach(function(key) {
                if (obj[key] !== null && typeof obj[key] === 'object') {
                    $this.iterate(obj[key]);
                    return;
                }
                if (typeof obj[key] === 'string') {
                    $this.translate(obj[key]).then(trsl => {
                        obj[key] = trsl;
                    });
                }
            })
            resolve(obj);
        })

    }

    translate = (text) => {
        new Promise((resolve,reject) => {
            const translate = require('google-translate-api');
    
            translate(text, {to: 'en'}).then(res => {
                console.log(res.text);
                resolve(res.text);
                // console.log(res.from.language.iso);
                //=> nl
            }).catch(err => {
                reject(err);
            });
        })
    }

}

export default TranslateService;
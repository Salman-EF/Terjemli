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
                    obj[key] = "WTF";
                }
            })
            resolve(obj);
        })

    }

}

export default TranslateService;
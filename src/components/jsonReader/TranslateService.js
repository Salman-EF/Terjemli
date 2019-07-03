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

    async translate (text, target) {
        // [START translate_translate_text]
        // Imports the Google Cloud client library
        const {Translate} = require('@google-cloud/translate');
      
        // Creates a client
        const translate = new Translate();
      
        /**
         * TODO(developer): Uncomment the following lines before running the sample.
         */
        // const text = 'The text to translate, e.g. Hello, world!';
        // const target = 'The target language, e.g. ru';
      
        // Translates the text into the target language. "text" can be a string for
        // translating a single piece of text, or an array of strings for translating
        // multiple texts.
        let [translations] = await translate.translate(text, target);
        translations = Array.isArray(translations) ? translations : [translations];
        console.log(translations);
        // translations.forEach((translation, i) => {
        //   console.log(`${text[i]} => (${target}) ${translation}`);
        // });
      
        // [END translate_translate_text]
    }

}

export default TranslateService;
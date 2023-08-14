const suportedLang = `
Albanian
Arabic
Armenian
Awadhi
Azerbaijani
Bashkir
Basque
Belarusian
Bengali
Bhojpuri
Bosnian
Brazilian Portuguese
Bulgarian
Cantonese (Yue)
Catalan
Chhattisgarhi
Chinese
Croatian
Czech
Danish
Dogri
Dutch
English
Estonian
Faroese
Finnish
French
Galician
Georgian
German
Greek
Gujarati
Haryanvi
Hindi
Hungarian
Indonesian
Irish
Italian
Japanese
Javanese
Kannada
Kashmiri
Kazakh
Konkani
Korean
Kyrgyz
Latvian
Lithuanian
Macedonian
Maithili
Malay
Maltese
Mandarin
Mandarin Chinese
Marathi
Marwari
Min Nan
Moldovan
Mongolian
Montenegrin
Nepali
Norwegian
Oriya
Pashto
Persian (Farsi)
Polish
Portuguese
Punjabi
Rajasthani
Romanian
Russian
Sanskrit
Santali
Serbian
Sindhi
Sinhala
Slovak
Slovene
Slovenian
Spanish
Swahili
Swedish
Tajik
Tamil
Tatar
Telugu
Thai
Turkish
Turkmen
Ukrainian
Urdu
Uzbek
Vietnamese
Welsh
Wu
`.trim().split("\n");



const suportedLangZh = `
Albanian
Arabic
Armenians
Awadhi
Azerbaijani
Bashkir
Basque
Belarusian
Bengali
Bhojpuri
Bosnian
Brazilian Portuguese
Bulgarian
Cantonese (Yue)
Catalan
Chhattisgarhi
Chinese
Croatian
Czech
Danish
Dogri
Dutch
English
Estonian
Faroese
Finnish
French
Galician
Georgian
German
greek
Gujarati
Haryanvi
Hindi
Hungarian
Indonesian
Irish
Italian
Japanese
Javanese
Kannada
Kashmiri
Kazakh
Konkani
Korean
Kyrgyz
Latvian
Lithuanian
Macedonian
Maithili
Malay
Maltese
Mandarin
Mandarin Chinese
Marathi
Marwari
Min Nan
Moldovan
Mongolian
Montenegrin
Nepali
Norwegian
Oriya
Pashto
Persian (Farsi)
Polish
Portuguese
Punjabi
Rajasthani
Romanian
Russian
Sanskrit
Santali
serbian
Sindhi
Sinhala
Slovak
Slovene
Slovenian
spanish
Swahili
swedish
Tajik
Tamil
Tatar
Telugu
Thailand
Turkish
Turkmen
Ukraine
Urdu
Uzbek
Vietnamese
Welsh
Wu
`.trim().split("\n");

const locales = `
Albanian - sq
Arabic - ar
Armenian - hy
Awadhi - awa
Azerbaijani - az
Bashkir - ba
Basque - eu
Belarusian - be
Bengali - bn
Bhojpuri - bho
Bosnian - bs
Brazilian Portuguese - pt-BR
Bulgarian - bg
Cantonese (Yue) - yue
Catalan - ca
Chhattisgarhi - hne
Chinese - zh-CN
Croatian - hr
Czech - cs
Danish - da
Dogri - doi
Dutch - nl
English - en
Estonian - et
Faroese - fo
Finnish - fi
French - fr
Galician - gl
Georgian - ka
German - de
Greek - el
Gujarati - gu
Haryanvi - bgc
Hindi - hi
Hungarian - hu
Indonesian - id
Irish - ga
Italian - it
Japanese - ja
Javanese - jv
Kannada - kn
Kashmiri - ks
Kazakh - kk
Konkani - kok
Korean - ko
Kyrgyz - ky
Latvian - lv
Lithuanian - lt
Macedonian - mk
Maithili - mai
Malay - ms
Maltese - mt
Mandarin - zh-CN
Mandarin Chinese - zh-CN
Marathi - mr
Marwari - mwr
Min Nan - nan
Moldovan - mo
Mongolian - mn
Montenegrin - cnr
Nepali - ne
Norwegian - no
Oriya - or
Pashto - ps
Persian (Farsi) - fa
Polish - pl
Portuguese - pt
Punjabi - pa
Rajasthani - raj
Romanian - ro
Russian - ru
Sanskrit - sa
Santali - sat
Serbian - sr
Sindhi - sd
Sinhala - si
Slovak - sk
Slovene - sl
Slovenian - sl
Spanish - es
Swahili - sw
Swedish - sv
Tajik - tg
Tamil - ta
Tatar - tt
Telugu - te
Thai - th
Turkish - tr
Turkmen - tk
Ukrainian - uk
Urdu - ur
Uzbek - uz
Vietnamese - vi
Welsh - cy
Wu - wuu
`.trim().split("\n").map(line => line.split(" - "));

const commonLangZh = `
Chinese
English
spanish
Arabic
Hindi
Portuguese
Russian
Japanese
French
German
Korean
italian
turkish
Bengali
`.trim().split("\n");

const langBiMap = (() => {
    const res = new Map<string, string>();
    for (let i = 0; i < suportedLang.length; i++) {
        res.set(suportedLang[i], suportedLangZh[i]);
        res.set(suportedLangZh[i], suportedLang[i]);
    }
    return res;
})();

const langLocaleBiMap = (() => {
    const res = new Map<string, string>();
    for (const words of locales) {
        res.set(words[0], words[1]);
        res.set(words[1], words[0]);
    }
    return res;
})();

function getLocale(lang: string): string | undefined {
    let res = langLocaleBiMap.get(lang);
    if (!res) {
        const lang1 = langBiMap.get(lang);
        if (lang1) {
            res = langLocaleBiMap.get(lang1);
        }
    }
    return res;
}

export {suportedLang, suportedLangZh, commonLangZh, getLocale, langBiMap, langLocaleBiMap};
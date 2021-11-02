const yt_search = require("yt-search")

const nom = 'never gonna give your up'

async function mainf(){
    a = await yt_search(nom)
    console.log(a.videos[0].url)
}

mainf()
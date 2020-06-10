const fs = require("fs")
const {OUTPUT} = require("./constants")

const addFont = () => {
    fs.copyFileSync("assets/fonts/BravuraSagittalUpdate_v10.otf", "dist/boundsAnalysis/BravuraSagittalUpdate_v10.otf")
    fs.appendFileSync(OUTPUT, `  <style> @font-face { font-family: 'Bravura'; src: url('BravuraSagittalUpdate_v10.otf'); font-style: normal; }</style>\n`)
}

module.exports = {
    addFont,
}

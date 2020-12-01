const fs = require("fs")
const path = require("path")
const TextToSVG = require("text-to-svg")

const text = " 　            "
const bravura = path.resolve(__dirname, "../assets/fonts/BravuraTextBB.otf")
const file = "forum/result.svg"
const options = {x: 20, y: 100}

TextToSVG.load(bravura, (_, textToSVG) => {
    fs.unlinkSync(file)

    const metrics = textToSVG.getMetrics(text, options)
    const width = metrics.width * 2
    const height = metrics.height * 2

    const path = textToSVG.getPath(text, options)
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}">${path}</svg>`

    fs.appendFileSync(file, svg)
})

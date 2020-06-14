const fs = require("fs")
const {resetFile} = require("./file")
const {addFont} = require("./font")
const {addParentSvg} = require("./parentSvg")
const {visualizeEvents} = require("./events")
const {visualizeLevels} = require("./levels")
const {visualizeLevelCommas} = require("./levelCommas")
const {visualizeLevelBounds} = require("./levelBounds")
const {visualizeInaMidpoints} = require("./inaMidpoints")
const {visualizeLevelCommaMeans} = require("./levelCommaMeans")
const {visualizeSizeCategoryBounds} = require("./sizeCategoryBounds")
const {OUTPUT} = require("./constants")

const visualizeBounds = visualization => {
    resetFile()

    fs.copyFileSync("assets/fonts/BravuraSagittalUpdate_v10.otf", "dist/boundsAnalysis/BravuraSagittalUpdate_v10.otf")

    let lines = []

    lines = lines.concat(addParentSvg())
    lines = lines.concat(addFont())

    lines = lines.concat(visualizeLevels())
    lines = lines.concat(visualizeLevelBounds())

    visualization.forEach(boundAnalysis => {
        lines = lines.concat(visualizeEvents(boundAnalysis.bestPossibleHistory.events))
    })

    lines = lines.concat(visualizeSizeCategoryBounds())
    lines = lines.concat(visualizeLevelCommaMeans())
    lines = lines.concat(visualizeInaMidpoints())

    lines = lines.concat(visualizeLevelCommas())

    lines = lines.concat("</svg>\n")

    fs.appendFileSync(OUTPUT, lines.join("\n"))
}

module.exports = {
    visualizeBounds,
}

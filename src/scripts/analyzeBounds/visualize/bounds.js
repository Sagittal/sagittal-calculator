const fs = require("fs")
const {addFont} = require("./font")
const {addParentSvg} = require("./parentSvg")
const {visualizeEvents} = require("./events")
const {visualizeCents} = require("./cents")
const {visualizeLevels} = require("./levels")
const {visualizeLevelCommas} = require("./levelCommas")
const {visualizeLevelBounds} = require("./levelBounds")
const {visualizeInaMidpoints} = require("./inaMidpoints")
const {visualizeLevelCommaMeans} = require("./levelCommaMeans")
const {visualizeSizeCategoryBounds} = require("./sizeCategoryBounds")

const visualizeBounds = boundsAnalysis => {
    fs.copyFileSync("assets/fonts/BravuraSagittalUpdate_v10.otf", "dist/analyzeBounds/BravuraSagittalUpdate_v10.otf")

    let elements = []

    elements = elements.concat(addParentSvg())
    elements = elements.concat(addFont())

    elements = elements.concat(visualizeCents())
    elements = elements.concat(visualizeLevels())
    elements = elements.concat(visualizeLevelBounds())

    boundsAnalysis.forEach(boundAnalysis => {
        elements = elements.concat(visualizeEvents(boundAnalysis.bestPossibleHistory.events))
    })

    elements = elements.concat(visualizeSizeCategoryBounds())
    elements = elements.concat(visualizeLevelCommaMeans())
    elements = elements.concat(visualizeInaMidpoints())

    elements = elements.concat(visualizeLevelCommas())

    elements = elements.concat("</svg>\n")

    return elements.join("")
}

module.exports = {
    visualizeBounds,
}

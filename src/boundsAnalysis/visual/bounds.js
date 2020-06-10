const fs = require("fs")
const {resetFile} = require("./file")
const {addFont} = require("./font")
const {addParentSvg} = require("./parentSvg")
const {visualizeEvents} = require("./events")
const {visualizeLevels} = require("./levels")
const {visualizeLevelCommas} = require("./levelCommas")
const {visualizeLevelBounds} = require("./levelBounds")
const {visualizeLevelEdaMidpoints} = require("./levelEdaMidpoints")
const {visualizeLevelCommaMeans} = require("./levelCommaMeans")
const {OUTPUT} = require("./constants")

const visualizeBounds = visualization => {
    resetFile()

    addParentSvg()
    addFont()

    visualizeLevels()
    visualizeLevelBounds()

    visualization.forEach(boundAnalysis => {
        visualizeEvents(boundAnalysis.bestPossibleHistory.events)
    })

    visualizeLevelEdaMidpoints()
    visualizeLevelCommaMeans()

    visualizeLevelCommas()

    fs.appendFileSync(OUTPUT, "</svg>\n")
}

module.exports = {
    visualizeBounds,
}

import * as fs from "fs"
import { addFont } from "./font"
import { addParentSvg } from "./parentSvg"
import { visualizeEvents } from "./events"
import { visualizeCents } from "./cents"
import { visualizeLevels } from "./levels"
import { visualizeLevelSymbols } from "./levelSymbols"
import { visualizeLevelBounds } from "./levelBounds"
import { visualizeInaMidpoints } from "./inaMidpoints"
import { visualizeLevelCommaMeans } from "./levelCommaMeans"
import { visualizeSizeCategoryBounds } from "./sizeCategoryBounds"
import { AnalyzedBound } from "../types"

const visualizeBounds = (boundsAnalysis: AnalyzedBound[]) => {
    fs.copyFileSync("assets/fonts/BravuraSagittalUpdate_v10.otf", "dist/analyzeBounds/BravuraSagittalUpdate_v10.otf")

    let elements: string[] = []

    elements = elements.concat(addParentSvg())
    elements = elements.concat(addFont())

    elements = elements.concat(visualizeCents())
    elements = elements.concat(visualizeLevels())
    elements = elements.concat(visualizeLevelBounds())

    boundsAnalysis.forEach(analyzedBound => {
        elements = elements.concat(visualizeEvents(analyzedBound.bestPossibleHistory.events))
    })

    elements = elements.concat(visualizeSizeCategoryBounds())
    elements = elements.concat(visualizeLevelCommaMeans())
    elements = elements.concat(visualizeInaMidpoints())

    elements = elements.concat(visualizeLevelSymbols())

    elements = elements.concat("</svg>\n")

    return elements.join("")
}

export {
    visualizeBounds,
}

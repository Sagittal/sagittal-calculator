import * as fs from "fs"
import { AnalyzedBound } from "../types"
import { visualizeCents } from "./cents"
import { visualizeEvents } from "./events"
import { addFont } from "./font"
import { visualizeInaMidpoints } from "./inaMidpoints"
import { visualizeLevelBounds } from "./levelBounds"
import { visualizeLevelCommaMeans } from "./levelCommaMeans"
import { visualizeLevels } from "./levels"
import { visualizeLevelSymbols } from "./levelSymbols"
import { addParentSvg } from "./parentSvg"
import { visualizeSizeCategoryBounds } from "./sizeCategoryBounds"

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

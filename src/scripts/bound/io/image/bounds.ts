import * as fs from "fs"
import { Io, ioSettings } from "../../../../general"
import { BoundAnalysis } from "../../analyzeBound"
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

const computeBoundsImage = (boundsAnalysis: BoundAnalysis[]): Io => {
    if (!ioSettings.noWrite) {
        fs.copyFileSync(
            "assets/fonts/BravuraSagittalUpdate_v10.otf",
            "dist/bound/BravuraSagittalUpdate_v10.otf",
        )
    }

    let elements: Io[] = [] as Io[]

    elements = elements.concat(addParentSvg())
    elements = elements.concat(addFont())

    elements = elements.concat(visualizeCents())
    elements = elements.concat(visualizeLevels())
    elements = elements.concat(visualizeLevelBounds())

    boundsAnalysis.forEach((boundAnalysis: BoundAnalysis): void => {
        elements = elements.concat(visualizeEvents(boundAnalysis.bestPossibleHistory.events))
    })

    elements = elements.concat(visualizeSizeCategoryBounds())
    elements = elements.concat(visualizeLevelCommaMeans())
    elements = elements.concat(visualizeInaMidpoints())

    elements = elements.concat(visualizeLevelSymbols())

    elements = elements.concat("</svg>\n" as Io)

    return elements.join("") as Io
}

export {
    computeBoundsImage,
}

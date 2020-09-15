import * as fs from "fs"
import { Io, ioSettings } from "../../../../general"
import { JiNotationBoundAnalysis } from "../../bound"
import { visualizeCents } from "./cents"
import { visualizeEvents } from "./events"
import { addFont } from "./font"
import { visualizeInaMidpoints } from "./inaMidpoints"
import { visualizeJiNotationLevelBounds } from "./levelBounds"
import { visualizeJiNotationLevelCommaMeans } from "./levelCommaMeans"
import { visualizeJiNotationLevels } from "./levels"
import { visualizeJiNotationLevelSymbolClasses } from "./levelSymbolClasses"
import { addParentSvg } from "./parentSvg"
import { visualizeSizeCategoryBounds } from "./sizeCategoryBounds"

const computeJiNotationBoundsImage = (jiNotationBoundAnalyses: JiNotationBoundAnalysis[]): Io => {
    if (!ioSettings.noWrite) {
        fs.copyFileSync(
            "assets/fonts/BravuraSagittalUpdate_v10.otf",
            "dist/jiNotationBound/BravuraSagittalUpdate_v10.otf",
        )
    }

    let elements: Io[] = [] as Io[]

    elements = elements.concat(addParentSvg())
    elements = elements.concat(addFont())

    elements = elements.concat(visualizeCents())
    elements = elements.concat(visualizeJiNotationLevels())
    elements = elements.concat(visualizeJiNotationLevelBounds())

    jiNotationBoundAnalyses.forEach((jiNotationBoundAnalysis: JiNotationBoundAnalysis): void => {
        elements = elements.concat(visualizeEvents(jiNotationBoundAnalysis.bestPossibleHistory.eventAnalyses))
    })

    elements = elements.concat(visualizeSizeCategoryBounds())
    elements = elements.concat(visualizeJiNotationLevelCommaMeans())
    elements = elements.concat(visualizeInaMidpoints())

    elements = elements.concat(visualizeJiNotationLevelSymbolClasses())

    elements = elements.concat("</svg>\n" as Io)

    return elements.join("") as Io
}

export {
    computeJiNotationBoundsImage,
}

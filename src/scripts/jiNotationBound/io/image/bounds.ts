import * as fs from "fs"
import { BLANK, Io, ioSettings, join } from "../../../../general"
import { JiNotationBoundAnalysis } from "../../bound"
import { visualizeCents } from "./cents"
import { visualizeBoundEventAnalyses } from "./events"
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
        elements = elements.concat(
            visualizeBoundEventAnalyses(jiNotationBoundAnalysis.bestPossibleBoundHistoryAnalysis.boundEventAnalyses),
        )
    })

    elements = elements.concat(visualizeSizeCategoryBounds())
    elements = elements.concat(visualizeJiNotationLevelCommaMeans())
    elements = elements.concat(visualizeInaMidpoints())

    elements = elements.concat(visualizeJiNotationLevelSymbolClasses())

    elements = elements.concat("</svg>\n" as Io)

    return join(elements, BLANK) as Io
}

export {
    computeJiNotationBoundsImage,
}

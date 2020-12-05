/* tslint:disable:no-reaching-imports */

import {BLANK, Io, ioSettings, join} from "@sagittal/general"
import * as fs from "fs"
import {visualizeCents} from "../image/cents"
import {addFont} from "../image/font"
import {visualizeJiNotationLevelBoundClasses} from "../image/levelBoundClasses"
import {visualizeJiNotationLevelCommaClasses} from "../image/levelCommaClasses"
import {visualizeJiNotationLevels} from "../image/levels"
import {addParentSvg} from "../image/parentSvg"

const computeLevelsDiagram = (): Io => {
    if (!ioSettings.noWrite) {
        fs.existsSync("dist") || fs.mkdirSync("dist")
        fs.existsSync(`dist/jiNotationBoundClass`) || fs.mkdirSync(`dist/jiNotationBoundClass`)
        fs.copyFileSync(
            "assets/fonts/BravuraSagittalUpdate_v10.otf",
            "dist/jiNotationBoundClass/BravuraSagittalUpdate_v10.otf",
        )
    }

    let elements: Io[] = [] as Io[]

    elements = elements.concat(addParentSvg())
    elements = elements.concat(addFont())

    elements = elements.concat(visualizeCents())
    elements = elements.concat(visualizeJiNotationLevels())
    elements = elements.concat(visualizeJiNotationLevelBoundClasses())

    elements = elements.concat(visualizeJiNotationLevelCommaClasses())

    elements = elements.concat("</svg>\n" as Io)

    return join(elements, BLANK) as Io
}

export {
    computeLevelsDiagram,
}

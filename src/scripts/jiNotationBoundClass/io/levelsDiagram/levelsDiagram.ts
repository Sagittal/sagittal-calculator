/* tslint:disable:no-reaching-imports */

import * as fs from "fs"
import {BLANK, Io, ioSettings, join} from "../../../../general"
import {visualizeCents} from "../image/cents"
import {addFont} from "../image/font"
import {visualizeJiNotationLevelBoundClasses} from "../image/levelBoundClasses"
import {visualizeJiNotationLevelCommaClasses} from "../image/levelCommaClasses"
import {visualizeJiNotationLevels} from "../image/levels"
import {addParentSvg} from "../image/parentSvg"

// TODO: MISCELLANEOUS: LEVELS DIAGRAM
//  - bring the cents closer down and include tick marks
//  - move the mina labels outside the boxes and center them, if you keep them at all
//  - handle the Extreme notation fitting somehow
//  - add the colors
//  - add the comma labels
//  - extend up to max single shaft symbol
//  - shift to the left a bit so the natural doesn't get cut off
//  - X_VS_Y_STRETCH to about 0.5
//  - exclude the bit about // JI notation bound class ID, not mina name in levelBoundClasses.ts

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

import {Maybe} from "../../../general"
import {AccidentalSection, computeSection, Flacombo} from "../../notations"
import {getFlacco} from "../flacco"
import {computeSymbolFromFlacco, flipSymbol} from "../symbol"
import {Accidental, Compatible, Flavor} from "./types"

const computeEvoAccidentalFromFlacombo = (flacombo: Flacombo): Accidental<Flavor.EVO> => {
    const flacco = getFlacco(flacombo.flaccoId)
    let symbol = computeSymbolFromFlacco(flacco)
    const section = computeSection(flacombo)

    symbol = section.accidentalSection === AccidentalSection.C ?
        flipSymbol(symbol) :
        symbol

    let maybeAdjustedApotomeCount = section.accidentalSection === AccidentalSection.B ?
        flacombo.apotomeCount > 0 ? flacombo.apotomeCount - 1 : flacombo.apotomeCount + 1 :
        flacombo.apotomeCount

    const compatible: Maybe<Compatible> =
        maybeAdjustedApotomeCount === 1 ?
            Compatible.SHARP :
            maybeAdjustedApotomeCount === 2 ?
                Compatible.DOUBLE_SHARP :
                maybeAdjustedApotomeCount === -1 ?
                    Compatible.FLAT :
                    maybeAdjustedApotomeCount === -2 ?
                        Compatible.DOUBLE_FLAT :
                        undefined

    return {...symbol, compatible} as Accidental<Flavor.EVO>
}

export {
    computeEvoAccidentalFromFlacombo,
}

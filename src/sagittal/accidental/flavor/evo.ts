import {increment, Maybe, negative} from "../../../general"
import {Flacombo, Section} from "../../notations"
import {getFlacco} from "../flacco"
import {computeSymbolFromFlacco, flipSymbol} from "../symbol"
import {Accidental, Compatible, Flavor} from "./types"

const computeEvoAccidentalFromFlacombo = (flacombo: Flacombo): Accidental<Flavor.EVO> => {
    const { flaccoId, section, shifted, negated } = flacombo

    const flacco = getFlacco(flaccoId)
    let symbol = computeSymbolFromFlacco(flacco)
    symbol = section === Section.C ?
        flipSymbol(symbol) :
        symbol

    let apotomeCount = 0
    if (section === Section.C) apotomeCount = increment(apotomeCount)
    if (shifted) apotomeCount = increment(apotomeCount)
    if (negated) apotomeCount = negative(apotomeCount)
    const compatible: Maybe<Compatible> =
        apotomeCount === 1 ?
            Compatible.SHARP :
            apotomeCount === 2 ?
                Compatible.DOUBLE_SHARP :
                apotomeCount === -1 ?
                    Compatible.FLAT :
                    apotomeCount === -2 ?
                        Compatible.DOUBLE_FLAT :
                        undefined

    return {...symbol, compatible} as Accidental<Flavor.EVO>
}

export {
    computeEvoAccidentalFromFlacombo,
}

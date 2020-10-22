import {Maybe} from "../../../general"
import {AccidentalSection, computeSection, Flacombo} from "../../notations"
import {getFlacco} from "../flacco"
import {computeSymbolFromFlacco, flipSymbol} from "../symbol"
import {Accidental, Compatible, Flavor} from "./types"

const computeEvoAccidentalFromFlacombo = (flacombo: Flacombo): Accidental<Flavor.EVO> => {
    // Todo: FLACOMBO, SECTION, NOTATION GENERATION
    //  Kind of crazy, it doesn't need commaClassId for evo at all... kind of makes me want to get rid of it in
    //  Revo and just say whether it's in section B or whatever (I think at some point I may have been going the other
    //  Way, i.e. trying to get rid of flaccoId instead of commaClassId but I thin this way makes more sense actually
    //  - Later: wait no again, all you need to know is whether they equal

    // Todo: FLACOMBO, SECTION, NOTATION GENERATION
    //  If you simplify the section to shaft odd/even, I'm pretty sure you shouldn't need apotomeCount here anymore
    //  Which would be good
    //  Although I tried that one point, and I hadn't thought it through clearly enough
    //  So clearly there's a difference between apotomeCount, which changes along with commas, and there are 5 zones
    //  And apotomeSection, which also changes with commas, but is halfway offset, so there are only 4 zones

    const flacco = getFlacco(flacombo.flaccoId)
    let symbol = computeSymbolFromFlacco(flacco)
    // Todo: FLACOMBO, SECTION, NOTATION GENERATION
    //  Right. the fact that we're importing from notation/section here I think just speaks to the fact that it
    //  Should be contained in the flacombo
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

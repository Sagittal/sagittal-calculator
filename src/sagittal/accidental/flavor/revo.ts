import {AccidentalSection, AimSection, ApotomeSection, computeSection, Flacombo} from "../../notations"
import {getFlacco} from "../flacco"
import {apotomeShift, computeApotomeComplement, computeSymbolFromFlacco, flipSymbol} from "../symbol"
import {Accidental, Flavor} from "./types"

const computeRevoAccidentalFromFlacombo = (flacombo: Flacombo): Accidental<Flavor.REVO> => {
    const flacco = getFlacco(flacombo.flaccoId)
    let symbol = computeSymbolFromFlacco(flacco)
    const section = computeSection(flacombo)

    symbol = section.accidentalSection === AccidentalSection.C ? computeApotomeComplement(symbol) : symbol
    symbol = section.apotomeSection === ApotomeSection._2 ? apotomeShift(symbol) : symbol
    symbol = section.aimSection === AimSection.D ? flipSymbol(symbol) : symbol

    return symbol as Accidental<Flavor.REVO>
}

export {
    computeRevoAccidentalFromFlacombo,
}

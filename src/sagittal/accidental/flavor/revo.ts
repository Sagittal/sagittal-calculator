import {CaptureZone, Section} from "../../notations"
import {getFlacco} from "../flacco"
import {apotomeShift, computeApotomeComplement, computeSymbolFromFlacco, flipSymbol} from "../symbol"
import {Accidental, Flavor} from "./types"

const computeRevoAccidentalFromCaptureZone = (captureZone: CaptureZone): Accidental<Flavor.REVO> => {
    const { flaccoId, section, shifted, negated } = captureZone

    const flacco = getFlacco(flaccoId)
    let symbol = computeSymbolFromFlacco(flacco)
    symbol = section === Section.C ? computeApotomeComplement(symbol) : symbol
    symbol = shifted ? apotomeShift(symbol) : symbol
    symbol = negated ? flipSymbol(symbol) : symbol

    return symbol as Accidental<Flavor.REVO>
}

export {
    computeRevoAccidentalFromCaptureZone,
}

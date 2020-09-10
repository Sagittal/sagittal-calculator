import { Io } from "../../../general"
import { pitchScriptGroupSettings } from "../globals"
import { TwoThreeFreeClassSettings } from "../types"

const formatSettings = (): Io => {
    const {
        minCents,
        maxCents,
        maxAbsolute3Exponent,
        maxAbsoluteApotomeSlope,
        maxN2D3P9,
    } = pitchScriptGroupSettings

    return [
        `cents range:                     \t${minCents} - ${maxCents}`,
        `max absolute 3 exponent (ATE):   \t${maxAbsolute3Exponent}`,
        `max absolute apotome slope (AAS):\t${maxAbsoluteApotomeSlope}`,
        `max N2D3P9:                      \t${maxN2D3P9}`,
    ].join("\n") as Io
}

const format23FreeClassSettings = (twoThreeFreeClassSettings: TwoThreeFreeClassSettings): Io => {
    const { max23FreeSopfr, max23FreeCopfr, maxPrimeLimit } = twoThreeFreeClassSettings
    
    return [
        `max 2,3-free sopfr:              \t${max23FreeSopfr}`,
        `max 2,3-free copfr:              \t${max23FreeCopfr}`,
        `max prime limit:                 \t${maxPrimeLimit}`,
    ].join("\n") as Io
}

export {
    formatSettings,
    format23FreeClassSettings,
}

import { formatInteger, formatNumber, Io } from "../../../general"
import { jiPitchScriptGroupSettings } from "../globals"
import { TwoThreeFreeClassSettings } from "../types"

const formatSettings = (): Io => {
    const {
        minCents,
        maxCents,
        maxAbs3Exponent,
        maxAbsApotomeSlope,
        maxN2D3P9,
    } = jiPitchScriptGroupSettings

    return [
        `cents range:                \t${formatNumber(minCents)} - ${formatNumber(maxCents)}`,
        `max abs 3 exponent (ATE):   \t${formatInteger(maxAbs3Exponent)}`,
        `max abs apotome slope (AAS):\t${formatNumber(maxAbsApotomeSlope)}`,
        `max N2D3P9:                 \t${formatNumber(maxN2D3P9)}`,
    ].join("\n") as Io
}

const format23FreeClassSettings = (twoThreeFreeClassSettings: TwoThreeFreeClassSettings): Io => {
    const { max23FreeSopfr, max23FreeCopfr, maxPrimeLimit } = twoThreeFreeClassSettings

    return [
        `max 2,3-free sopfr:         \t${formatInteger(max23FreeSopfr)}`,
        `max 2,3-free copfr:         \t${formatInteger(max23FreeCopfr)}`,
        `max prime limit:            \t${formatInteger(maxPrimeLimit)}`,
    ].join("\n") as Io
}

export {
    formatSettings,
    format23FreeClassSettings,
}

import { formatInteger, formatNumber, Io } from "../../../general"
import { jiPitchScriptGroupSettings } from "../globals"
import { TwoThreeFreeClassSettings } from "../types"

// TODO: FIND COMMA ANALYZE JI PITCH NOTATING COMMAS 2,3 FREE CLEAN UP
//  okay, but these aren't "ji pitch" settings
//  and N2D3P9 is a property which is shared among all 2,3-free classes, so doesn't it really belong down there...?
//  except that you do definitely want to be able to filter notating commas by it...
//  but wouldn't you theoretically want to be able to filter the notating commas by 2,3-free sopfr and copfr and limit?
const formatSettings = (): Io => {
    const {
        minCents,
        maxCents,
        maxAte,
        maxAas,
        maxN2D3P9,
    } = jiPitchScriptGroupSettings

    return [
        `cents range:       \t${formatNumber(minCents)} - ${formatNumber(maxCents)}`,
        `max ATE:           \t${formatInteger(maxAte)}`,
        `max AAS:           \t${formatNumber(maxAas)}`,
        `max N2D3P9:        \t${formatNumber(maxN2D3P9)}`,
    ].join("\n") as Io
}

const format23FreeClassSettings = (twoThreeFreeClassSettings: TwoThreeFreeClassSettings): Io => {
    const { max23FreeSopfr, max23FreeCopfr, maxPrimeLimit } = twoThreeFreeClassSettings

    return [
        `max 2,3-free sopfr:\t${formatInteger(max23FreeSopfr)}`,
        `max 2,3-free copfr:\t${formatInteger(max23FreeCopfr)}`,
        `max prime limit:   \t${formatInteger(maxPrimeLimit)}`,
    ].join("\n") as Io
}

export {
    formatSettings,
    format23FreeClassSettings,
}

import {
    computeJiPitchMonzo,
    computeRoughMonzo,
    deepEquals,
    FIVE_ROUGHNESS,
    Id,
    invertMonzo,
    JiPitch,
} from "../../general"
import { getSagittalComma, JiSymbol, JI_SYMBOLS } from "../../sagittal"

// Different than computeNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeExactlyNotatingJiSymbolIds = (jiPitch: JiPitch): Array<Id<JiSymbol>> => {
    const monzo = computeJiPitchMonzo(jiPitch)

    const notatingJiSymbols: Array<Id<JiSymbol>> = []
    const twoThreeFreeMonzo = computeRoughMonzo(monzo, FIVE_ROUGHNESS)

    JI_SYMBOLS.forEach((jiSymbol: JiSymbol): void => {
        const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)
        const twoThreeFreePrimaryCommaMonzo = computeRoughMonzo(primaryComma.monzo, FIVE_ROUGHNESS)

        if (
            deepEquals(twoThreeFreeMonzo, twoThreeFreePrimaryCommaMonzo) ||
            deepEquals(twoThreeFreeMonzo, invertMonzo(twoThreeFreePrimaryCommaMonzo))
        ) {
            notatingJiSymbols.push(jiSymbol.id)
        }
    })

    return notatingJiSymbols
}

export {
    computeExactlyNotatingJiSymbolIds,
}

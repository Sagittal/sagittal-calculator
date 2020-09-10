import { Cents, CentsPosition, computeCentsFromMonzo, Name, Pitch } from "../../../general"
import { getJiSymbol, getSagittalComma, Level, LEVELS_SYMBOL_IDS } from "../../../sagittal"

const computeLevelCommaMeans = (level: Level): CentsPosition[] => {
    const levelSymbolIds = LEVELS_SYMBOL_IDS[ level ]

    const levelSymbolIdsExcludingTheLastSymbol = levelSymbolIds.slice(0, levelSymbolIds.length - 1)

    return levelSymbolIdsExcludingTheLastSymbol.map((jiSymbolId, index): CentsPosition => {
        const jiSymbol = getJiSymbol(jiSymbolId)
        const primaryCommaId = jiSymbol.primaryCommaId
        const primaryComma = getSagittalComma(primaryCommaId)
        const primaryCommaCents = computeCentsFromMonzo(primaryComma.monzo)

        const nextJiSymbolId = levelSymbolIds[ index + 1 ]
        const nextJiSymbol = getJiSymbol(nextJiSymbolId)
        const nextPrimaryCommaId = nextJiSymbol.primaryCommaId
        const nextPrimaryComma = getSagittalComma(nextPrimaryCommaId)
        const nextPrimaryCommaCents = computeCentsFromMonzo(nextPrimaryComma.monzo)
        // TODO: at this point maybe need a helper method for the above repetition

        const cents = (primaryCommaCents + nextPrimaryCommaCents) / 2 as Cents

        return {
            name: [jiSymbol.ascii, nextJiSymbol.ascii].join(" ") as Name<Pitch>,
            cents,
        }
    })
}

export {
    computeLevelCommaMeans,
}

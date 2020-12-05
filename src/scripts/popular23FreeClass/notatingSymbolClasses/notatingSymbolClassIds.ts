import {
    areMonzosEqual,
    computeRoughRationalMonzo,
    invertMonzo,
    isUndefined,
    Scamon,
    TWO_3_FREE,
} from "@sagittal/general"
import {CommaClassId, getCommaClass, JI_NOTATION, SymbolClass, SymbolClassId, SYMBOL_CLASSES} from "@sagittal/system"

// Different than findNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeNotatingSymbolClassIds = ({monzo}: Scamon<{rational: true}>): SymbolClassId[] => {
    const notatingSymbolClassIds: SymbolClassId[] = []
    const two3FreeRationalMonzo = computeRoughRationalMonzo(monzo, TWO_3_FREE)

    JI_NOTATION.forEach((commaClassId: CommaClassId): void => {
        // TODO: POST-NOTATION-GENERATION: JI NOTATION CLEAN-UP
        //  What this should really do is just scan over the JI Notation's symbol class IDs
        //  At which time you can hide the SYMBOL_CLASSES from the outside world again
        const commaClass = getCommaClass(commaClassId)
        const commaClassTwo3FreeMonzo = computeRoughRationalMonzo(commaClass.pitch.monzo, TWO_3_FREE)

        if (
            areMonzosEqual(two3FreeRationalMonzo, commaClassTwo3FreeMonzo) ||
            areMonzosEqual(two3FreeRationalMonzo, invertMonzo(commaClassTwo3FreeMonzo))
        ) {
            const symbolClassEntries = Object.entries(SYMBOL_CLASSES) as Array<[SymbolClassId, SymbolClass]>
            const symbolClassEntry = symbolClassEntries
                .find(([_, symbolClass]: [SymbolClassId, SymbolClass]): boolean => {
                    return symbolClass.commaClassId === commaClassId
                })
            if (isUndefined(symbolClassEntry)) throw new Error(`Did not find a symbol class with this comma class`)
            notatingSymbolClassIds.push(symbolClassEntry[0])
        }
    })

    return notatingSymbolClassIds
}

export {
    computeNotatingSymbolClassIds,
}

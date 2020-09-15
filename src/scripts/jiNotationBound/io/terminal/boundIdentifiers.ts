import { Maybe } from "../../../../general"
import {
    getJiNotationSymbolClass,
    getRepresentativeSymbol,
    JiNotationBound,
    JiNotationLevel,
    SymbolLongAscii,
} from "../../../../sagittal"
import { computeBoundedSymbolClasses } from "./boundedSymbolClasses"
import { JI_NOTATION_LEVEL_BOUNDED_SYMBOL_CLASSES } from "./levelBoundedSymbolClasses"
import {
    BoundedSymbolClass,
    BoundedSymbolClassesWithPrimaryCommas,
    BoundedSymbolClassIdWithDistancesPair,
    JiNotationBoundIdentifiers,
    JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
} from "./types"

const extractJiNotationBoundIdentifiers = (jiNotationBound: JiNotationBound): JiNotationBoundIdentifiers => {
    const { cents, id } = jiNotationBound

    const jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByJiNotationLevel =
        JI_NOTATION_LEVEL_BOUNDED_SYMBOL_CLASSES.find(
            (
                jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByLevel:
                    JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
            ): boolean => {
                return jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByLevel.id === id
            })
    if (!jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByJiNotationLevel) {
        throw new Error(`Could not find bounded symbols for bound with ID ${id}`)
    }

    const boundedSymbolClasses: BoundedSymbolClassesWithPrimaryCommas =
        computeBoundedSymbolClasses(jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByJiNotationLevel)

    const [
        extremeLevelLesserBoundedSymbolClassIdWithDistance,
        extremeLevelGreaterBoundedSymbolClassIdWithDistance,
    ]: BoundedSymbolClassIdWithDistancesPair =
        // tslint:disable-next-line:max-line-length
        jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByJiNotationLevel[ JiNotationLevel.EXTREME ] as BoundedSymbolClassIdWithDistancesPair

    const extremeLevelLesserBoundedSymbolClass: Maybe<BoundedSymbolClass> =
        extremeLevelLesserBoundedSymbolClassIdWithDistance && {
            ...extremeLevelLesserBoundedSymbolClassIdWithDistance,
            ...getJiNotationSymbolClass(extremeLevelLesserBoundedSymbolClassIdWithDistance.id),
        } as BoundedSymbolClass
    const formattedExtremeLevelLesserBoundedSymbolClass = extremeLevelLesserBoundedSymbolClass ?
        getRepresentativeSymbol(extremeLevelLesserBoundedSymbolClass.id).ascii :
        "" as SymbolLongAscii
    const lesserBoundedMina = extremeLevelLesserBoundedSymbolClass && extremeLevelLesserBoundedSymbolClass.mina

    const extremeLevelGreaterBoundedSymbolClass: Maybe<BoundedSymbolClass> =
        extremeLevelGreaterBoundedSymbolClassIdWithDistance && {
            ...extremeLevelGreaterBoundedSymbolClassIdWithDistance,
            ...getJiNotationSymbolClass(extremeLevelGreaterBoundedSymbolClassIdWithDistance.id),
        } as BoundedSymbolClass
    const formattedExtremeLevelGreaterBoundedSymbolClass = extremeLevelGreaterBoundedSymbolClass ?
        getRepresentativeSymbol(extremeLevelGreaterBoundedSymbolClass.id).ascii :
        "" as SymbolLongAscii
    const greaterBoundedMina = extremeLevelGreaterBoundedSymbolClass && extremeLevelGreaterBoundedSymbolClass.mina

    return {
        extremeLevelLesserBoundedSymbolClass: formattedExtremeLevelLesserBoundedSymbolClass,
        extremeLevelGreaterBoundedSymbolClass: formattedExtremeLevelGreaterBoundedSymbolClass,
        cents,
        boundedSymbolClasses,
        lesserBoundedMina,
        greaterBoundedMina,
    }
}

export {
    extractJiNotationBoundIdentifiers,
}

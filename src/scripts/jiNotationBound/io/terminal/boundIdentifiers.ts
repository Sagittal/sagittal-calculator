import { Maybe } from "../../../../general"
import {
    getMinaName,
    getRepresentativeSymbol,
    getSymbolClass,
    JiNotationBound,
    JiNotationLevel,
    SymbolLongAscii,
} from "../../../../sagittal"
import { computeBoundedSymbolClassAnalyses } from "./boundedSymbolClassAnalyses"
import { JI_NOTATION_LEVEL_BOUNDED_SYMBOL_CLASSES } from "./levelBoundedSymbolClasses"
import {
    BoundedSymbolClass,
    BoundedSymbolClassAnalyses,
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

    const boundedSymbolClassAnalyses: BoundedSymbolClassAnalyses =
        computeBoundedSymbolClassAnalyses(jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByJiNotationLevel)

    const [
        extremeLevelLesserBoundedSymbolClassIdWithDistance,
        extremeLevelGreaterBoundedSymbolClassIdWithDistance,
    ]: BoundedSymbolClassIdWithDistancesPair =
        // tslint:disable-next-line max-line-length
        jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByJiNotationLevel[ JiNotationLevel.EXTREME ] as BoundedSymbolClassIdWithDistancesPair

    const extremeLevelLesserBoundedSymbolClass: Maybe<BoundedSymbolClass> =
        extremeLevelLesserBoundedSymbolClassIdWithDistance && {
            ...extremeLevelLesserBoundedSymbolClassIdWithDistance,
            ...getSymbolClass(extremeLevelLesserBoundedSymbolClassIdWithDistance.id),
        } as BoundedSymbolClass
    const formattedExtremeLevelLesserBoundedSymbolClass = extremeLevelLesserBoundedSymbolClass ?
        getRepresentativeSymbol(extremeLevelLesserBoundedSymbolClass.id).ascii :
        "" as SymbolLongAscii
    const lesserBoundedMinaName = extremeLevelLesserBoundedSymbolClass &&
        getMinaName(extremeLevelLesserBoundedSymbolClass.id)

    const extremeLevelGreaterBoundedSymbolClass: Maybe<BoundedSymbolClass> =
        extremeLevelGreaterBoundedSymbolClassIdWithDistance && {
            ...extremeLevelGreaterBoundedSymbolClassIdWithDistance,
            ...getSymbolClass(extremeLevelGreaterBoundedSymbolClassIdWithDistance.id),
        } as BoundedSymbolClass
    const formattedExtremeLevelGreaterBoundedSymbolClass = extremeLevelGreaterBoundedSymbolClass ?
        getRepresentativeSymbol(extremeLevelGreaterBoundedSymbolClass.id).ascii :
        "" as SymbolLongAscii
    const greaterBoundedMinaName = extremeLevelGreaterBoundedSymbolClass &&
        getMinaName(extremeLevelGreaterBoundedSymbolClass.id)

    return {
        extremeLevelLesserBoundedSymbolClass: formattedExtremeLevelLesserBoundedSymbolClass,
        extremeLevelGreaterBoundedSymbolClass: formattedExtremeLevelGreaterBoundedSymbolClass,
        cents,
        boundedSymbolClassAnalyses,
        lesserBoundedMinaName,
        greaterBoundedMinaName,
    }
}

export {
    extractJiNotationBoundIdentifiers,
}

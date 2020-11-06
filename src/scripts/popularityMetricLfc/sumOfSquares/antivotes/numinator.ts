import {Score} from "../../../../general"
import {LfcUnpopularityEstimate} from "../types"

// Or "numenator" and "demonator" ?
const maybeNuminatorSwap = (
    options: {
        useNuminator: boolean,
        numeratorAntivotes: Score<LfcUnpopularityEstimate>,
        denominatorAntivotes: Score<LfcUnpopularityEstimate>
    },
): {numeratorAntivotes: Score<LfcUnpopularityEstimate>, denominatorAntivotes: Score<LfcUnpopularityEstimate>} => {
    const {useNuminator, numeratorAntivotes, denominatorAntivotes} = options

    let numeratorAntivotesAfterMaybeNuminatorSwap = useNuminator ?
        numeratorAntivotes > denominatorAntivotes ?
            numeratorAntivotes :
            denominatorAntivotes :
        numeratorAntivotes
    let denominatorAntivotesAfterMaybeNuminatorSwap = useNuminator ?
        numeratorAntivotes > denominatorAntivotes ?
            denominatorAntivotes :
            numeratorAntivotes :
        denominatorAntivotes

    return {
        numeratorAntivotes: numeratorAntivotesAfterMaybeNuminatorSwap,
        denominatorAntivotes: denominatorAntivotesAfterMaybeNuminatorSwap,
    }
}

export {
    maybeNuminatorSwap,
}

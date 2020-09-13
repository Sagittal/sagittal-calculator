import { Antivotes } from "../types"

// or "numenator" and "demonator" ?
const maybeNuminatorSwap = (
    options: { useNuminator: boolean, numeratorAntivotes: Antivotes, denominatorAntivotes: Antivotes },
): { numeratorAntivotes: Antivotes, denominatorAntivotes: Antivotes } => {
    const { useNuminator, numeratorAntivotes, denominatorAntivotes } = options

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

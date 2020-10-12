import { Id, isUndefined } from "../../general"
import { FLACCOS } from "./flaccos"
import { computeSymbolFromFlacco } from "./symbolFromFlacco"
import { CommaClass, Flacco, SagittalSymbol } from "./types"

const getRepresentativeSymbol = (commaClassId: Id<CommaClass>): SagittalSymbol => {
    const flacco = FLACCOS.find((flacco: Flacco): boolean => {
        // TODO: COMMA CLASS HAS REPRESENTATIVE FLACCO ID disconcertingly relying on the matching of the IDs
        //  Although we did decide that the IDs would correlate, right? perhaps would it be smart to instead of calling
        //  Them simply ".id" make it something like a "shared ID"?
        //  Or is the solution instead for a comma class to have a representativeFlaccoId?
        return flacco.id as Id === commaClassId as Id
    })

    if (isUndefined(flacco)) {
        throw new Error(`Could not find representative symbol for comma class ID ${commaClassId}.`)
    }

    return computeSymbolFromFlacco(flacco)
}

export {
    getRepresentativeSymbol,
}

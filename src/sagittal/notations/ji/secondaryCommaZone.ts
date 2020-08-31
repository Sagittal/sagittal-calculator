import { Zone } from "../../../general"
import { SagittalComma } from "../types"
import { computeCaptureZone } from "./captureZone"
import { JiSymbol } from "./types"

// TODO: perhaps secondary comma zone should be built-in to the JiSymbol model,
//  and this test would be just to check that they all check out with themselves?
//  sure, but first you'd want to include its capture zones per level at all.
//  then work up to its secondary comma zone
//  okay, but do we want it to be an array of Id<Bound>? that seems right

const computeSecondaryCommaZone = (jiSymbol: JiSymbol): Zone<SagittalComma> => {
    return computeCaptureZone(jiSymbol, jiSymbol.introducingLevel) as Zone<SagittalComma>
}

export {
    computeSecondaryCommaZone,
}

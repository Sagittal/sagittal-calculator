import {computeRationalScamonSopfr, Sopfr, Two3FreeClass} from "../../../../../general"
import {Unpopularity} from "./types"

const computeSopfgtt = (two3FreeClass: Two3FreeClass): Unpopularity & Sopfr<{rough: 5}> =>
    computeRationalScamonSopfr(two3FreeClass) as Unpopularity & Sopfr<{rough: 5}>

export {
    computeSopfgtt,
}

import { Id, sort } from "../../../general"
import { Flacco, FlaccoSubset } from "./types"

const FLACCO_SUBSETS_SORTED_BY_SIZE: FlaccoSubset[] = [
    FlaccoSubset.COMPATIBLE,
    FlaccoSubset.SPARTAN,
    FlaccoSubset.ATHENIAN,
    FlaccoSubset.TROJAN,
    FlaccoSubset.PROMETHEAN,
    FlaccoSubset.HERCULEAN,
    FlaccoSubset.OLYMPIAN,
    FlaccoSubset.MAGRATHEAN,
]

const SAGITTAL_COMPATIBLE_FLACCO_SUBSET: Array<Id<Flacco>> = [
    0,
] as Array<Id<Flacco>>

const SPARTAN_FLACCO_SUBSET: Array<Id<Flacco>> = [
    12, 44, 58, 92, 104, 114, 131, 141,
] as Array<Id<Flacco>>

const ATHENIAN_FLACCO_SUBSET: Array<Id<Flacco>> = sort([
    ...SPARTAN_FLACCO_SUBSET,
    20, 30, 67, 70, 84,
]) as Array<Id<Flacco>>

const PROMETHEAN_FLACCO_SUBSET: Array<Id<Flacco>> = sort([
    ...ATHENIAN_FLACCO_SUBSET,
    7, 18, 25, 34, 36, 41, 52, 65, 76, 81, 86, 99, 106, 117, 122, 128, 139, 146,
]) as Array<Id<Flacco>>

const HERCULEAN_FLACCO_SUBSET: Array<Id<Flacco>> = sort([
    ...PROMETHEAN_FLACCO_SUBSET,
    3, 4, 14, 16, 24, 26, 40, 47, 48, 54, 62, 66, 74, 79, 80, 88, 96, 108, 110, 119, 126, 135, 137,
]) as Array<Id<Flacco>>

const OLYMPIAN_FLACCO_SUBSET: Array<Id<Flacco>> = sort([
    ...HERCULEAN_FLACCO_SUBSET,
    1, 2, 5, 6, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 23, 27, 28, 29, 31, 32, 33, 35, 37, 38, 39, 42, 43, 45, 46, 49,
    50, 51, 53, 55, 56, 57, 59, 60, 61, 63, 64, 68, 69, 71, 72, 73, 75, 77, 78, 82, 83, 85, 87, 89, 90, 91, 93, 94, 95,
    97, 98, 100, 101, 102, 103, 105, 107, 109, 111, 112, 113, 115, 116, 118, 120, 121, 123, 124, 125, 127, 129, 130,
    132, 133, 134, 136, 138, 140, 142, 143, 144, 145, 147, 148,
]) as Array<Id<Flacco>>

const MAGRATHEAN_FLACCO_SUBSET: Array<Id<Flacco>> = sort([
    ...OLYMPIAN_FLACCO_SUBSET,
]) as Array<Id<Flacco>>

// On an independent trajectory, as it does not contain Spartan or Athenian, though it is contained by Promethean
// See: http://forum.sagittal.org/viewtopic.php?p=885&sid=832fe7e77de7aae89234e3dbb67f8fb9#p885
const TROJAN_FLACCO_SUBSET: Array<Id<Flacco>> = [
    30, 52, 44, 70, 34, 58, 67, 81, 104, 114, 141,
] as Array<Id<Flacco>>

const FLACCO_SUBSETS: Record<FlaccoSubset, Array<Id<Flacco>>> = {
    [ FlaccoSubset.COMPATIBLE ]: SAGITTAL_COMPATIBLE_FLACCO_SUBSET,
    [ FlaccoSubset.SPARTAN ]: SPARTAN_FLACCO_SUBSET,
    [ FlaccoSubset.ATHENIAN ]: ATHENIAN_FLACCO_SUBSET,
    [ FlaccoSubset.TROJAN ]: TROJAN_FLACCO_SUBSET,
    [ FlaccoSubset.PROMETHEAN ]: PROMETHEAN_FLACCO_SUBSET,
    [ FlaccoSubset.HERCULEAN ]: HERCULEAN_FLACCO_SUBSET,
    [ FlaccoSubset.OLYMPIAN ]: OLYMPIAN_FLACCO_SUBSET,
    [ FlaccoSubset.MAGRATHEAN ]: MAGRATHEAN_FLACCO_SUBSET,
}

export {
    SAGITTAL_COMPATIBLE_FLACCO_SUBSET,
    SPARTAN_FLACCO_SUBSET,
    ATHENIAN_FLACCO_SUBSET,
    TROJAN_FLACCO_SUBSET,
    PROMETHEAN_FLACCO_SUBSET,
    HERCULEAN_FLACCO_SUBSET,
    OLYMPIAN_FLACCO_SUBSET,
    MAGRATHEAN_FLACCO_SUBSET,
    FLACCO_SUBSETS,
    FLACCO_SUBSETS_SORTED_BY_SIZE,
}

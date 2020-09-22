import { Id, sort } from "../../general"
import { SymbolClass, SymbolSubset } from "./types"

const SAGITTAL_COMPATIBLE_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = [
    0,
] as Array<Id<SymbolClass>>

const SPARTAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = [
    12, 44, 58, 92, 104, 114, 131, 141,
] as Array<Id<SymbolClass>>

const ATHENIAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = sort([
    ...SPARTAN_SYMBOL_CLASS_IDS,
    20, 30, 67, 70, 84,
]) as Array<Id<SymbolClass>>

const PROMETHEAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = sort([
    ...ATHENIAN_SYMBOL_CLASS_IDS,
    7, 18, 25, 34, 36, 41, 52, 65, 76, 81, 86, 99, 106, 117, 122, 128, 139, 146,
]) as Array<Id<SymbolClass>>

const HERCULEAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = sort([
    ...PROMETHEAN_SYMBOL_CLASS_IDS,
    3, 4, 14, 16, 24, 26, 40, 47, 48, 54, 62, 66, 74, 79, 80, 88, 96, 108, 110, 119, 126, 135, 137,
]) as Array<Id<SymbolClass>>

const OLYMPIAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = sort([
    ...HERCULEAN_SYMBOL_CLASS_IDS,
    1, 2, 5, 6, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 23, 27, 28, 29, 31, 32, 33, 35, 37, 38, 39, 42, 43, 45, 46, 49,
    50, 51, 53, 55, 56, 57, 59, 60, 61, 63, 64, 68, 69, 71, 72, 73, 75, 77, 78, 82, 83, 85, 87, 89, 90, 91, 93, 94, 95,
    97, 98, 100, 101, 102, 103, 105, 107, 109, 111, 112, 113, 115, 116, 118, 120, 121, 123, 124, 125, 127, 129, 130,
    132, 133, 134, 136, 138, 140, 142, 143, 144, 145, 147, 148,
]) as Array<Id<SymbolClass>>

const MAGRATHEAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = sort([
    ...OLYMPIAN_SYMBOL_CLASS_IDS,
]) as Array<Id<SymbolClass>>

// On an independent trajectory, as it does not contain Spartan or Athenian, though it is contained by Promethean
// http://forum.sagittal.org/viewtopic.php?p=885&sid=832fe7e77de7aae89234e3dbb67f8fb9#p885
const TROJAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = [
    30, 52, 44, 70, 34, 58, 67, 81, 104, 114, 141,
] as Array<Id<SymbolClass>>

const SYMBOL_SUBSET_SYMBOL_CLASS_IDS: Record<SymbolSubset, Array<Id<SymbolClass>>> = {
    [ SymbolSubset.SAGITTAL_COMPATIBLE ]: SAGITTAL_COMPATIBLE_SYMBOL_CLASS_IDS,
    [ SymbolSubset.SPARTAN ]: SPARTAN_SYMBOL_CLASS_IDS,
    [ SymbolSubset.ATHENIAN ]: ATHENIAN_SYMBOL_CLASS_IDS,
    [ SymbolSubset.TROJAN ]: TROJAN_SYMBOL_CLASS_IDS,
    [ SymbolSubset.PROMETHEAN ]: PROMETHEAN_SYMBOL_CLASS_IDS,
    [ SymbolSubset.HERCULEAN ]: HERCULEAN_SYMBOL_CLASS_IDS,
    [ SymbolSubset.OLYMPIAN ]: OLYMPIAN_SYMBOL_CLASS_IDS,
    [ SymbolSubset.MAGRATHEAN ]: MAGRATHEAN_SYMBOL_CLASS_IDS,
}

export {
    SAGITTAL_COMPATIBLE_SYMBOL_CLASS_IDS,
    SPARTAN_SYMBOL_CLASS_IDS,
    ATHENIAN_SYMBOL_CLASS_IDS,
    TROJAN_SYMBOL_CLASS_IDS,
    PROMETHEAN_SYMBOL_CLASS_IDS,
    HERCULEAN_SYMBOL_CLASS_IDS,
    OLYMPIAN_SYMBOL_CLASS_IDS,
    MAGRATHEAN_SYMBOL_CLASS_IDS,
    SYMBOL_SUBSET_SYMBOL_CLASS_IDS,
}
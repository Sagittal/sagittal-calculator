import { Id, sort } from "../../general"
import { SymbolClass, SymbolSubset } from "./types"

// TODO: | is not a symbol. it should be the natural symbol |//|, and in the compatibles set
//  according to this: http://forum.sagittal.org/viewtopic.php?p=2377#p2377
//  maybe ask Dave if he wants that to be index 0, and maybe also include Trojan
const SPARTAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = [
    0, 12, 44, 58, 93, 105, 115, 132, 142,
] as Array<Id<SymbolClass>>

const ATHENIAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = sort([
    ...SPARTAN_SYMBOL_CLASS_IDS,
    20, 30, 67, 70, 85,
]) as Array<Id<SymbolClass>>

const PROMETHEAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = sort([
    ...ATHENIAN_SYMBOL_CLASS_IDS,
    7, 18, 25, 34, 36, 41, 52, 65, 76, 82, 87, 100, 107, 118, 123, 129, 140, 147,
]) as Array<Id<SymbolClass>>

const HERCULEAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = sort([
    ...PROMETHEAN_SYMBOL_CLASS_IDS,
    3, 4, 14, 16, 24, 26, 40, 47, 48, 54, 62, 66, 74, 80, 81, 89, 97, 109, 111, 120, 127, 136, 138,
]) as Array<Id<SymbolClass>>

const OLYMPIAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = sort([
    ...HERCULEAN_SYMBOL_CLASS_IDS,
    1, 2, 5, 6, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 23, 27, 28, 29, 31, 32, 33, 35, 37, 38, 39, 42, 43, 45, 46, 49,
    50, 51, 53, 55, 56, 57, 59, 60, 61, 63, 64, 68, 69, 71, 72, 73, 75, 77, 79, 83, 84, 86, 88, 90, 91, 92, 94, 95, 96,
    98, 99, 101, 102, 103, 104, 106, 108, 110, 112, 113, 114, 116, 117, 119, 121, 122, 124, 125, 126, 128, 130, 131,
    133, 134, 135, 137, 139, 141, 143, 144, 145, 146, 148, 149,
]) as Array<Id<SymbolClass>>

const MAGRATHEAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = sort([
    ...OLYMPIAN_SYMBOL_CLASS_IDS,
]) as Array<Id<SymbolClass>>

// On an independent trajectory, as it does not contain Spartan or Athenian, though it is contained by Promethean
// http://forum.sagittal.org/viewtopic.php?p=885&sid=832fe7e77de7aae89234e3dbb67f8fb9#p885
const TROJAN_SYMBOL_CLASS_IDS: Array<Id<SymbolClass>> = [
    0, 30, 52, 44, 70, 34, 58, 67, 82, 105, 115, 142,
] as Array<Id<SymbolClass>>

const SYMBOL_SUBSET_SYMBOL_CLASS_IDS: Record<SymbolSubset, Array<Id<SymbolClass>>> = {
    [SymbolSubset.SPARTAN]: SPARTAN_SYMBOL_CLASS_IDS,
    [SymbolSubset.ATHENIAN]: ATHENIAN_SYMBOL_CLASS_IDS,
    [SymbolSubset.TROJAN]: TROJAN_SYMBOL_CLASS_IDS,
    [SymbolSubset.PROMETHEAN]: PROMETHEAN_SYMBOL_CLASS_IDS,
    [SymbolSubset.HERCULEAN]: HERCULEAN_SYMBOL_CLASS_IDS,
    [SymbolSubset.OLYMPIAN]: OLYMPIAN_SYMBOL_CLASS_IDS,
    [SymbolSubset.MAGRATHEAN]: MAGRATHEAN_SYMBOL_CLASS_IDS,
}

export {
    SPARTAN_SYMBOL_CLASS_IDS,
    ATHENIAN_SYMBOL_CLASS_IDS,
    TROJAN_SYMBOL_CLASS_IDS,
    PROMETHEAN_SYMBOL_CLASS_IDS,
    HERCULEAN_SYMBOL_CLASS_IDS,
    OLYMPIAN_SYMBOL_CLASS_IDS,
    MAGRATHEAN_SYMBOL_CLASS_IDS,
    SYMBOL_SUBSET_SYMBOL_CLASS_IDS,
}

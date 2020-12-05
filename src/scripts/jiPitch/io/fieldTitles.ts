import {Io} from "@sagittal/general"
import {CommaField, JiPitchesOrFindCommasField, JiPitchField, Two3FreeClassField} from "../types"

const JI_PITCH_FIELD_TITLES: Record<JiPitchField, Io> = {
    [JiPitchField.QUOTIENT]: "quotient" as Io,
    [JiPitchField.MONZO]: "monzo" as Io,
    [JiPitchField.CENTS]: "cents" as Io,
    [JiPitchField.APOTOME_SLOPE]: "apotome slope" as Io,
    [JiPitchField.AAS]: "AAS" as Io,
    [JiPitchField.ATE]: "ATE" as Io,
}

const TWO_3_FREE_CLASS_FIELD_TITLES: Record<Two3FreeClassField, Io> = {
    [Two3FreeClassField.TWO_3_FREE_PRIME_LIMIT]: "prime limit" as Io,
    [Two3FreeClassField.TWO_3_FREE_CLASS_NAME]: "name" as Io,
    [Two3FreeClassField.TWO_3_FREE_COPFR]: "CoPFR" as Io,
    [Two3FreeClassField.TWO_3_FREE_SOPFR]: "SoPFR" as Io,
    [Two3FreeClassField.N2D3P9]: "N2D3P9" as Io,
}

const COMMA_FIELD_TITLES: Record<CommaField, Io> = {
    [CommaField.COMMA_CLASS]: "comma class" as Io,
    [CommaField.NAME]: "name" as Io,
    [CommaField.SIZE_CATEGORY]: "size category" as Io,
    // This is spread at the end because the order actually matters.
    ...JI_PITCH_FIELD_TITLES,
}

const JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES: Record<JiPitchesOrFindCommasField, Io> = {
    ...COMMA_FIELD_TITLES,
    // The rest are pretty much the same as TWO_3_FREE_CLASS_FIELD_TITLES,
    // But here we can't assume the "2,3-free class" part b/c there's no 2,3-free class title just above
    [JiPitchesOrFindCommasField.TWO_3_FREE_PRIME_LIMIT]: "2,3-free prime limit" as Io,
    [JiPitchesOrFindCommasField.TWO_3_FREE_CLASS_NAME]: "2,3-free class name" as Io,
    [JiPitchesOrFindCommasField.TWO_3_FREE_COPFR]: "2,3-free class CoPFR" as Io,
    [JiPitchesOrFindCommasField.TWO_3_FREE_SOPFR]: "2,3-free class SoPFR" as Io,
    [JiPitchesOrFindCommasField.N2D3P9]: "2,3-free class N2D3P9" as Io,
}

export {
    JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES,
    JI_PITCH_FIELD_TITLES,
    TWO_3_FREE_CLASS_FIELD_TITLES,
    COMMA_FIELD_TITLES,
}

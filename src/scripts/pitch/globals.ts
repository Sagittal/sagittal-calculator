import {
    DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE,
    DEFAULT_MAX_ABSOLUTE_THREE_EXPONENT,
    DEFAULT_MAX_CENTS,
    DEFAULT_MIN_CENTS,
    DEFAULT_PITCH_SCRIPT_GROUP_MAX_N2D3P9,
    DEFAULT_SORT_KEY,
} from "../../sagittal"

// TODO: and maybe the script group is called "jiPitch" since it's only about JI pitches

const pitchScriptGroupSettings = {
    minCents: DEFAULT_MIN_CENTS,
    maxCents: DEFAULT_MAX_CENTS,
    maxAbsoluteThreeExponent: DEFAULT_MAX_ABSOLUTE_THREE_EXPONENT,
    maxAbsoluteApotomeSlope: DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE,
    maxN2D3P9: DEFAULT_PITCH_SCRIPT_GROUP_MAX_N2D3P9,
    sortKey: DEFAULT_SORT_KEY,
    commaNameOptions: {},
}

export {
    pitchScriptGroupSettings,
}

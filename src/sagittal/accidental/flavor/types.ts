import {Maybe} from "../../../general"
import {Sagittal} from "../symbol"

enum Flavor {
    EVO = "evo",
    REVO = "revo",
}

// Went with "Compatible" over "Conventional" because some of these are arguably unconventional,
// But they are all definitely Sagittal-compatible (and we try to drop assumed "Sagittal" whenever possible).
enum Compatible {
    STEIN_SEMISHARP = "steinSemisharp",
    STEIN_SEMIFLAT = "steinSemiflat",
    STEIN_SESQUISHARP = "steinSesquisharp",
    ZIMMERMANN_SESQUIFLAT = "zimmermannSesquiflat",
    WILSON_PLUS = "wilsonPlus",
    WILSON_MINUS = "wilsonMinus",
    NATURAL = "natural",
    SHARP = "sharp",
    FLAT = "flat",
    DOUBLE_SHARP = "doubleSharp",
    DOUBLE_FLAT = "doubleFlat",
}

interface Accidental<T extends Flavor> extends Sagittal {
    compatible: Maybe<Compatible>,
    _FlavorBrand: T,
}

export {
    Flavor,
    Accidental,
    Compatible,
}

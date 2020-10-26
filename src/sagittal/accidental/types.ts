import {CommaClassId} from "../ji"
import {FlaccoId} from "./flacco"

const {
    WING_WITH_LEFT_SCROLL_AND_DOUBLE_BARB,
    BIRD_WITH_LEFT_SCROLL_AND_DOUBLE_BARB,
    WING_AND_TICK_AGAINST_DOUBLE_ARC,
    TICK_AGAINST_DOUBLE_ARC,
    WING_AGAINST_RIGHT_BARB_AND_ARC,
    RIGHT_BARB_AND_ARC,
    WING_WITH_RIGHT_BARB_AND_ARC,
    WING_AGAINST_DOUBLE_ARC,
    DOUBLE_ARC,
    WING_WITH_DOUBLE_ARC,
    BIRD_WITH_DOUBLE_ARC,
    WING_FROM_TICK_WITH_DOUBLE_ARC,
    TICK_WITH_DOUBLE_ARC,
    WING_AND_TICK_AGAINST_ARC_AND_BARB,
    TICK_AGAINST_ARC_AND_BARB,
    WING_FROM_TICK_AGAINST_ARC_AND_BARB,
    DOUBLE_RIGHT_BARB,
    WING_AGAINST_ARC_AND_BARB,
    ARC_AND_BARB,
    WING_WITH_ARC_AND_BARB,
    BIRD_WITH_ARC_AND_BARB,
    BIRD_AGAINST_LEFT_SCROLL_DOUBLE_RIGHT_BARB,
    WING_AGAINST_LEFT_SCROLL_DOUBLE_RIGHT_BARB,
    LEFT_SCROLL_DOUBLE_RIGHT_BARB,
    WING_WITH_LEFT_SCROLL_DOUBLE_RIGHT_BARB,
    BIRD_WITH_LEFT_SCROLL_DOUBLE_RIGHT_BARB,
    ...SymbolClassId
} = FlaccoId

type excludedOptions =
    | typeof WING_WITH_LEFT_SCROLL_AND_DOUBLE_BARB
    | typeof BIRD_WITH_LEFT_SCROLL_AND_DOUBLE_BARB
    | typeof WING_AND_TICK_AGAINST_DOUBLE_ARC
    | typeof TICK_AGAINST_DOUBLE_ARC
    | typeof WING_AGAINST_RIGHT_BARB_AND_ARC
    | typeof RIGHT_BARB_AND_ARC
    | typeof WING_WITH_RIGHT_BARB_AND_ARC
    | typeof WING_AGAINST_DOUBLE_ARC
    | typeof DOUBLE_ARC
    | typeof WING_WITH_DOUBLE_ARC
    | typeof BIRD_WITH_DOUBLE_ARC
    | typeof WING_FROM_TICK_WITH_DOUBLE_ARC
    | typeof TICK_WITH_DOUBLE_ARC
    | typeof WING_AND_TICK_AGAINST_ARC_AND_BARB
    | typeof TICK_AGAINST_ARC_AND_BARB
    | typeof WING_FROM_TICK_AGAINST_ARC_AND_BARB
    | typeof DOUBLE_RIGHT_BARB
    | typeof WING_AGAINST_ARC_AND_BARB
    | typeof ARC_AND_BARB
    | typeof WING_WITH_ARC_AND_BARB
    | typeof BIRD_WITH_ARC_AND_BARB
    | typeof BIRD_AGAINST_LEFT_SCROLL_DOUBLE_RIGHT_BARB
    | typeof WING_AGAINST_LEFT_SCROLL_DOUBLE_RIGHT_BARB
    | typeof LEFT_SCROLL_DOUBLE_RIGHT_BARB
    | typeof WING_WITH_LEFT_SCROLL_DOUBLE_RIGHT_BARB
    | typeof BIRD_WITH_LEFT_SCROLL_DOUBLE_RIGHT_BARB
type SymbolClassId = Exclude<FlaccoId, excludedOptions>

// TODO: We way want to replace getRepresentativeSagittal called off a comma class with
//  The places which have a comma class might actually want a symbol class in the first place?
interface SymbolClass {
    flaccoId: FlaccoId,
    commaClassId: CommaClassId,
}

enum SymbolSubset {
    COMPATIBLE = "compatible",
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
    TROJAN = "trojan",
}

export {
    SymbolClass,
    SymbolClassId,
    SymbolSubset,
}

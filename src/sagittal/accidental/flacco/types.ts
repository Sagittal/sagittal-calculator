import {Id} from "../../../general"

enum Accent {
    TICK = "tick",
    WING = "wing",
    BIRD = "bird",
}

enum Orientation {
    WITH = "with",
    AGAINST = "against",
}

type OrientedAccent = {
    orientation: Orientation,
    accent: Accent,
}

type Arm = Array<OrientedAccent>

enum ArmName {
    WING = "wing",
    BIRD = "bird",
    WING_FROM_TICK = "wingFromTick",
    TICK = "tick",
    WING_AND_TICK = "wingAndTick",
}

enum Flag {
    BARB = "barb",
    SCROLL = "scroll",
    ARC = "arc",
    BOATHOOK = "boathook",
}

enum HeadName {
    BARE_SHAFT = "bareShaft",
    RIGHT_SCROLL = "rightScroll",
    LEFT_BARB = "leftBarb",
    RIGHT_ARC = "rightArc",
    DOUBLE_LEFT_BARB = "doubleLeftBarb",
    BARB_AND_ARC = "barbAndArc",
    DOUBLE_BARB = "doubleBarb",
    DOUBLE_ARC = "doubleArc",
    ARC_AND_BARB = "arcAndBarb",
    DOUBLE_SCROLL = "doubleScroll",
    BOATHOOK_AND_SCROLL = "boathookAndScroll",
    RIGHT_BARB = "rightBarb",
    LEFT_ARC = "leftArc",
    ARC_AND_SCROLL = "arcAndScroll",
    RIGHT_BOATHOOK = "rightBoathook",
    LEFT_SCROLL_AND_BARB = "leftScrollAndBarb",
    BARB_AND_BOATHOOK = "barbAndBoathook",
    LEFT_SCROLL = "leftScroll",
    LEFT_BOATHOOK = "leftBoathook",
    LEFT_SCROLL_AND_BOATHOOK = "leftScrollAndBoathook",
    DOUBLE_LEFT_BOATHOOK = "doubleLeftBoathook",
    SCROLL_AND_BOATHOOK = "scrollAndBoathook",
    SCROLL_AND_ARC = "scrollAndArc",
    BOATHOOK_AND_ARC = "boathookAndArc",
    BOATHOOK_AND_BARB = "boathookAndBarb",
    LEFT_SCROLL_DOUBLE_LEFT_BARB = "leftScrollDoubleLeftBarb",
    ARC_AND_BOATHOOK = "arcAndBoathook",
    LEFT_ARC_AND_BARB = "leftArcAndBarb",
    LEFT_SCROLL_AND_DOUBLE_BARB = "leftScrollAndDoubleBarb",
    RIGHT_BARB_AND_ARC = "rightBarbAndArc",
    DOUBLE_RIGHT_BARB = "doubleRightBarb",
    LEFT_SCROLL_DOUBLE_RIGHT_BARB = "leftScrollDoubleRightBarb",
}

interface Head {
    left?: Flag[],
    right?: Flag[],
}

interface Symbolic {
    arm?: Arm,
    core?: Head,
}

// Flag and Accent Combination; basically a "symbol class" (see: http://forum.sagittal.org/viewtopic.php?p=2474#p2474)
interface Flacco extends Symbolic {
    id: Id<Flacco>,
}

enum FlaccoSubset {
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
    FlaccoSubset,
    Flacco,
    Flag,
    Accent,
    Head,
    HeadName,
    Symbolic,
    Arm,
    ArmName,
    Orientation,
    OrientedAccent,
}

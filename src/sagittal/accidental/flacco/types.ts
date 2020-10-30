enum AccentId {
    TICK = "tick",
    WING = "wing",
    BIRD = "bird",
}

type Accent = {
    id: AccentId,
    anti?: boolean,
}

type Arm = Array<Accent>

enum ArmId {
    WING = "wing",
    BIRD = "bird",
    ANTIWING_AND_TICK = "antiwingAndTick",
    TICK = "tick",
    WING_AND_TICK = "wingAndTick",
}

enum FlagId {
    BARB = "barb",
    SCROLL = "scroll",
    ARC = "arc",
    BOATHOOK = "boathook",
}

// You *could* make:
/*
type Flag = {
    id: FlagId,
    double?: boolean,
}
 */
// If you strongly wanted parallelism between AccentId -> Accent -> Arm and FlagId -> Flag -> Head.
// However, I feel that because of the way "double" gets used in HeadId both for doubling a specific flag on one side
// And for the case when you've got the same flag on each side (e.g. double barb)
// However: an important consideration that has just occurred to me: by splitting into left and right, you now have to
// Make both of them optional. But if you made it one array of flags, then you'd always have to have at least one.

interface Head {
    left?: FlagId[],
    right?: FlagId[],
}

enum HeadId {
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

enum FlaccoId {
    NULL = "null",
    WING = "wing",
    BIRD = "bird",
    ANTITICK_AND_LEFT_SCROLL = "antitickAndLeftScroll",
    TICK = "tick",
    WING_AND_TICK = "wingAndTick",
    ANTIWING_AND_LEFT_SCROLL = "antiwingAndLeftScroll",
    LEFT_SCROLL = "leftScroll",
    WING_AND_LEFT_SCROLL = "wingAndLeftScroll",
    BIRD_AND_LEFT_SCROLL = "birdAndLeftScroll",
    ANTIBIRD_AND_RIGHT_SCROLL = "antibirdAndRightScroll",
    ANTIWING_AND_RIGHT_SCROLL = "antiwingAndRightScroll",
    RIGHT_SCROLL = "rightScroll",
    WING_AND_RIGHT_SCROLL = "wingAndRightScroll",
    ANTITICK_AND_LEFT_BOATHOOK = "antitickAndLeftBoathook",
    ANTIWING_TICK_AND_RIGHT_SCROLL = "antiwingTickAndRightScroll",
    TICK_AND_RIGHT_SCROLL = "tickAndRightScroll",
    ANTIWING_AND_LEFT_BOATHOOK = "antiwingAndLeftBoathook",
    LEFT_BOATHOOK = "leftBoathook",
    ANTIWING_AND_DOUBLE_SCROLL = "antiwingAndDoubleScroll",
    DOUBLE_SCROLL = "doubleScroll",
    WING_AND_DOUBLE_SCROLL = "wingAndDoubleScroll",
    BIRD_AND_DOUBLE_SCROLL = "birdAndDoubleScroll",
    ANTIWING_TICK_AND_DOUBLE_SCROLL = "antiwingTickAndDoubleScroll",
    TICK_AND_DOUBLE_SCROLL = "tickAndDoubleScroll",
    LEFT_SCROLL_AND_BOATHOOK = "leftScrollAndBoathook",
    ANTITICK_BOATHOOK_AND_SCROLL = "antitickBoathookAndScroll",
    WING_ANTITICK_BOATHOOK_AND_SCROLL = "wingAntitickBoathookAndScroll",
    ANTIBIRD_BOATHOOK_AND_SCROLL = "antibirdBoathookAndScroll",
    ANTIWING_BOATHOOK_AND_SCROLL = "antiwingBoathookAndScroll",
    BOATHOOK_AND_SCROLL = "boathookAndScroll",
    WING_BOATHOOK_AND_SCROLL = "wingBoathookAndScroll",
    ANTIBIRD_AND_RIGHT_BOATHOOK = "antibirdAndRightBoathook",
    ANTIWING_AND_RIGHT_BOATHOOK = "antiwingAndRightBoathook",
    RIGHT_BOATHOOK = "rightBoathook",
    WING_AND_RIGHT_BOATHOOK = "wingAndRightBoathook",
    DOUBLE_LEFT_BOATHOOK = "doubleLeftBoathook",
    WING_AND_DOUBLE_LEFT_BOATHOOK = "wingAndDoubleLeftBoathook",
    BIRD_AND_DOUBLE_LEFT_BOATHOOK = "birdAndDoubleLeftBoathook",
    ANTIWING_ANTITICK_AND_LEFT_BARB = "antiwingAntitickAndLeftBarb",
    ANTITICK_AND_LEFT_BARB = "antitickAndLeftBarb",
    SCROLL_AND_BOATHOOK = "scrollAndBoathook",
    ANTIBIRD_AND_LEFT_BARB = "antibirdAndLeftBarb",
    ANTIWING_AND_LEFT_BARB = "antiwingAndLeftBarb",
    LEFT_BARB = "leftBarb",
    WING_AND_LEFT_BARB = "wingAndLeftBarb",
    BIRD_AND_LEFT_BARB = "birdAndLeftBarb",
    ANTITICK_AND_LEFT_SCROLL_AND_BARB = "antitickAndLeftScrollAndBarb",
    TICK_AND_LEFT_BARB = "tickAndLeftBarb",
    WING_TICK_AND_LEFT_BARB = "wingTickAndLeftBarb",
    ANTIBIRD_AND_LEFT_SCROLL_AND_BARB = "antibirdAndLeftScrollAndBarb",
    ANTIWING_AND_LEFT_SCROLL_AND_BARB = "antiwingAndLeftScrollAndBarb",
    LEFT_SCROLL_AND_BARB = "leftScrollAndBarb",
    ANTIWING_ANTITICK_AND_RIGHT_ARC = "antiwingAntitickAndRightArc",
    ANTITICK_AND_RIGHT_ARC = "antitickAndRightArc",
    WING_ANTITICK_AND_RIGHT_ARC = "wingAntitickAndRightArc",
    ANTIBIRD_AND_RIGHT_ARC = "antibirdAndRightArc",
    ANTIWING_AND_RIGHT_ARC = "antiwingAndRightArc",
    RIGHT_ARC = "rightArc",
    WING_AND_RIGHT_ARC = "wingAndRightArc",
    BIRD_AND_RIGHT_ARC = "birdAndRightArc",
    ANTIWING_TICK_AND_RIGHT_ARC = "antiwingTickAndRightArc",
    TICK_AND_RIGHT_ARC = "tickAndRightArc",
    WING_TICK_AND_RIGHT_ARC = "wingTickAndRightArc",
    ANTIWING_SCROLL_AND_ARC = "antiwingScrollAndArc",
    SCROLL_AND_ARC = "scrollAndArc",
    ANTITICK_AND_LEFT_ARC = "antitickAndLeftArc",
    RIGHT_BARB = "rightBarb",
    WING_AND_RIGHT_BARB = "wingAndRightBarb",
    ANTIWING_AND_LEFT_ARC = "antiwingAndLeftArc",
    LEFT_ARC = "leftArc",
    WING_AND_LEFT_ARC = "wingAndLeftArc",
    BIRD_AND_LEFT_ARC = "birdAndLeftArc",
    ANTIWING_TICK_AND_LEFT_ARC = "antiwingTickAndLeftArc",
    TICK_AND_LEFT_ARC = "tickAndLeftArc",
    ANTIWING_BOATHOOK_AND_ARC = "antiwingBoathookAndArc",
    BOATHOOK_AND_ARC = "boathookAndArc",
    WING_BOATHOOK_AND_ARC = "wingBoathookAndArc",
    ANTIWING_ANTITICK_ARC_AND_SCROLL = "antiwingAntitickArcAndScroll",
    ANTITICK_ARC_AND_SCROLL = "antitickArcAndScroll",
    TICK_BOATHOOK_AND_ARC = "tickBoathookAndArc",
    BARB_AND_BOATHOOK = "barbAndBoathook",
    ANTIBIRD_ARC_AND_SCROLL = "antibirdArcAndScroll",
    ANTIWING_ARC_AND_SCROLL = "antiwingArcAndScroll",
    ARC_AND_SCROLL = "arcAndScroll",
    WING_ARC_AND_SCROLL = "wingArcAndScroll",
    BOATHOOK_AND_BARB = "boathookAndBarb",
    ANTIWING_ANTITICK_AND_DOUBLE_LEFT_BARB = "antiwingAntitickAndDoubleLeftBarb",
    ANTITICK_AND_DOUBLE_LEFT_BARB = "antitickAndDoubleLeftBarb",
    WING_ANTITICK_AND_DOUBLE_LEFT_BARB = "wingAntitickAndDoubleLeftBarb",
    ANTIBIRD_AND_DOUBLE_LEFT_BARB = "antibirdAndDoubleLeftBarb",
    ANTIWING_AND_DOUBLE_LEFT_BARB = "antiwingAndDoubleLeftBarb",
    DOUBLE_LEFT_BARB = "doubleLeftBarb",
    WING_AND_DOUBLE_LEFT_BARB = "wingAndDoubleLeftBarb",
    BIRD_AND_DOUBLE_LEFT_BARB = "birdAndDoubleLeftBarb",
    ANTIWING_TICK_AND_DOUBLE_LEFT_BARB = "antiwingTickAndDoubleLeftBarb",
    TICK_AND_DOUBLE_LEFT_BARB = "tickAndDoubleLeftBarb",
    ANTIBIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB = "antibirdAndLeftScrollDoubleLeftBarb",
    ANTIWING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB = "antiwingAndLeftScrollDoubleLeftBarb",
    LEFT_SCROLL_DOUBLE_LEFT_BARB = "leftScrollDoubleLeftBarb",
    WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB = "wingAndLeftScrollDoubleLeftBarb",
    BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB = "birdAndLeftScrollDoubleLeftBarb",
    ANTIBIRD_BARB_AND_ARC = "antibirdBarbAndArc",
    ANTIWING_BARB_AND_ARC = "antiwingBarbAndArc",
    BARB_AND_ARC = "barbAndArc",
    WING_BARB_AND_ARC = "wingBarbAndArc",
    ARC_AND_BOATHOOK = "arcAndBoathook",
    ANTIWING_TICK_BARB_AND_ARC = "antiwingTickBarbAndArc",
    TICK_BARB_AND_ARC = "tickBarbAndArc",
    WING_TICK_BARB_AND_ARC = "wingTickBarbAndArc",
    ANTITICK_AND_DOUBLE_BARB = "antitickAndDoubleBarb",
    WING_ANTITICK_AND_DOUBLE_BARB = "wingAntitickAndDoubleBarb",
    ANTIBIRD_AND_DOUBLE_BARB = "antibirdAndDoubleBarb",
    ANTIWING_AND_DOUBLE_BARB = "antiwingAndDoubleBarb",
    DOUBLE_BARB = "doubleBarb",
    WING_AND_DOUBLE_BARB = "wingAndDoubleBarb",
    ANTIWING_AND_LEFT_ARC_AND_BARB = "antiwingAndLeftArcAndBarb",
    LEFT_ARC_AND_BARB = "leftArcAndBarb",
    WING_AND_LEFT_ARC_AND_BARB = "wingAndLeftArcAndBarb",
    TICK_AND_DOUBLE_BARB = "tickAndDoubleBarb",
    WING_TICK_AND_DOUBLE_BARB = "wingTickAndDoubleBarb",
    ANTIWING_LEFT_SCROLL_AND_DOUBLE_BARB = "antiwingLeftScrollAndDoubleBarb",
    LEFT_SCROLL_AND_DOUBLE_BARB = "leftScrollAndDoubleBarb",
    WING_LEFT_SCROLL_AND_DOUBLE_BARB = "wingLeftScrollAndDoubleBarb",
    BIRD_LEFT_SCROLL_AND_DOUBLE_BARB = "birdLeftScrollAndDoubleBarb",
    ANTIWING_ANTITICK_AND_DOUBLE_ARC = "antiwingAntitickAndDoubleArc",
    ANTITICK_AND_DOUBLE_ARC = "antitickAndDoubleArc",
    ANTIWING_AND_RIGHT_BARB_AND_ARC = "antiwingAndRightBarbAndArc",
    RIGHT_BARB_AND_ARC = "rightBarbAndArc",
    WING_AND_RIGHT_BARB_AND_ARC = "wingAndRightBarbAndArc",
    ANTIWING_AND_DOUBLE_ARC = "antiwingAndDoubleArc",
    DOUBLE_ARC = "doubleArc",
    WING_AND_DOUBLE_ARC = "wingAndDoubleArc",
    BIRD_AND_DOUBLE_ARC = "birdAndDoubleArc",
    ANTIWING_TICK_AND_DOUBLE_ARC = "antiwingTickAndDoubleArc",
    TICK_AND_DOUBLE_ARC = "tickAndDoubleArc",
    ANTIWING_ANTITICK_ARC_AND_BARB = "antiwingAntitickArcAndBarb",
    ANTITICK_ARC_AND_BARB = "antitickArcAndBarb",
    WING_ANTITICK_ARC_AND_BARB = "wingAntitickArcAndBarb",
    DOUBLE_RIGHT_BARB = "doubleRightBarb",
    ANTIWING_ARC_AND_BARB = "antiwingArcAndBarb",
    ARC_AND_BARB = "arcAndBarb",
    WING_ARC_AND_BARB = "wingArcAndBarb",
    BIRD_ARC_AND_BARB = "birdArcAndBarb",
    ANTIBIRD_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB = "antibirdAndLeftScrollDoubleRightBarb",
    ANTIWING_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB = "antiwingAndLeftScrollDoubleRightBarb",
    LEFT_SCROLL_DOUBLE_RIGHT_BARB = "leftScrollDoubleRightBarb",
    WING_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB = "wingAndLeftScrollDoubleRightBarb",
    BIRD_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB = "birdAndLeftScrollDoubleRightBarb",
}

// FlagId and AccentId Combination (see: http://forum.sagittal.org/viewtopic.php?p=2474#p2474)
interface Flacco extends Head {
    arm?: Arm,
}

export {
    Flacco,
    FlagId,
    AccentId,
    Head,
    HeadId,
    Arm,
    ArmId,
    Accent,
    FlaccoId,
}

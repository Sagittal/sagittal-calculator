import {Id} from "../../../general"
import {getArm} from "./arms"
import {FLAG_COMBOS} from "./flagCombos"
import {ArmName, Flacco, FlagComboName, Orientation} from "./types"

const FLACCOS: Flacco[] = [
    {
        id: 0 as Id<Flacco>,
    },
    {
        id: 1 as Id<Flacco>,
        arm: getArm(ArmName.WING),
    },
    {
        id: 2 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
    },
    {
        id: 3 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL],
    },
    {
        id: 4 as Id<Flacco>,
        arm: getArm(ArmName.TICK),
    },
    {
        id: 5 as Id<Flacco>,
        arm: getArm(ArmName.WING_AND_TICK),
    },
    {
        id: 6 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL],
    },
    {
        id: 7 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL],
    },
    {
        id: 8 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL],
    },
    {
        id: 9 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL],
    },
    {
        id: 10 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.RIGHT_SCROLL],
    },
    {
        id: 11 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.RIGHT_SCROLL],
    },
    {
        id: 12 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.RIGHT_SCROLL],
    },
    {
        id: 13 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.RIGHT_SCROLL],
    },
    {
        id: 14 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_BOATHOOK],
    },
    {
        id: 15 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK),
        core: FLAG_COMBOS[FlagComboName.RIGHT_SCROLL],
    },
    {
        id: 16 as Id<Flacco>,
        arm: getArm(ArmName.TICK),
        core: FLAG_COMBOS[FlagComboName.RIGHT_SCROLL],
    },
    {
        id: 17 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_BOATHOOK],
    },
    {
        id: 18 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.LEFT_BOATHOOK],
    },
    {
        id: 19 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    {
        id: 20 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    {
        id: 21 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    {
        id: 22 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    {
        id: 23 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    {
        id: 24 as Id<Flacco>,
        arm: getArm(ArmName.TICK),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    {
        id: 25 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BOATHOOK],
    },
    {
        id: 26 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    {
        id: 27 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    {
        id: 28 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    {
        id: 29 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    {
        id: 30 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    {
        id: 31 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    {
        id: 32 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    {
        id: 33 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    {
        id: 34 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    {
        id: 35 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    {
        id: 36 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BOATHOOK],
    },
    {
        id: 37 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BOATHOOK],
    },
    {
        id: 38 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BOATHOOK],
    },
    {
        id: 39 as Id<Flacco>,
        arm: getArm(ArmName.WING_AND_TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    {
        id: 40 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    {
        id: 41 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.SCROLL_AND_BOATHOOK],
    },
    {
        id: 42 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    {
        id: 43 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    {
        id: 44 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    {
        id: 45 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    {
        id: 46 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    {
        id: 47 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    {
        id: 48 as Id<Flacco>,
        arm: getArm(ArmName.TICK),
        core: FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    {
        id: 49 as Id<Flacco>,
        arm: getArm(ArmName.WING_AND_TICK),
        core: FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    {
        id: 50 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    {
        id: 51 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    {
        id: 52 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    {
        id: 53 as Id<Flacco>,
        arm: getArm(ArmName.WING_AND_TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    {
        id: 54 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    {
        id: 55 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    {
        id: 56 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    {
        id: 57 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    {
        id: 58 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    {
        id: 59 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    {
        id: 60 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    {
        id: 61 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK),
        core: FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    {
        id: 62 as Id<Flacco>,
        arm: getArm(ArmName.TICK),
        core: FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    {
        id: 63 as Id<Flacco>,
        arm: getArm(ArmName.WING_AND_TICK),
        core: FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    {
        id: 64 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.SCROLL_AND_ARC],
    },
    {
        id: 65 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.SCROLL_AND_ARC],
    },
    {
        id: 66 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    {
        id: 67 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.RIGHT_BARB],
    },
    {
        id: 68 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.RIGHT_BARB],
    },
    {
        id: 69 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    {
        id: 70 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    {
        id: 71 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    {
        id: 72 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    {
        id: 73 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK),
        core: FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    {
        id: 74 as Id<Flacco>,
        arm: getArm(ArmName.TICK),
        core: FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    {
        id: 75 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    {
        id: 76 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    {
        id: 77 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    {
        id: 78 as Id<Flacco>,
        arm: getArm(ArmName.WING_AND_TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    {
        id: 79 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    {
        id: 80 as Id<Flacco>,
        arm: getArm(ArmName.TICK),
        core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    {
        id: 81 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.BARB_AND_BOATHOOK],
    },
    {
        id: 82 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    {
        id: 83 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    {
        id: 84 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    {
        id: 85 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    {
        id: 86 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_BARB],
    },
    {
        id: 87 as Id<Flacco>,
        arm: getArm(ArmName.WING_AND_TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    {
        id: 88 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    {
        id: 89 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    {
        id: 90 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    {
        id: 91 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    {
        id: 92 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    {
        id: 93 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    {
        id: 94 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    {
        id: 95 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    {
        id: 96 as Id<Flacco>,
        arm: getArm(ArmName.TICK),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    {
        id: 97 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    {
        id: 98 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    {
        id: 99 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    {
        id: 100 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    {
        id: 101 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    {
        id: 102 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    {
        id: 103 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    {
        id: 104 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    {
        id: 105 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    {
        id: 106 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.ARC_AND_BOATHOOK],
    },
    {
        id: 107 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK),
        core: FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    {
        id: 108 as Id<Flacco>,
        arm: getArm(ArmName.TICK),
        core: FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    {
        id: 109 as Id<Flacco>,
        arm: getArm(ArmName.WING_AND_TICK),
        core: FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    {
        id: 110 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    {
        id: 111 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    {
        id: 112 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    {
        id: 113 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    {
        id: 114 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    {
        id: 115 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    {
        id: 116 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_ARC_AND_BARB],
    },
    {
        id: 117 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.LEFT_ARC_AND_BARB],
    },
    {
        id: 118 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.LEFT_ARC_AND_BARB],
    },
    {
        id: 119 as Id<Flacco>,
        arm: getArm(ArmName.TICK),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    {
        id: 120 as Id<Flacco>,
        arm: getArm(ArmName.WING_AND_TICK),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    {
        id: 121 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB],
    },
    {
        id: 122 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB],
    },
    {
        id: 123 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB],
    },
    {
        id: 124 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB],
    },
    {
        id: 125 as Id<Flacco>,
        arm: getArm(ArmName.WING_AND_TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    {
        id: 126 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    {
        id: 127 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.RIGHT_BARB_AND_ARC],
    },
    {
        id: 128 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.RIGHT_BARB_AND_ARC],
    },
    {
        id: 129 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.RIGHT_BARB_AND_ARC],
    },
    {
        id: 130 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    {
        id: 131 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    {
        id: 132 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    {
        id: 133 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    {
        id: 134 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    {
        id: 135 as Id<Flacco>,
        arm: getArm(ArmName.TICK),
        core: FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    {
        id: 136 as Id<Flacco>,
        arm: getArm(ArmName.WING_AND_TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.ARC_AND_BARB],
    },
    {
        id: 137 as Id<Flacco>,
        arm: getArm(ArmName.TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.ARC_AND_BARB],
    },
    {
        id: 138 as Id<Flacco>,
        arm: getArm(ArmName.WING_FROM_TICK, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.ARC_AND_BARB],
    },
    {
        id: 139 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.DOUBLE_RIGHT_BARB],
    },
    {
        id: 140 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.ARC_AND_BARB],
    },
    {
        id: 141 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.ARC_AND_BARB],
    },
    {
        id: 142 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.ARC_AND_BARB],
    },
    {
        id: 143 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.ARC_AND_BARB],
    },
    {
        id: 144 as Id<Flacco>,
        arm: getArm(ArmName.BIRD, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    },
    {
        id: 145 as Id<Flacco>,
        arm: getArm(ArmName.WING, Orientation.AGAINST),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    },
    {
        id: 146 as Id<Flacco>,
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    },
    {
        id: 147 as Id<Flacco>,
        arm: getArm(ArmName.WING),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    },
    {
        id: 148 as Id<Flacco>,
        arm: getArm(ArmName.BIRD),
        core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    },
]

export {
    FLACCOS,
}

import {Id} from "../../../general"
import {Accent, Flacco, Flag} from "./types"

const FLACCOS: Flacco[] = [
    {
        id: 0 as Id<Flacco>,
    },
    {
        id: 1 as Id<Flacco>,
        accents: [Accent.WING_WITH],
    },
    {
        id: 2 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
    },
    {
        id: 3 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {left: [Flag.SCROLL]},
    },
    {
        id: 4 as Id<Flacco>,
        accents: [Accent.TICK_WITH],
    },
    {
        id: 5 as Id<Flacco>,
        accents: [Accent.WING_WITH, Accent.TICK_WITH],
    },
    {
        id: 6 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.SCROLL]},
    },
    {
        id: 7 as Id<Flacco>,
        core: {left: [Flag.SCROLL]},
    },
    {
        id: 8 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.SCROLL]},
    },
    {
        id: 9 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {left: [Flag.SCROLL]},
    },
    {
        id: 10 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {right: [Flag.SCROLL]},
    },
    {
        id: 11 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {right: [Flag.SCROLL]},
    },
    {
        id: 12 as Id<Flacco>,
        core: {right: [Flag.SCROLL]},
    },
    {
        id: 13 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {right: [Flag.SCROLL]},
    },
    {
        id: 14 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {left: [Flag.BOATHOOK]},
    },
    {
        id: 15 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_WITH],
        core: {right: [Flag.SCROLL]},
    },
    {
        id: 16 as Id<Flacco>,
        accents: [Accent.TICK_WITH],
        core: {right: [Flag.SCROLL]},
    },
    {
        id: 17 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.BOATHOOK]},
    },
    {
        id: 18 as Id<Flacco>,
        core: {left: [Flag.BOATHOOK]},
    },
    {
        id: 19 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.SCROLL], right: [Flag.SCROLL]},
    },
    {
        id: 20 as Id<Flacco>,
        core: {left: [Flag.SCROLL], right: [Flag.SCROLL]},
    },
    {
        id: 21 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.SCROLL], right: [Flag.SCROLL]},
    },
    {
        id: 22 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {left: [Flag.SCROLL], right: [Flag.SCROLL]},
    },
    {
        id: 23 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_WITH],
        core: {left: [Flag.SCROLL], right: [Flag.SCROLL]},
    },
    {
        id: 24 as Id<Flacco>,
        accents: [Accent.TICK_WITH],
        core: {left: [Flag.SCROLL], right: [Flag.SCROLL]},
    },
    {
        id: 25 as Id<Flacco>,
        core: {left: [Flag.SCROLL, Flag.BOATHOOK]},
    },
    {
        id: 26 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {left: [Flag.BOATHOOK], right: [Flag.SCROLL]},
    },
    {
        id: 27 as Id<Flacco>,
        accents: [Accent.WING_WITH, Accent.TICK_AGAINST],
        core: {left: [Flag.BOATHOOK], right: [Flag.SCROLL]},
    },
    {
        id: 28 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {left: [Flag.BOATHOOK], right: [Flag.SCROLL]},
    },
    {
        id: 29 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.BOATHOOK], right: [Flag.SCROLL]},
    },
    {
        id: 30 as Id<Flacco>,
        core: {left: [Flag.BOATHOOK], right: [Flag.SCROLL]},
    },
    {
        id: 31 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.BOATHOOK], right: [Flag.SCROLL]},
    },
    {
        id: 32 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {right: [Flag.BOATHOOK]},
    },
    {
        id: 33 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {right: [Flag.BOATHOOK]},
    },
    {
        id: 34 as Id<Flacco>,
        core: {right: [Flag.BOATHOOK]},
    },
    {
        id: 35 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {right: [Flag.BOATHOOK]},
    },
    {
        id: 36 as Id<Flacco>,
        core: {left: [Flag.BOATHOOK, Flag.BOATHOOK]},
    },
    {
        id: 37 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.BOATHOOK, Flag.BOATHOOK]},
    },
    {
        id: 38 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {left: [Flag.BOATHOOK, Flag.BOATHOOK]},
    },
    {
        id: 39 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_AGAINST],
        core: {left: [Flag.BARB]},
    },
    {
        id: 40 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {left: [Flag.BARB]},
    },
    {
        id: 41 as Id<Flacco>,
        core: {left: [Flag.SCROLL], right: [Flag.BOATHOOK]},
    },
    {
        id: 42 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {left: [Flag.BARB]},
    },
    {
        id: 43 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.BARB]},
    },
    {
        id: 44 as Id<Flacco>,
        core: {left: [Flag.BARB]},
    },
    {
        id: 45 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.BARB]},
    },
    {
        id: 46 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {left: [Flag.BARB]},
    },
    {
        id: 47 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {left: [Flag.SCROLL, Flag.BARB]},
    },
    {
        id: 48 as Id<Flacco>,
        accents: [Accent.TICK_WITH],
        core: {left: [Flag.BARB]},
    },
    {
        id: 49 as Id<Flacco>,
        accents: [Accent.WING_WITH, Accent.TICK_WITH],
        core: {left: [Flag.BARB]},
    },
    {
        id: 50 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {left: [Flag.SCROLL, Flag.BARB]},
    },
    {
        id: 51 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.SCROLL, Flag.BARB]},
    },
    {
        id: 52 as Id<Flacco>,
        core: {left: [Flag.SCROLL, Flag.BARB]},
    },
    {
        id: 53 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_AGAINST],
        core: {right: [Flag.ARC]},
    },
    {
        id: 54 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {right: [Flag.ARC]},
    },
    {
        id: 55 as Id<Flacco>,
        accents: [Accent.WING_WITH, Accent.TICK_AGAINST],
        core: {right: [Flag.ARC]},
    },
    {
        id: 56 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {right: [Flag.ARC]},
    },
    {
        id: 57 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {right: [Flag.ARC]},
    },
    {
        id: 58 as Id<Flacco>,
        core: {right: [Flag.ARC]},
    },
    {
        id: 59 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {right: [Flag.ARC]},
    },
    {
        id: 60 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {right: [Flag.ARC]},
    },
    {
        id: 61 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_WITH],
        core: {right: [Flag.ARC]},
    },
    {
        id: 62 as Id<Flacco>,
        accents: [Accent.TICK_WITH],
        core: {right: [Flag.ARC]},
    },
    {
        id: 63 as Id<Flacco>,
        accents: [Accent.WING_WITH, Accent.TICK_WITH],
        core: {right: [Flag.ARC]},
    },
    {
        id: 64 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.SCROLL], right: [Flag.ARC]},
    },
    {
        id: 65 as Id<Flacco>,
        core: {left: [Flag.SCROLL], right: [Flag.ARC]},
    },
    {
        id: 66 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {left: [Flag.ARC]},
    },
    {
        id: 67 as Id<Flacco>,
        core: {right: [Flag.BARB]},
    },
    {
        id: 68 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {right: [Flag.BARB]},
    },
    {
        id: 69 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.ARC]},
    },
    {
        id: 70 as Id<Flacco>,
        core: {left: [Flag.ARC]},
    },
    {
        id: 71 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.ARC]},
    },
    {
        id: 72 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {left: [Flag.ARC]},
    },
    {
        id: 73 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_WITH],
        core: {left: [Flag.ARC]},
    },
    {
        id: 74 as Id<Flacco>,
        accents: [Accent.TICK_WITH],
        core: {left: [Flag.ARC]},
    },
    {
        id: 75 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.BOATHOOK], right: [Flag.ARC]},
    },
    {
        id: 76 as Id<Flacco>,
        core: {left: [Flag.BOATHOOK], right: [Flag.ARC]},
    },
    {
        id: 77 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.BOATHOOK], right: [Flag.ARC]},
    },
    {
        id: 78 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_AGAINST],
        core: {left: [Flag.ARC], right: [Flag.SCROLL]},
    },
    {
        id: 79 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {left: [Flag.ARC], right: [Flag.SCROLL]},
    },
    {
        id: 80 as Id<Flacco>,
        accents: [Accent.TICK_WITH],
        core: {left: [Flag.BOATHOOK], right: [Flag.ARC]},
    },
    {
        id: 81 as Id<Flacco>,
        core: {left: [Flag.BARB], right: [Flag.BOATHOOK]},
    },
    {
        id: 82 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {left: [Flag.ARC], right: [Flag.SCROLL]},
    },
    {
        id: 83 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.ARC], right: [Flag.SCROLL]},
    },
    {
        id: 84 as Id<Flacco>,
        core: {left: [Flag.ARC], right: [Flag.SCROLL]},
    },
    {
        id: 85 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.ARC], right: [Flag.SCROLL]},
    },
    {
        id: 86 as Id<Flacco>,
        core: {left: [Flag.BOATHOOK], right: [Flag.BARB]},
    },
    {
        id: 87 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_AGAINST],
        core: {left: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 88 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {left: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 89 as Id<Flacco>,
        accents: [Accent.WING_WITH, Accent.TICK_AGAINST],
        core: {left: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 90 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {left: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 91 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 92 as Id<Flacco>,
        core: {left: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 93 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 94 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {left: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 95 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_WITH],
        core: {left: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 96 as Id<Flacco>,
        accents: [Accent.TICK_WITH],
        core: {left: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 97 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {left: [Flag.SCROLL, Flag.BARB, Flag.BARB]},
    },
    {
        id: 98 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.SCROLL, Flag.BARB, Flag.BARB]},
    },
    {
        id: 99 as Id<Flacco>,
        core: {left: [Flag.SCROLL, Flag.BARB, Flag.BARB]},
    },
    {
        id: 100 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.SCROLL, Flag.BARB, Flag.BARB]},
    },
    {
        id: 101 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {left: [Flag.SCROLL, Flag.BARB, Flag.BARB]},
    },
    {
        id: 102 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {left: [Flag.BARB], right: [Flag.ARC]},
    },
    {
        id: 103 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.BARB], right: [Flag.ARC]},
    },
    {
        id: 104 as Id<Flacco>,
        core: {left: [Flag.BARB], right: [Flag.ARC]},
    },
    {
        id: 105 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.BARB], right: [Flag.ARC]},
    },
    {
        id: 106 as Id<Flacco>,
        core: {left: [Flag.ARC], right: [Flag.BOATHOOK]},
    },
    {
        id: 107 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_WITH],
        core: {left: [Flag.BARB], right: [Flag.ARC]},
    },
    {
        id: 108 as Id<Flacco>,
        accents: [Accent.TICK_WITH],
        core: {left: [Flag.BARB], right: [Flag.ARC]},
    },
    {
        id: 109 as Id<Flacco>,
        accents: [Accent.WING_WITH, Accent.TICK_WITH],
        core: {left: [Flag.BARB], right: [Flag.ARC]},
    },
    {
        id: 110 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {left: [Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 111 as Id<Flacco>,
        accents: [Accent.WING_WITH, Accent.TICK_AGAINST],
        core: {left: [Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 112 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {left: [Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 113 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 114 as Id<Flacco>,
        core: {left: [Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 115 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 116 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.ARC, Flag.BARB]},
    },
    {
        id: 117 as Id<Flacco>,
        core: {left: [Flag.ARC, Flag.BARB]},
    },
    {
        id: 118 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.ARC, Flag.BARB]},
    },
    {
        id: 119 as Id<Flacco>,
        accents: [Accent.TICK_WITH],
        core: {left: [Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 120 as Id<Flacco>,
        accents: [Accent.WING_WITH, Accent.TICK_WITH],
        core: {left: [Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 121 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.SCROLL, Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 122 as Id<Flacco>,
        core: {left: [Flag.SCROLL, Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 123 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.SCROLL, Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 124 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {left: [Flag.SCROLL, Flag.BARB], right: [Flag.BARB]},
    },
    {
        id: 125 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_AGAINST],
        core: {left: [Flag.ARC], right: [Flag.ARC]},
    },
    {
        id: 126 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {left: [Flag.ARC], right: [Flag.ARC]},
    },
    {
        id: 127 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {right: [Flag.BARB, Flag.ARC]},
    },
    {
        id: 128 as Id<Flacco>,
        core: {right: [Flag.BARB, Flag.ARC]},
    },
    {
        id: 129 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {right: [Flag.BARB, Flag.ARC]},
    },
    {
        id: 130 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.ARC], right: [Flag.ARC]},
    },
    {
        id: 131 as Id<Flacco>,
        core: {left: [Flag.ARC], right: [Flag.ARC]},
    },
    {
        id: 132 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.ARC], right: [Flag.ARC]},
    },
    {
        id: 133 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {left: [Flag.ARC], right: [Flag.ARC]},
    },
    {
        id: 134 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_WITH],
        core: {left: [Flag.ARC], right: [Flag.ARC]},
    },
    {
        id: 135 as Id<Flacco>,
        accents: [Accent.TICK_WITH],
        core: {left: [Flag.ARC], right: [Flag.ARC]},
    },
    {
        id: 136 as Id<Flacco>,
        accents: [Accent.WING_AGAINST, Accent.TICK_AGAINST],
        core: {left: [Flag.ARC], right: [Flag.BARB]},
    },
    {
        id: 137 as Id<Flacco>,
        accents: [Accent.TICK_AGAINST],
        core: {left: [Flag.ARC], right: [Flag.BARB]},
    },
    {
        id: 138 as Id<Flacco>,
        accents: [Accent.WING_WITH, Accent.TICK_AGAINST],
        core: {left: [Flag.ARC], right: [Flag.BARB]},
    },
    {
        id: 139 as Id<Flacco>,
        core: {right: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 140 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.ARC], right: [Flag.BARB]},
    },
    {
        id: 141 as Id<Flacco>,
        core: {left: [Flag.ARC], right: [Flag.BARB]},
    },
    {
        id: 142 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.ARC], right: [Flag.BARB]},
    },
    {
        id: 143 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {left: [Flag.ARC], right: [Flag.BARB]},
    },
    {
        id: 144 as Id<Flacco>,
        accents: [Accent.BIRD_AGAINST],
        core: {left: [Flag.SCROLL], right: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 145 as Id<Flacco>,
        accents: [Accent.WING_AGAINST],
        core: {left: [Flag.SCROLL], right: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 146 as Id<Flacco>,
        core: {left: [Flag.SCROLL], right: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 147 as Id<Flacco>,
        accents: [Accent.WING_WITH],
        core: {left: [Flag.SCROLL], right: [Flag.BARB, Flag.BARB]},
    },
    {
        id: 148 as Id<Flacco>,
        accents: [Accent.BIRD_WITH],
        core: {left: [Flag.SCROLL], right: [Flag.BARB, Flag.BARB]},
    },
]

export {
    FLACCOS,
}

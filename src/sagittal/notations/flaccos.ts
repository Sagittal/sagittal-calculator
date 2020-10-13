import { Id } from "../../general"
import {
    FIVE_MINAS_DOWN,
    FIVE_MINAS_UP,
    FOUR_MINAS_DOWN,
    FOUR_MINAS_UP,
    ONE_MINA_DOWN,
    ONE_MINA_UP,
    THREE_MINAS_DOWN,
    THREE_MINAS_UP,
    TWO_MINAS_DOWN,
    TWO_MINAS_UP,
} from "./accents"
import {
    DOUBLE_ARC,
    DOUBLE_BARB,
    DOUBLE_LEFT_BARB,
    DOUBLE_LEFT_BOATHOOK,
    DOUBLE_RIGHT_BARB,
    DOUBLE_SCROLL,
    LEFT_ARC,
    LEFT_ARC_AND_BARB,
    LEFT_ARC_RIGHT_BARB,
    LEFT_ARC_RIGHT_BOATHOOK,
    LEFT_ARC_RIGHT_SCROLL,
    LEFT_BARB,
    LEFT_BARB_RIGHT_ARC,
    LEFT_BARB_RIGHT_BOATHOOK,
    LEFT_BOATHOOK,
    LEFT_BOATHOOK_RIGHT_ARC,
    LEFT_BOATHOOK_RIGHT_BARB,
    LEFT_BOATHOOK_RIGHT_SCROLL,
    LEFT_SCROLL,
    LEFT_SCROLL_AND_BARB,
    LEFT_SCROLL_AND_BOATHOOK,
    LEFT_SCROLL_AND_DOUBLE_BARB,
    LEFT_SCROLL_AND_DOUBLE_LEFT_BARB,
    LEFT_SCROLL_DOUBLE_RIGHT_BARB,
    LEFT_SCROLL_RIGHT_ARC,
    LEFT_SCROLL_RIGHT_BOATHOOK,
    RIGHT_ARC,
    RIGHT_BARB,
    RIGHT_BARB_AND_ARC,
    RIGHT_BOATHOOK,
    RIGHT_SCROLL,
} from "./cores"
import { Flacco } from "./types"

const FLACCOS: Flacco[] = [
    { id: 0 as Id<Flacco>, combo: [] },
    { id: 1 as Id<Flacco>, combo: [...ONE_MINA_UP] },
    { id: 2 as Id<Flacco>, combo: [...TWO_MINAS_UP] },

    { id: 3 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...LEFT_SCROLL] },

    { id: 4 as Id<Flacco>, combo: [...FOUR_MINAS_UP] },
    { id: 5 as Id<Flacco>, combo: [...FIVE_MINAS_UP] },

    { id: 6 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_SCROLL] },
    { id: 7 as Id<Flacco>, combo: [...LEFT_SCROLL] },
    { id: 8 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_SCROLL] },
    { id: 9 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...LEFT_SCROLL] },

    { id: 10 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...RIGHT_SCROLL] },
    { id: 11 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...RIGHT_SCROLL] },
    { id: 12 as Id<Flacco>, combo: [...RIGHT_SCROLL] },
    { id: 13 as Id<Flacco>, combo: [...ONE_MINA_UP, ...RIGHT_SCROLL] },

    { id: 14 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...LEFT_BOATHOOK] },

    { id: 15 as Id<Flacco>, combo: [...THREE_MINAS_UP, ...RIGHT_SCROLL] },
    { id: 16 as Id<Flacco>, combo: [...FOUR_MINAS_UP, ...RIGHT_SCROLL] },

    { id: 17 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_BOATHOOK] },
    { id: 18 as Id<Flacco>, combo: [...LEFT_BOATHOOK] },

    { id: 19 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...DOUBLE_SCROLL] },
    { id: 20 as Id<Flacco>, combo: [...DOUBLE_SCROLL] },
    { id: 21 as Id<Flacco>, combo: [...ONE_MINA_UP, ...DOUBLE_SCROLL] },
    { id: 22 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...DOUBLE_SCROLL] },
    { id: 23 as Id<Flacco>, combo: [...THREE_MINAS_UP, ...DOUBLE_SCROLL] },
    { id: 24 as Id<Flacco>, combo: [...FOUR_MINAS_UP, ...DOUBLE_SCROLL] },

    { id: 25 as Id<Flacco>, combo: [...LEFT_SCROLL_AND_BOATHOOK] },

    { id: 26 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...LEFT_BOATHOOK_RIGHT_SCROLL] },
    { id: 27 as Id<Flacco>, combo: [...THREE_MINAS_DOWN, ...LEFT_BOATHOOK_RIGHT_SCROLL] },
    { id: 28 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...LEFT_BOATHOOK_RIGHT_SCROLL] },
    { id: 29 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_BOATHOOK_RIGHT_SCROLL] },
    { id: 30 as Id<Flacco>, combo: [...LEFT_BOATHOOK_RIGHT_SCROLL] },
    { id: 31 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_BOATHOOK_RIGHT_SCROLL] },

    { id: 32 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...RIGHT_BOATHOOK] },
    { id: 33 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...RIGHT_BOATHOOK] },
    { id: 34 as Id<Flacco>, combo: [...RIGHT_BOATHOOK] },
    { id: 35 as Id<Flacco>, combo: [...ONE_MINA_UP, ...RIGHT_BOATHOOK] },

    { id: 36 as Id<Flacco>, combo: [...DOUBLE_LEFT_BOATHOOK] },
    { id: 37 as Id<Flacco>, combo: [...ONE_MINA_UP, ...DOUBLE_LEFT_BOATHOOK] },
    { id: 38 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...DOUBLE_LEFT_BOATHOOK] },

    { id: 39 as Id<Flacco>, combo: [...FIVE_MINAS_DOWN, ...LEFT_BARB] },
    { id: 40 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...LEFT_BARB] },

    { id: 41 as Id<Flacco>, combo: [...LEFT_SCROLL_RIGHT_BOATHOOK] },

    { id: 42 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...LEFT_BARB] },
    { id: 43 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_BARB] },
    { id: 44 as Id<Flacco>, combo: [...LEFT_BARB] },
    { id: 45 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_BARB] },
    { id: 46 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...LEFT_BARB] },

    { id: 47 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...LEFT_SCROLL_AND_BARB] },

    { id: 48 as Id<Flacco>, combo: [...FOUR_MINAS_UP, ...LEFT_BARB] },
    { id: 49 as Id<Flacco>, combo: [...FIVE_MINAS_UP, ...LEFT_BARB] },

    { id: 50 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...LEFT_SCROLL_AND_BARB] },
    { id: 51 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_SCROLL_AND_BARB] },
    { id: 52 as Id<Flacco>, combo: [...LEFT_SCROLL_AND_BARB] },

    { id: 53 as Id<Flacco>, combo: [...FIVE_MINAS_DOWN, ...RIGHT_ARC] },
    { id: 54 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...RIGHT_ARC] },
    { id: 55 as Id<Flacco>, combo: [...THREE_MINAS_DOWN, ...RIGHT_ARC] },
    { id: 56 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...RIGHT_ARC] },
    { id: 57 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...RIGHT_ARC] },
    { id: 58 as Id<Flacco>, combo: [...RIGHT_ARC] },
    { id: 59 as Id<Flacco>, combo: [...ONE_MINA_UP, ...RIGHT_ARC] },
    { id: 60 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...RIGHT_ARC] },
    { id: 61 as Id<Flacco>, combo: [...THREE_MINAS_UP, ...RIGHT_ARC] },
    { id: 62 as Id<Flacco>, combo: [...FOUR_MINAS_UP, ...RIGHT_ARC] },
    { id: 63 as Id<Flacco>, combo: [...FIVE_MINAS_UP, ...RIGHT_ARC] },

    { id: 64 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_SCROLL_RIGHT_ARC] },

    { id: 65 as Id<Flacco>, combo: [...LEFT_SCROLL_RIGHT_ARC] },

    { id: 66 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...LEFT_ARC] },

    { id: 67 as Id<Flacco>, combo: [...RIGHT_BARB] },
    { id: 68 as Id<Flacco>, combo: [...ONE_MINA_UP, ...RIGHT_BARB] },

    { id: 69 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_ARC] },
    { id: 70 as Id<Flacco>, combo: [...LEFT_ARC] },
    { id: 71 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_ARC] },
    { id: 72 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...LEFT_ARC] },
    { id: 73 as Id<Flacco>, combo: [...THREE_MINAS_UP, ...LEFT_ARC] },
    { id: 74 as Id<Flacco>, combo: [...FOUR_MINAS_UP, ...LEFT_ARC] },

    { id: 75 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_BOATHOOK_RIGHT_ARC] },
    { id: 76 as Id<Flacco>, combo: [...LEFT_BOATHOOK_RIGHT_ARC] },
    { id: 77 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_BOATHOOK_RIGHT_ARC] },

    { id: 78 as Id<Flacco>, combo: [...FIVE_MINAS_DOWN, ...LEFT_ARC_RIGHT_SCROLL] },
    { id: 79 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...LEFT_ARC_RIGHT_SCROLL] },

    { id: 80 as Id<Flacco>, combo: [...FOUR_MINAS_UP, ...LEFT_BOATHOOK_RIGHT_ARC] },

    { id: 81 as Id<Flacco>, combo: [...LEFT_BARB_RIGHT_BOATHOOK] },

    { id: 82 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...LEFT_ARC_RIGHT_SCROLL] },
    { id: 83 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_ARC_RIGHT_SCROLL] },
    { id: 84 as Id<Flacco>, combo: [...LEFT_ARC_RIGHT_SCROLL] },
    { id: 85 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_ARC_RIGHT_SCROLL] },

    { id: 86 as Id<Flacco>, combo: [...LEFT_BOATHOOK_RIGHT_BARB] },

    { id: 87 as Id<Flacco>, combo: [...FIVE_MINAS_DOWN, ...DOUBLE_LEFT_BARB] },
    { id: 88 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...DOUBLE_LEFT_BARB] },
    { id: 89 as Id<Flacco>, combo: [...THREE_MINAS_DOWN, ...DOUBLE_LEFT_BARB] },
    { id: 90 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...DOUBLE_LEFT_BARB] },
    { id: 91 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...DOUBLE_LEFT_BARB] },
    { id: 92 as Id<Flacco>, combo: [...DOUBLE_LEFT_BARB] },
    { id: 93 as Id<Flacco>, combo: [...ONE_MINA_UP, ...DOUBLE_LEFT_BARB] },
    { id: 94 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...DOUBLE_LEFT_BARB] },
    { id: 95 as Id<Flacco>, combo: [...THREE_MINAS_UP, ...DOUBLE_LEFT_BARB] },
    { id: 96 as Id<Flacco>, combo: [...FOUR_MINAS_UP, ...DOUBLE_LEFT_BARB] },

    { id: 97 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...LEFT_SCROLL_AND_DOUBLE_LEFT_BARB] },
    { id: 98 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_SCROLL_AND_DOUBLE_LEFT_BARB] },
    { id: 99 as Id<Flacco>, combo: [...LEFT_SCROLL_AND_DOUBLE_LEFT_BARB] },
    { id: 100 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_SCROLL_AND_DOUBLE_LEFT_BARB] },
    { id: 101 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...LEFT_SCROLL_AND_DOUBLE_LEFT_BARB] },

    { id: 102 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...LEFT_BARB_RIGHT_ARC] },
    { id: 103 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_BARB_RIGHT_ARC] },
    { id: 104 as Id<Flacco>, combo: [...LEFT_BARB_RIGHT_ARC] },
    { id: 105 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_BARB_RIGHT_ARC] },

    { id: 106 as Id<Flacco>, combo: [...LEFT_ARC_RIGHT_BOATHOOK] },

    { id: 107 as Id<Flacco>, combo: [...THREE_MINAS_UP, ...LEFT_BARB_RIGHT_ARC] },
    { id: 108 as Id<Flacco>, combo: [...FOUR_MINAS_UP, ...LEFT_BARB_RIGHT_ARC] },
    { id: 109 as Id<Flacco>, combo: [...FIVE_MINAS_UP, ...LEFT_BARB_RIGHT_ARC] },

    { id: 110 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...DOUBLE_BARB] },
    { id: 111 as Id<Flacco>, combo: [...THREE_MINAS_DOWN, ...DOUBLE_BARB] },
    { id: 112 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...DOUBLE_BARB] },
    { id: 113 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...DOUBLE_BARB] },
    { id: 114 as Id<Flacco>, combo: [...DOUBLE_BARB] },
    { id: 115 as Id<Flacco>, combo: [...ONE_MINA_UP, ...DOUBLE_BARB] },

    { id: 116 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_ARC_AND_BARB] },
    { id: 117 as Id<Flacco>, combo: [...LEFT_ARC_AND_BARB] },
    { id: 118 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_ARC_AND_BARB] },

    { id: 119 as Id<Flacco>, combo: [...FOUR_MINAS_UP, ...DOUBLE_BARB] },
    { id: 120 as Id<Flacco>, combo: [...FIVE_MINAS_UP, ...DOUBLE_BARB] },

    { id: 121 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_SCROLL_AND_DOUBLE_BARB] },
    { id: 122 as Id<Flacco>, combo: [...LEFT_SCROLL_AND_DOUBLE_BARB] },
    { id: 123 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_SCROLL_AND_DOUBLE_BARB] },
    { id: 124 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...LEFT_SCROLL_AND_DOUBLE_BARB] },

    { id: 125 as Id<Flacco>, combo: [...FIVE_MINAS_DOWN, ...DOUBLE_ARC] },
    { id: 126 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...DOUBLE_ARC] },

    { id: 127 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...RIGHT_BARB_AND_ARC] },
    { id: 128 as Id<Flacco>, combo: [...RIGHT_BARB_AND_ARC] },
    { id: 129 as Id<Flacco>, combo: [...ONE_MINA_UP, ...RIGHT_BARB_AND_ARC] },

    { id: 130 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...DOUBLE_ARC] },
    { id: 131 as Id<Flacco>, combo: [...DOUBLE_ARC] },
    { id: 132 as Id<Flacco>, combo: [...ONE_MINA_UP, ...DOUBLE_ARC] },
    { id: 133 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...DOUBLE_ARC] },
    { id: 134 as Id<Flacco>, combo: [...THREE_MINAS_UP, ...DOUBLE_ARC] },
    { id: 135 as Id<Flacco>, combo: [...FOUR_MINAS_UP, ...DOUBLE_ARC] },

    { id: 136 as Id<Flacco>, combo: [...FIVE_MINAS_DOWN, ...LEFT_ARC_RIGHT_BARB] },
    { id: 137 as Id<Flacco>, combo: [...FOUR_MINAS_DOWN, ...LEFT_ARC_RIGHT_BARB] },
    { id: 138 as Id<Flacco>, combo: [...THREE_MINAS_DOWN, ...LEFT_ARC_RIGHT_BARB] },

    { id: 139 as Id<Flacco>, combo: [...DOUBLE_RIGHT_BARB] },

    { id: 140 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_ARC_RIGHT_BARB] },
    { id: 141 as Id<Flacco>, combo: [...LEFT_ARC_RIGHT_BARB] },
    { id: 142 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_ARC_RIGHT_BARB] },
    { id: 143 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...LEFT_ARC_RIGHT_BARB] },

    { id: 144 as Id<Flacco>, combo: [...TWO_MINAS_DOWN, ...LEFT_SCROLL_DOUBLE_RIGHT_BARB] },
    { id: 145 as Id<Flacco>, combo: [...ONE_MINA_DOWN, ...LEFT_SCROLL_DOUBLE_RIGHT_BARB] },
    { id: 146 as Id<Flacco>, combo: [...LEFT_SCROLL_DOUBLE_RIGHT_BARB] },
    { id: 147 as Id<Flacco>, combo: [...ONE_MINA_UP, ...LEFT_SCROLL_DOUBLE_RIGHT_BARB] },
    { id: 148 as Id<Flacco>, combo: [...TWO_MINAS_UP, ...LEFT_SCROLL_DOUBLE_RIGHT_BARB] },
]

export {
    FLACCOS,
}

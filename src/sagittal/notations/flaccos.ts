import { Id } from "../../general"
import { Accent, Flacco, Flag } from "./types"

const FLACCOS: Flacco[] = [
    {
        id: 0 as Id<Flacco>,
        combo: [] as Array<Flag | Accent>,
    },
    {
        id: 1 as Id<Flacco>,
        combo: ["`|"] as Array<Flag | Accent>,
    },
    {
        id: 2 as Id<Flacco>,
        combo: ["``|"] as Array<Flag | Accent>,
    },
    {
        id: 3 as Id<Flacco>,
        combo: [".|", ")|"] as Array<Flag | Accent>,
    },
    {
        id: 4 as Id<Flacco>,
        combo: ["'|"] as Array<Flag | Accent>,
    },
    {
        id: 5 as Id<Flacco>,
        combo: ["`|", "'|"] as Array<Flag | Accent>,
    },
    {
        id: 6 as Id<Flacco>,
        combo: [",|", ")|"] as Array<Flag | Accent>,
    },
    {
        id: 7 as Id<Flacco>,
        combo: [")|"] as Array<Flag | Accent>,
    },
    {
        id: 8 as Id<Flacco>,
        combo: ["`|", ")|"] as Array<Flag | Accent>,
    },
    {
        id: 9 as Id<Flacco>,
        combo: ["``|", ")|"] as Array<Flag | Accent>,
    },
    {
        id: 10 as Id<Flacco>,
        combo: [",,|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 11 as Id<Flacco>,
        combo: [",|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 12 as Id<Flacco>,
        combo: ["|("] as Array<Flag | Accent>,
    },
    {
        id: 13 as Id<Flacco>,
        combo: ["`|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 14 as Id<Flacco>,
        combo: [".|", "~|"] as Array<Flag | Accent>,
    },
    {
        id: 15 as Id<Flacco>,
        combo: [",|", "'|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 16 as Id<Flacco>,
        combo: ["'|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 17 as Id<Flacco>,
        combo: [",|", "~|"] as Array<Flag | Accent>,
    },
    {
        id: 18 as Id<Flacco>,
        combo: ["~|"] as Array<Flag | Accent>,
    },
    {
        id: 19 as Id<Flacco>,
        combo: [",|", ")|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 20 as Id<Flacco>,
        combo: [")|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 21 as Id<Flacco>,
        combo: ["`|", ")|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 22 as Id<Flacco>,
        combo: ["``|", ")|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 23 as Id<Flacco>,
        combo: [",|", "'|", ")|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 24 as Id<Flacco>,
        combo: ["'|", ")|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 25 as Id<Flacco>,
        combo: [")|", "~|"] as Array<Flag | Accent>,
    },
    {
        id: 26 as Id<Flacco>,
        combo: [".|", "~|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 27 as Id<Flacco>,
        combo: ["`|", ".|", "~|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 28 as Id<Flacco>,
        combo: [",,|", "~|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 29 as Id<Flacco>,
        combo: [",|", "~|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 30 as Id<Flacco>,
        combo: ["~|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 31 as Id<Flacco>,
        combo: ["`|", "~|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 32 as Id<Flacco>,
        combo: [",,|", "|~"] as Array<Flag | Accent>,
    },
    {
        id: 33 as Id<Flacco>,
        combo: [",|", "|~"] as Array<Flag | Accent>,
    },
    {
        id: 34 as Id<Flacco>,
        combo: ["|~"] as Array<Flag | Accent>,
    },
    {
        id: 35 as Id<Flacco>,
        combo: ["`|", "|~"] as Array<Flag | Accent>,
    },
    {
        id: 36 as Id<Flacco>,
        combo: ["~|", "~|"] as Array<Flag | Accent>,
    },
    {
        id: 37 as Id<Flacco>,
        combo: ["`|", "~|", "~|"] as Array<Flag | Accent>,
    },
    {
        id: 38 as Id<Flacco>,
        combo: ["``|", "~|", "~|"] as Array<Flag | Accent>,
    },
    {
        id: 39 as Id<Flacco>,
        combo: [",|", ".|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 40 as Id<Flacco>,
        combo: [".|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 41 as Id<Flacco>,
        combo: [")|", "|~"] as Array<Flag | Accent>,
    },
    {
        id: 42 as Id<Flacco>,
        combo: [",,|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 43 as Id<Flacco>,
        combo: [",|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 44 as Id<Flacco>,
        combo: ["/|"] as Array<Flag | Accent>,
    },
    {
        id: 45 as Id<Flacco>,
        combo: ["`|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 46 as Id<Flacco>,
        combo: ["``|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 47 as Id<Flacco>,
        combo: [".|", ")|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 48 as Id<Flacco>,
        combo: ["'|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 49 as Id<Flacco>,
        combo: ["`|", "'|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 50 as Id<Flacco>,
        combo: [",,|", ")|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 51 as Id<Flacco>,
        combo: [",|", ")|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 52 as Id<Flacco>,
        combo: [")|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 53 as Id<Flacco>,
        combo: [",|", ".|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 54 as Id<Flacco>,
        combo: [".|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 55 as Id<Flacco>,
        combo: ["`|", ".|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 56 as Id<Flacco>,
        combo: [",,|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 57 as Id<Flacco>,
        combo: [",|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 58 as Id<Flacco>,
        combo: ["|)"] as Array<Flag | Accent>,
    },
    {
        id: 59 as Id<Flacco>,
        combo: ["`|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 60 as Id<Flacco>,
        combo: ["``|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 61 as Id<Flacco>,
        combo: [",|", "'|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 62 as Id<Flacco>,
        combo: ["'|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 63 as Id<Flacco>,
        combo: ["`|", "'|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 64 as Id<Flacco>,
        combo: [",|", ")|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 65 as Id<Flacco>,
        combo: [")|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 66 as Id<Flacco>,
        combo: [".|", "(|"] as Array<Flag | Accent>,
    },
    {
        id: 67 as Id<Flacco>,
        combo: ["|\\"] as Array<Flag | Accent>,
    },
    {
        id: 68 as Id<Flacco>,
        combo: ["`|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 69 as Id<Flacco>,
        combo: [",|", "(|"] as Array<Flag | Accent>,
    },
    {
        id: 70 as Id<Flacco>,
        combo: ["(|"] as Array<Flag | Accent>,
    },
    {
        id: 71 as Id<Flacco>,
        combo: ["`|", "(|"] as Array<Flag | Accent>,
    },
    {
        id: 72 as Id<Flacco>,
        combo: ["``|", "(|"] as Array<Flag | Accent>,
    },
    {
        id: 73 as Id<Flacco>,
        combo: [",|", "'|", "(|"] as Array<Flag | Accent>,
    },
    {
        id: 74 as Id<Flacco>,
        combo: ["'|", "(|"] as Array<Flag | Accent>,
    },
    {
        id: 75 as Id<Flacco>,
        combo: [",|", "~|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 76 as Id<Flacco>,
        combo: ["~|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 77 as Id<Flacco>,
        combo: ["`|", "~|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 78 as Id<Flacco>,
        combo: [",|", ".|", "(|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 79 as Id<Flacco>,
        combo: [".|", "(|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 80 as Id<Flacco>,
        combo: ["'|", "~|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 81 as Id<Flacco>,
        combo: ["/|", "|~"] as Array<Flag | Accent>,
    },
    {
        id: 82 as Id<Flacco>,
        combo: [",,|", "(|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 83 as Id<Flacco>,
        combo: [",|", "(|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 84 as Id<Flacco>,
        combo: ["(|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 85 as Id<Flacco>,
        combo: ["`|", "(|", "|("] as Array<Flag | Accent>,
    },
    {
        id: 86 as Id<Flacco>,
        combo: ["~|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 87 as Id<Flacco>,
        combo: [",|", ".|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 88 as Id<Flacco>,
        combo: [".|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 89 as Id<Flacco>,
        combo: ["`|", ".|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 90 as Id<Flacco>,
        combo: [",,|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 91 as Id<Flacco>,
        combo: [",|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 92 as Id<Flacco>,
        combo: ["/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 93 as Id<Flacco>,
        combo: ["`|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 94 as Id<Flacco>,
        combo: ["``|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 95 as Id<Flacco>,
        combo: [",|", "'|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 96 as Id<Flacco>,
        combo: ["'|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 97 as Id<Flacco>,
        combo: [",,|", ")|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 98 as Id<Flacco>,
        combo: [",|", ")|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 99 as Id<Flacco>,
        combo: [")|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 100 as Id<Flacco>,
        combo: ["`|", ")|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 101 as Id<Flacco>,
        combo: ["``|", ")|", "/|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 102 as Id<Flacco>,
        combo: [",,|", "/|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 103 as Id<Flacco>,
        combo: [",|", "/|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 104 as Id<Flacco>,
        combo: ["/|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 105 as Id<Flacco>,
        combo: ["`|", "/|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 106 as Id<Flacco>,
        combo: ["(|", "|~"] as Array<Flag | Accent>,
    },
    {
        id: 107 as Id<Flacco>,
        combo: [",|", "'|", "/|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 108 as Id<Flacco>,
        combo: ["'|", "/|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 109 as Id<Flacco>,
        combo: ["`|", "'|", "/|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 110 as Id<Flacco>,
        combo: [".|", "/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 111 as Id<Flacco>,
        combo: ["`|", ".|", "/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 112 as Id<Flacco>,
        combo: [",,|", "/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 113 as Id<Flacco>,
        combo: [",|", "/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 114 as Id<Flacco>,
        combo: ["/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 115 as Id<Flacco>,
        combo: ["`|", "/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 116 as Id<Flacco>,
        combo: [",|", "(|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 117 as Id<Flacco>,
        combo: ["(|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 118 as Id<Flacco>,
        combo: ["`|", "(|", "/|"] as Array<Flag | Accent>,
    },
    {
        id: 119 as Id<Flacco>,
        combo: ["'|", "/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 120 as Id<Flacco>,
        combo: ["`|", "'|", "/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 121 as Id<Flacco>,
        combo: [",|", ")|", "/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 122 as Id<Flacco>,
        combo: [")|", "/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 123 as Id<Flacco>,
        combo: ["`|", ")|", "/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 124 as Id<Flacco>,
        combo: ["``|", ")|", "/|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 125 as Id<Flacco>,
        combo: [",|", ".|", "(|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 126 as Id<Flacco>,
        combo: [".|", "(|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 127 as Id<Flacco>,
        combo: [",|", "|\\", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 128 as Id<Flacco>,
        combo: ["|\\", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 129 as Id<Flacco>,
        combo: ["`|", "|\\", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 130 as Id<Flacco>,
        combo: [",|", "(|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 131 as Id<Flacco>,
        combo: ["(|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 132 as Id<Flacco>,
        combo: ["`|", "(|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 133 as Id<Flacco>,
        combo: ["``|", "(|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 134 as Id<Flacco>,
        combo: [",|", "'|", "(|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 135 as Id<Flacco>,
        combo: ["'|", "(|", "|)"] as Array<Flag | Accent>,
    },
    {
        id: 136 as Id<Flacco>,
        combo: [",|", ".|", "(|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 137 as Id<Flacco>,
        combo: [".|", "(|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 138 as Id<Flacco>,
        combo: ["`|", ".|", "(|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 139 as Id<Flacco>,
        combo: ["|\\", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 140 as Id<Flacco>,
        combo: [",|", "(|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 141 as Id<Flacco>,
        combo: ["(|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 142 as Id<Flacco>,
        combo: ["`|", "(|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 143 as Id<Flacco>,
        combo: ["``|", "(|", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 144 as Id<Flacco>,
        combo: [",,|", ")|", "|\\", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 145 as Id<Flacco>,
        combo: [",|", ")|", "|\\", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 146 as Id<Flacco>,
        combo: [")|", "|\\", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 147 as Id<Flacco>,
        combo: ["`|", ")|", "|\\", "|\\"] as Array<Flag | Accent>,
    },
    {
        id: 148 as Id<Flacco>,
        combo: ["``|", ")|", "|\\", "|\\"] as Array<Flag | Accent>,
    },
]

export {
    FLACCOS,
}

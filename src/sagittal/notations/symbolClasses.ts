import { Id } from "../../general"
import { SymbolLongAscii } from "../io"
import { PrimaryComma, SymbolClass } from "./types"

// TODO: CONSTANTIZE EACH SYMBOL CLASS
//  so they can have names, you don’t have to know their IDs
//  as well as symbols, bounds maybe... anything that we have good names for
//  haven't really communicated this "symbol class" idea to Dave yet. he might like it, or he might not

const SYMBOL_CLASSES: SymbolClass[] = [
    {
        id: 0 as Id<SymbolClass>,
        primaryCommaId: 0 as Id<PrimaryComma>,
        elements: [] as SymbolLongAscii[],
    },
    {
        id: 1 as Id<SymbolClass>,
        primaryCommaId: 1 as Id<PrimaryComma>,
        elements: ["`|"] as SymbolLongAscii[],
    },
    {
        id: 2 as Id<SymbolClass>,
        primaryCommaId: 2 as Id<PrimaryComma>,
        elements: ["``|"] as SymbolLongAscii[],
    },
    {
        id: 3 as Id<SymbolClass>,
        primaryCommaId: 3 as Id<PrimaryComma>,
        elements: [".|", ")|"] as SymbolLongAscii[],
    },
    {
        id: 4 as Id<SymbolClass>,
        primaryCommaId: 4 as Id<PrimaryComma>,
        elements: ["'|"] as SymbolLongAscii[],
    },
    {
        id: 5 as Id<SymbolClass>,
        primaryCommaId: 5 as Id<PrimaryComma>,
        elements: ["`|", "'|"] as SymbolLongAscii[],
    },
    {
        id: 6 as Id<SymbolClass>,
        primaryCommaId: 6 as Id<PrimaryComma>,
        elements: [",|", ")|"] as SymbolLongAscii[],
    },
    {
        id: 7 as Id<SymbolClass>,
        primaryCommaId: 7 as Id<PrimaryComma>,
        elements: [")|"] as SymbolLongAscii[],
    },
    {
        id: 8 as Id<SymbolClass>,
        primaryCommaId: 8 as Id<PrimaryComma>,
        elements: ["`|", ")|"] as SymbolLongAscii[],
    },
    {
        id: 9 as Id<SymbolClass>,
        primaryCommaId: 9 as Id<PrimaryComma>,
        elements: ["``|", ")|"] as SymbolLongAscii[],
    },
    {
        id: 10 as Id<SymbolClass>,
        primaryCommaId: 10 as Id<PrimaryComma>,
        elements: [",,|", "|("] as SymbolLongAscii[],
    },
    {
        id: 11 as Id<SymbolClass>,
        primaryCommaId: 11 as Id<PrimaryComma>,
        elements: [",|", "|("] as SymbolLongAscii[],
    },
    {
        id: 12 as Id<SymbolClass>,
        primaryCommaId: 12 as Id<PrimaryComma>,
        elements: ["|("] as SymbolLongAscii[],
    },
    {
        id: 13 as Id<SymbolClass>,
        primaryCommaId: 13 as Id<PrimaryComma>,
        elements: ["`|", "|("] as SymbolLongAscii[],
    },
    {
        id: 14 as Id<SymbolClass>,
        primaryCommaId: 14 as Id<PrimaryComma>,
        elements: [".|", "~|"] as SymbolLongAscii[],
    },
    {
        id: 15 as Id<SymbolClass>,
        primaryCommaId: 15 as Id<PrimaryComma>,
        elements: [",|", "'|", "|("] as SymbolLongAscii[],
    },
    {
        id: 16 as Id<SymbolClass>,
        primaryCommaId: 16 as Id<PrimaryComma>,
        elements: ["'|", "|("] as SymbolLongAscii[],
    },
    {
        id: 17 as Id<SymbolClass>,
        primaryCommaId: 17 as Id<PrimaryComma>,
        elements: [",|", "~|"] as SymbolLongAscii[],
    },
    {
        id: 18 as Id<SymbolClass>,
        primaryCommaId: 18 as Id<PrimaryComma>,
        elements: ["~|"] as SymbolLongAscii[],
    },
    {
        id: 19 as Id<SymbolClass>,
        primaryCommaId: 19 as Id<PrimaryComma>,
        elements: [",|", ")|", "|("] as SymbolLongAscii[],
    },
    {
        id: 20 as Id<SymbolClass>,
        primaryCommaId: 20 as Id<PrimaryComma>,
        elements: [")|", "|("] as SymbolLongAscii[],
    },
    {
        id: 21 as Id<SymbolClass>,
        primaryCommaId: 21 as Id<PrimaryComma>,
        elements: ["`|", ")|", "|("] as SymbolLongAscii[],
    },
    {
        id: 22 as Id<SymbolClass>,
        primaryCommaId: 22 as Id<PrimaryComma>,
        elements: ["``|", ")|", "|("] as SymbolLongAscii[],
    },
    {
        id: 23 as Id<SymbolClass>,
        primaryCommaId: 23 as Id<PrimaryComma>,
        elements: [",|", "'|", ")|", "|("] as SymbolLongAscii[],
    },
    {
        id: 24 as Id<SymbolClass>,
        primaryCommaId: 24 as Id<PrimaryComma>,
        elements: ["'|", ")|", "|("] as SymbolLongAscii[],
    },
    {
        id: 25 as Id<SymbolClass>,
        primaryCommaId: 25 as Id<PrimaryComma>,
        elements: [")|", "~|"] as SymbolLongAscii[],
    },
    {
        id: 26 as Id<SymbolClass>,
        primaryCommaId: 26 as Id<PrimaryComma>,
        elements: [".|", "~|", "|("] as SymbolLongAscii[],
    },
    {
        id: 27 as Id<SymbolClass>,
        primaryCommaId: 27 as Id<PrimaryComma>,
        elements: ["`|", ".|", "~|", "|("] as SymbolLongAscii[],
    },
    {
        id: 28 as Id<SymbolClass>,
        primaryCommaId: 28 as Id<PrimaryComma>,
        elements: [",,|", "~|", "|("] as SymbolLongAscii[],
    },
    {
        id: 29 as Id<SymbolClass>,
        primaryCommaId: 29 as Id<PrimaryComma>,
        elements: [",|", "~|", "|("] as SymbolLongAscii[],
    },
    {
        id: 30 as Id<SymbolClass>,
        primaryCommaId: 30 as Id<PrimaryComma>,
        elements: ["~|", "|("] as SymbolLongAscii[],
    },
    {
        id: 31 as Id<SymbolClass>,
        primaryCommaId: 31 as Id<PrimaryComma>,
        elements: ["`|", "~|", "|("] as SymbolLongAscii[],
    },
    {
        id: 32 as Id<SymbolClass>,
        primaryCommaId: 32 as Id<PrimaryComma>,
        elements: [",,|", "|~"] as SymbolLongAscii[],
    },
    {
        id: 33 as Id<SymbolClass>,
        primaryCommaId: 33 as Id<PrimaryComma>,
        elements: [",|", "|~"] as SymbolLongAscii[],
    },
    {
        id: 34 as Id<SymbolClass>,
        primaryCommaId: 34 as Id<PrimaryComma>,
        elements: ["|~"] as SymbolLongAscii[],
    },
    {
        id: 35 as Id<SymbolClass>,
        primaryCommaId: 35 as Id<PrimaryComma>,
        elements: ["`|", "|~"] as SymbolLongAscii[],
    },
    {
        id: 36 as Id<SymbolClass>,
        primaryCommaId: 36 as Id<PrimaryComma>,
        elements: ["~|", "~|"] as SymbolLongAscii[],
    },
    {
        id: 37 as Id<SymbolClass>,
        primaryCommaId: 37 as Id<PrimaryComma>,
        elements: ["`|", "~|", "~|"] as SymbolLongAscii[],
    },
    {
        id: 38 as Id<SymbolClass>,
        primaryCommaId: 38 as Id<PrimaryComma>,
        elements: ["``|", "~|", "~|"] as SymbolLongAscii[],
    },
    {
        id: 39 as Id<SymbolClass>,
        primaryCommaId: 39 as Id<PrimaryComma>,
        elements: [",|", ".|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 40 as Id<SymbolClass>,
        primaryCommaId: 40 as Id<PrimaryComma>,
        elements: [".|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 41 as Id<SymbolClass>,
        primaryCommaId: 41 as Id<PrimaryComma>,
        elements: [")|", "|~"] as SymbolLongAscii[],
    },
    {
        id: 42 as Id<SymbolClass>,
        primaryCommaId: 42 as Id<PrimaryComma>,
        elements: [",,|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 43 as Id<SymbolClass>,
        primaryCommaId: 43 as Id<PrimaryComma>,
        elements: [",|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 44 as Id<SymbolClass>,
        primaryCommaId: 44 as Id<PrimaryComma>,
        elements: ["/|"] as SymbolLongAscii[],
    },
    {
        id: 45 as Id<SymbolClass>,
        primaryCommaId: 45 as Id<PrimaryComma>,
        elements: ["`|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 46 as Id<SymbolClass>,
        primaryCommaId: 46 as Id<PrimaryComma>,
        elements: ["``|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 47 as Id<SymbolClass>,
        primaryCommaId: 47 as Id<PrimaryComma>,
        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 48 as Id<SymbolClass>,
        primaryCommaId: 48 as Id<PrimaryComma>,
        elements: ["'|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 49 as Id<SymbolClass>,
        primaryCommaId: 49 as Id<PrimaryComma>,
        elements: ["`|", "'|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 50 as Id<SymbolClass>,
        primaryCommaId: 50 as Id<PrimaryComma>,
        elements: [",,|", ")|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 51 as Id<SymbolClass>,
        primaryCommaId: 51 as Id<PrimaryComma>,
        elements: [",|", ")|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 52 as Id<SymbolClass>,
        primaryCommaId: 52 as Id<PrimaryComma>,
        elements: [")|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 53 as Id<SymbolClass>,
        primaryCommaId: 53 as Id<PrimaryComma>,
        elements: [",|", ".|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 54 as Id<SymbolClass>,
        primaryCommaId: 54 as Id<PrimaryComma>,
        elements: [".|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 55 as Id<SymbolClass>,
        primaryCommaId: 55 as Id<PrimaryComma>,
        elements: ["`|", ".|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 56 as Id<SymbolClass>,
        primaryCommaId: 56 as Id<PrimaryComma>,
        elements: [",,|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 57 as Id<SymbolClass>,
        primaryCommaId: 57 as Id<PrimaryComma>,
        elements: [",|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 58 as Id<SymbolClass>,
        primaryCommaId: 58 as Id<PrimaryComma>,
        elements: ["|)"] as SymbolLongAscii[],
    },
    {
        id: 59 as Id<SymbolClass>,
        primaryCommaId: 59 as Id<PrimaryComma>,
        elements: ["`|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 60 as Id<SymbolClass>,
        primaryCommaId: 60 as Id<PrimaryComma>,
        elements: ["``|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 61 as Id<SymbolClass>,
        primaryCommaId: 61 as Id<PrimaryComma>,
        elements: [",|", "'|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 62 as Id<SymbolClass>,
        primaryCommaId: 62 as Id<PrimaryComma>,
        elements: ["'|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 63 as Id<SymbolClass>,
        primaryCommaId: 63 as Id<PrimaryComma>,
        elements: ["`|", "'|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 64 as Id<SymbolClass>,
        primaryCommaId: 64 as Id<PrimaryComma>,
        elements: [",|", ")|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 65 as Id<SymbolClass>,
        primaryCommaId: 65 as Id<PrimaryComma>,
        elements: [")|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 66 as Id<SymbolClass>,
        primaryCommaId: 66 as Id<PrimaryComma>,
        elements: [".|", "(|"] as SymbolLongAscii[],
    },
    {
        id: 67 as Id<SymbolClass>,
        // Exceptional. All other Athenian symbols already introduced at Medium precision.
        primaryCommaId: 67 as Id<PrimaryComma>,
        elements: ["|\\"] as SymbolLongAscii[],
    },
    {
        id: 68 as Id<SymbolClass>,
        primaryCommaId: 68 as Id<PrimaryComma>,
        elements: ["`|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 69 as Id<SymbolClass>,
        primaryCommaId: 69 as Id<PrimaryComma>,
        elements: [",|", "(|"] as SymbolLongAscii[],
    },
    {
        id: 70 as Id<SymbolClass>,
        primaryCommaId: 70 as Id<PrimaryComma>,
        elements: ["(|"] as SymbolLongAscii[],
    },
    {
        id: 71 as Id<SymbolClass>,
        primaryCommaId: 71 as Id<PrimaryComma>,
        elements: ["`|", "(|"] as SymbolLongAscii[],
    },
    {
        id: 72 as Id<SymbolClass>,
        primaryCommaId: 72 as Id<PrimaryComma>,
        elements: ["``|", "(|"] as SymbolLongAscii[],
    },
    {
        id: 73 as Id<SymbolClass>,
        primaryCommaId: 73 as Id<PrimaryComma>,
        elements: [",|", "'|", "(|"] as SymbolLongAscii[],
    },
    {
        id: 74 as Id<SymbolClass>,
        primaryCommaId: 74 as Id<PrimaryComma>,
        elements: ["'|", "(|"] as SymbolLongAscii[],
    },
    {
        id: 75 as Id<SymbolClass>,
        primaryCommaId: 75 as Id<PrimaryComma>,
        elements: [",|", "~|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 76 as Id<SymbolClass>,
        primaryCommaId: 76 as Id<PrimaryComma>,
        elements: ["~|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 77 as Id<SymbolClass>,
        primaryCommaId: 77 as Id<PrimaryComma>,
        elements: ["`|", "~|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 78 as Id<SymbolClass>,
        primaryCommaId: 78 as Id<PrimaryComma>,
        elements: [",|", ".|", "(|", "|("] as SymbolLongAscii[],
    },
    {
        id: 79 as Id<SymbolClass>,
        primaryCommaId: 79 as Id<PrimaryComma>,
        elements: [".|", "(|", "|("] as SymbolLongAscii[],
    },
    {
        id: 80 as Id<SymbolClass>,
        primaryCommaId: 80 as Id<PrimaryComma>,
        elements: ["'|", "~|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 81 as Id<SymbolClass>,
        primaryCommaId: 81 as Id<PrimaryComma>,
        elements: ["/|", "|~"] as SymbolLongAscii[],
    },
    {
        id: 82 as Id<SymbolClass>,
        primaryCommaId: 82 as Id<PrimaryComma>,
        elements: [",,|", "(|", "|("] as SymbolLongAscii[],
    },
    {
        id: 83 as Id<SymbolClass>,
        primaryCommaId: 83 as Id<PrimaryComma>,
        elements: [",|", "(|", "|("] as SymbolLongAscii[],
    },
    {
        id: 84 as Id<SymbolClass>,
        primaryCommaId: 84 as Id<PrimaryComma>,
        elements: ["(|", "|("] as SymbolLongAscii[],
    },
    {
        id: 85 as Id<SymbolClass>,
        primaryCommaId: 85 as Id<PrimaryComma>,
        elements: ["`|", "(|", "|("] as SymbolLongAscii[],
    },
    {
        id: 86 as Id<SymbolClass>,
        primaryCommaId: 86 as Id<PrimaryComma>,
        elements: ["~|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 87 as Id<SymbolClass>,
        primaryCommaId: 87 as Id<PrimaryComma>,
        elements: [",|", ".|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 88 as Id<SymbolClass>,
        primaryCommaId: 88 as Id<PrimaryComma>,
        elements: [".|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 89 as Id<SymbolClass>,
        primaryCommaId: 89 as Id<PrimaryComma>,
        elements: ["`|", ".|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 90 as Id<SymbolClass>,
        primaryCommaId: 90 as Id<PrimaryComma>,
        elements: [",,|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 91 as Id<SymbolClass>,
        primaryCommaId: 91 as Id<PrimaryComma>,
        elements: [",|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 92 as Id<SymbolClass>,
        primaryCommaId: 92 as Id<PrimaryComma>,
        elements: ["/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 93 as Id<SymbolClass>,
        primaryCommaId: 93 as Id<PrimaryComma>,
        elements: ["`|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 94 as Id<SymbolClass>,
        primaryCommaId: 94 as Id<PrimaryComma>,
        elements: ["``|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 95 as Id<SymbolClass>,
        primaryCommaId: 95 as Id<PrimaryComma>,
        elements: [",|", "'|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 96 as Id<SymbolClass>,
        primaryCommaId: 96 as Id<PrimaryComma>,
        elements: ["'|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 97 as Id<SymbolClass>,
        primaryCommaId: 97 as Id<PrimaryComma>,
        elements: [",,|", ")|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 98 as Id<SymbolClass>,
        primaryCommaId: 98 as Id<PrimaryComma>,
        elements: [",|", ")|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 99 as Id<SymbolClass>,
        primaryCommaId: 99 as Id<PrimaryComma>,
        elements: [")|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 100 as Id<SymbolClass>,
        primaryCommaId: 100 as Id<PrimaryComma>,
        elements: ["`|", ")|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 101 as Id<SymbolClass>,
        primaryCommaId: 101 as Id<PrimaryComma>,
        elements: ["``|", ")|", "/|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 102 as Id<SymbolClass>,
        primaryCommaId: 102 as Id<PrimaryComma>,
        elements: [",,|", "/|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 103 as Id<SymbolClass>,
        primaryCommaId: 103 as Id<PrimaryComma>,
        elements: [",|", "/|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 104 as Id<SymbolClass>,
        primaryCommaId: 104 as Id<PrimaryComma>,
        elements: ["/|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 105 as Id<SymbolClass>,
        primaryCommaId: 105 as Id<PrimaryComma>,
        elements: ["`|", "/|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 106 as Id<SymbolClass>,
        primaryCommaId: 106 as Id<PrimaryComma>,
        elements: ["(|", "|~"] as SymbolLongAscii[],
    },
    {
        id: 107 as Id<SymbolClass>,
        primaryCommaId: 107 as Id<PrimaryComma>,
        elements: [",|", "'|", "/|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 108 as Id<SymbolClass>,
        primaryCommaId: 108 as Id<PrimaryComma>,
        elements: ["'|", "/|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 109 as Id<SymbolClass>,
        primaryCommaId: 109 as Id<PrimaryComma>,
        elements: ["`|", "'|", "/|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 110 as Id<SymbolClass>,
        primaryCommaId: 110 as Id<PrimaryComma>,
        elements: [".|", "/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 111 as Id<SymbolClass>,
        primaryCommaId: 111 as Id<PrimaryComma>,
        elements: ["`|", ".|", "/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 112 as Id<SymbolClass>,
        primaryCommaId: 112 as Id<PrimaryComma>,
        elements: [",,|", "/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 113 as Id<SymbolClass>,
        primaryCommaId: 113 as Id<PrimaryComma>,
        elements: [",|", "/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 114 as Id<SymbolClass>,
        primaryCommaId: 114 as Id<PrimaryComma>,
        elements: ["/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 115 as Id<SymbolClass>,
        primaryCommaId: 115 as Id<PrimaryComma>,
        elements: ["`|", "/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 116 as Id<SymbolClass>,
        primaryCommaId: 116 as Id<PrimaryComma>,
        elements: [",|", "(|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 117 as Id<SymbolClass>,
        primaryCommaId: 117 as Id<PrimaryComma>,
        elements: ["(|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 118 as Id<SymbolClass>,
        primaryCommaId: 118 as Id<PrimaryComma>,
        elements: ["`|", "(|", "/|"] as SymbolLongAscii[],
    },
    {
        id: 119 as Id<SymbolClass>,
        primaryCommaId: 119 as Id<PrimaryComma>,
        elements: ["'|", "/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 120 as Id<SymbolClass>,
        primaryCommaId: 120 as Id<PrimaryComma>,
        elements: ["`|", "'|", "/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 121 as Id<SymbolClass>,
        primaryCommaId: 121 as Id<PrimaryComma>,
        elements: [",|", ")|", "/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 122 as Id<SymbolClass>,
        primaryCommaId: 122 as Id<PrimaryComma>,
        elements: [")|", "/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 123 as Id<SymbolClass>,
        primaryCommaId: 123 as Id<PrimaryComma>,
        elements: ["`|", ")|", "/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 124 as Id<SymbolClass>,
        primaryCommaId: 124 as Id<PrimaryComma>,
        elements: ["``|", ")|", "/|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 125 as Id<SymbolClass>,
        primaryCommaId: 125 as Id<PrimaryComma>,
        elements: [",|", ".|", "(|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 126 as Id<SymbolClass>,
        primaryCommaId: 126 as Id<PrimaryComma>,
        elements: [".|", "(|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 127 as Id<SymbolClass>,
        primaryCommaId: 127 as Id<PrimaryComma>,
        elements: [",|", "|\\", "|)"] as SymbolLongAscii[],
    },
    {
        id: 128 as Id<SymbolClass>,
        primaryCommaId: 128 as Id<PrimaryComma>,
        elements: ["|\\", "|)"] as SymbolLongAscii[],
    },
    {
        id: 129 as Id<SymbolClass>,
        primaryCommaId: 129 as Id<PrimaryComma>,
        elements: ["`|", "|\\", "|)"] as SymbolLongAscii[],
    },
    {
        id: 130 as Id<SymbolClass>,
        primaryCommaId: 130 as Id<PrimaryComma>,
        elements: [",|", "(|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 131 as Id<SymbolClass>,
        primaryCommaId: 131 as Id<PrimaryComma>,
        elements: ["(|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 132 as Id<SymbolClass>,
        primaryCommaId: 132 as Id<PrimaryComma>,
        elements: ["`|", "(|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 133 as Id<SymbolClass>,
        primaryCommaId: 133 as Id<PrimaryComma>,
        elements: ["``|", "(|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 134 as Id<SymbolClass>,
        primaryCommaId: 134 as Id<PrimaryComma>,
        elements: [",|", "'|", "(|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 135 as Id<SymbolClass>,
        primaryCommaId: 135 as Id<PrimaryComma>,
        elements: ["'|", "(|", "|)"] as SymbolLongAscii[],
    },
    {
        id: 136 as Id<SymbolClass>,
        primaryCommaId: 136 as Id<PrimaryComma>,
        elements: [",|", ".|", "(|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 137 as Id<SymbolClass>,
        primaryCommaId: 137 as Id<PrimaryComma>,
        elements: [".|", "(|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 138 as Id<SymbolClass>,
        primaryCommaId: 138 as Id<PrimaryComma>,
        elements: ["`|", ".|", "(|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 139 as Id<SymbolClass>,
        primaryCommaId: 139 as Id<PrimaryComma>,
        elements: ["|\\", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 140 as Id<SymbolClass>,
        primaryCommaId: 140 as Id<PrimaryComma>,
        elements: [",|", "(|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 141 as Id<SymbolClass>,
        primaryCommaId: 141 as Id<PrimaryComma>,
        elements: ["(|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 142 as Id<SymbolClass>,
        primaryCommaId: 142 as Id<PrimaryComma>,
        elements: ["`|", "(|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 143 as Id<SymbolClass>,
        primaryCommaId: 143 as Id<PrimaryComma>,
        elements: ["``|", "(|", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 144 as Id<SymbolClass>,
        primaryCommaId: 144 as Id<PrimaryComma>,
        elements: [",,|", ")|", "|\\", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 145 as Id<SymbolClass>,
        primaryCommaId: 145 as Id<PrimaryComma>,
        elements: [",|", ")|", "|\\", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 146 as Id<SymbolClass>,
        primaryCommaId: 146 as Id<PrimaryComma>,
        elements: [")|", "|\\", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 147 as Id<SymbolClass>,
        primaryCommaId: 147 as Id<PrimaryComma>,
        elements: ["`|", ")|", "|\\", "|\\"] as SymbolLongAscii[],
    },
    {
        id: 148 as Id<SymbolClass>,
        primaryCommaId: 148 as Id<PrimaryComma>,
        elements: ["``|", ")|", "|\\", "|\\"] as SymbolLongAscii[],
    },
]

export {
    SYMBOL_CLASSES,
}

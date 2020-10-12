import { Id } from "../../general"
import { Ascii } from "../io"
import { CommaClass, PrimaryComma } from "./types"

const COMMA_CLASSES: CommaClass[] = [
    {
        id: 0 as Id<CommaClass>,
        primaryCommaId: 0 as Id<PrimaryComma>,
    },
    {
        id: 1 as Id<CommaClass>,
        primaryCommaId: 1 as Id<PrimaryComma>,
    },
    {
        id: 2 as Id<CommaClass>,
        primaryCommaId: 2 as Id<PrimaryComma>,
    },
    {
        id: 3 as Id<CommaClass>,
        primaryCommaId: 3 as Id<PrimaryComma>,
    },
    {
        id: 4 as Id<CommaClass>,
        primaryCommaId: 4 as Id<PrimaryComma>,
    },
    {
        id: 5 as Id<CommaClass>,
        primaryCommaId: 5 as Id<PrimaryComma>,
    },
    {
        id: 6 as Id<CommaClass>,
        primaryCommaId: 6 as Id<PrimaryComma>,
    },
    {
        id: 7 as Id<CommaClass>,
        primaryCommaId: 7 as Id<PrimaryComma>,
    },
    {
        id: 8 as Id<CommaClass>,
        primaryCommaId: 8 as Id<PrimaryComma>,
    },
    {
        id: 9 as Id<CommaClass>,
        primaryCommaId: 9 as Id<PrimaryComma>,
    },
    {
        id: 10 as Id<CommaClass>,
        primaryCommaId: 10 as Id<PrimaryComma>,
    },
    {
        id: 11 as Id<CommaClass>,
        primaryCommaId: 11 as Id<PrimaryComma>,
    },
    {
        id: 12 as Id<CommaClass>,
        primaryCommaId: 12 as Id<PrimaryComma>,
    },
    {
        id: 13 as Id<CommaClass>,
        primaryCommaId: 13 as Id<PrimaryComma>,
    },
    {
        id: 14 as Id<CommaClass>,
        primaryCommaId: 14 as Id<PrimaryComma>,
    },
    {
        id: 15 as Id<CommaClass>,
        primaryCommaId: 15 as Id<PrimaryComma>,
    },
    {
        id: 16 as Id<CommaClass>,
        primaryCommaId: 16 as Id<PrimaryComma>,
    },
    {
        id: 17 as Id<CommaClass>,
        primaryCommaId: 17 as Id<PrimaryComma>,
    },
    {
        id: 18 as Id<CommaClass>,
        primaryCommaId: 18 as Id<PrimaryComma>,
    },
    {
        id: 19 as Id<CommaClass>,
        primaryCommaId: 19 as Id<PrimaryComma>,
    },
    {
        id: 20 as Id<CommaClass>,
        primaryCommaId: 20 as Id<PrimaryComma>,
    },
    {
        id: 21 as Id<CommaClass>,
        primaryCommaId: 21 as Id<PrimaryComma>,
    },
    {
        id: 22 as Id<CommaClass>,
        primaryCommaId: 22 as Id<PrimaryComma>,
    },
    {
        id: 23 as Id<CommaClass>,
        primaryCommaId: 23 as Id<PrimaryComma>,
    },
    {
        id: 24 as Id<CommaClass>,
        primaryCommaId: 24 as Id<PrimaryComma>,
    },
    {
        id: 25 as Id<CommaClass>,
        primaryCommaId: 25 as Id<PrimaryComma>,
    },
    {
        id: 26 as Id<CommaClass>,
        primaryCommaId: 26 as Id<PrimaryComma>,
    },
    {
        id: 27 as Id<CommaClass>,
        primaryCommaId: 27 as Id<PrimaryComma>,
    },
    {
        id: 28 as Id<CommaClass>,
        primaryCommaId: 28 as Id<PrimaryComma>,
    },
    {
        id: 29 as Id<CommaClass>,
        primaryCommaId: 29 as Id<PrimaryComma>,
    },
    {
        id: 30 as Id<CommaClass>,
        primaryCommaId: 30 as Id<PrimaryComma>,
    },
    {
        id: 31 as Id<CommaClass>,
        primaryCommaId: 31 as Id<PrimaryComma>,
    },
    {
        id: 32 as Id<CommaClass>,
        primaryCommaId: 32 as Id<PrimaryComma>,
    },
    {
        id: 33 as Id<CommaClass>,
        primaryCommaId: 33 as Id<PrimaryComma>,
    },
    {
        id: 34 as Id<CommaClass>,
        primaryCommaId: 34 as Id<PrimaryComma>,
    },
    {
        id: 35 as Id<CommaClass>,
        primaryCommaId: 35 as Id<PrimaryComma>,
    },
    {
        id: 36 as Id<CommaClass>,
        primaryCommaId: 36 as Id<PrimaryComma>,
    },
    {
        id: 37 as Id<CommaClass>,
        primaryCommaId: 37 as Id<PrimaryComma>,
    },
    {
        id: 38 as Id<CommaClass>,
        primaryCommaId: 38 as Id<PrimaryComma>,
    },
    {
        id: 39 as Id<CommaClass>,
        primaryCommaId: 39 as Id<PrimaryComma>,
    },
    {
        id: 40 as Id<CommaClass>,
        primaryCommaId: 40 as Id<PrimaryComma>,
    },
    {
        id: 41 as Id<CommaClass>,
        primaryCommaId: 41 as Id<PrimaryComma>,
    },
    {
        id: 42 as Id<CommaClass>,
        primaryCommaId: 42 as Id<PrimaryComma>,
    },
    {
        id: 43 as Id<CommaClass>,
        primaryCommaId: 43 as Id<PrimaryComma>,
    },
    {
        id: 44 as Id<CommaClass>,
        primaryCommaId: 44 as Id<PrimaryComma>,
    },
    {
        id: 45 as Id<CommaClass>,
        primaryCommaId: 45 as Id<PrimaryComma>,
    },
    {
        id: 46 as Id<CommaClass>,
        primaryCommaId: 46 as Id<PrimaryComma>,
    },
    {
        id: 47 as Id<CommaClass>,
        primaryCommaId: 47 as Id<PrimaryComma>,
    },
    {
        id: 48 as Id<CommaClass>,
        primaryCommaId: 48 as Id<PrimaryComma>,
    },
    {
        id: 49 as Id<CommaClass>,
        primaryCommaId: 49 as Id<PrimaryComma>,
    },
    {
        id: 50 as Id<CommaClass>,
        primaryCommaId: 50 as Id<PrimaryComma>,
    },
    {
        id: 51 as Id<CommaClass>,
        primaryCommaId: 51 as Id<PrimaryComma>,
    },
    {
        id: 52 as Id<CommaClass>,
        primaryCommaId: 52 as Id<PrimaryComma>,
    },
    {
        id: 53 as Id<CommaClass>,
        primaryCommaId: 53 as Id<PrimaryComma>,
    },
    {
        id: 54 as Id<CommaClass>,
        primaryCommaId: 54 as Id<PrimaryComma>,
    },
    {
        id: 55 as Id<CommaClass>,
        primaryCommaId: 55 as Id<PrimaryComma>,
    },
    {
        id: 56 as Id<CommaClass>,
        primaryCommaId: 56 as Id<PrimaryComma>,
    },
    {
        id: 57 as Id<CommaClass>,
        primaryCommaId: 57 as Id<PrimaryComma>,
    },
    {
        id: 58 as Id<CommaClass>,
        primaryCommaId: 58 as Id<PrimaryComma>,
    },
    {
        id: 59 as Id<CommaClass>,
        primaryCommaId: 59 as Id<PrimaryComma>,
    },
    {
        id: 60 as Id<CommaClass>,
        primaryCommaId: 60 as Id<PrimaryComma>,
    },
    {
        id: 61 as Id<CommaClass>,
        primaryCommaId: 61 as Id<PrimaryComma>,
    },
    {
        id: 62 as Id<CommaClass>,
        primaryCommaId: 62 as Id<PrimaryComma>,
    },
    {
        id: 63 as Id<CommaClass>,
        primaryCommaId: 63 as Id<PrimaryComma>,
    },
    {
        id: 64 as Id<CommaClass>,
        primaryCommaId: 64 as Id<PrimaryComma>,
    },
    {
        id: 65 as Id<CommaClass>,
        primaryCommaId: 65 as Id<PrimaryComma>,
    },
    {
        id: 66 as Id<CommaClass>,
        primaryCommaId: 66 as Id<PrimaryComma>,
    },
    {
        id: 67 as Id<CommaClass>,
        // Exceptional. All other Athenian commas already introduced at Medium precision.
        primaryCommaId: 67 as Id<PrimaryComma>,
    },
    {
        id: 68 as Id<CommaClass>,
        primaryCommaId: 68 as Id<PrimaryComma>,
    },
    {
        id: 69 as Id<CommaClass>,
        primaryCommaId: 69 as Id<PrimaryComma>,
    },
    {
        id: 70 as Id<CommaClass>,
        primaryCommaId: 70 as Id<PrimaryComma>,
    },
    {
        id: 71 as Id<CommaClass>,
        primaryCommaId: 71 as Id<PrimaryComma>,
    },
    {
        id: 72 as Id<CommaClass>,
        primaryCommaId: 72 as Id<PrimaryComma>,
    },
    {
        id: 73 as Id<CommaClass>,
        primaryCommaId: 73 as Id<PrimaryComma>,
    },
    {
        id: 74 as Id<CommaClass>,
        primaryCommaId: 74 as Id<PrimaryComma>,
    },
    {
        id: 75 as Id<CommaClass>,
        primaryCommaId: 75 as Id<PrimaryComma>,
    },
    {
        id: 76 as Id<CommaClass>,
        primaryCommaId: 76 as Id<PrimaryComma>,
    },
    {
        id: 77 as Id<CommaClass>,
        primaryCommaId: 77 as Id<PrimaryComma>,
    },
    {
        id: 78 as Id<CommaClass>,
        primaryCommaId: 78 as Id<PrimaryComma>,
    },
    {
        id: 79 as Id<CommaClass>,
        primaryCommaId: 79 as Id<PrimaryComma>,
    },
    {
        id: 80 as Id<CommaClass>,
        primaryCommaId: 80 as Id<PrimaryComma>,
    },
    {
        id: 81 as Id<CommaClass>,
        primaryCommaId: 81 as Id<PrimaryComma>,
    },
    {
        id: 82 as Id<CommaClass>,
        primaryCommaId: 82 as Id<PrimaryComma>,
    },
    {
        id: 83 as Id<CommaClass>,
        primaryCommaId: 83 as Id<PrimaryComma>,
    },
    {
        id: 84 as Id<CommaClass>,
        primaryCommaId: 84 as Id<PrimaryComma>,
    },
    {
        id: 85 as Id<CommaClass>,
        primaryCommaId: 85 as Id<PrimaryComma>,
    },
    {
        id: 86 as Id<CommaClass>,
        primaryCommaId: 86 as Id<PrimaryComma>,
    },
    {
        id: 87 as Id<CommaClass>,
        primaryCommaId: 87 as Id<PrimaryComma>,
    },
    {
        id: 88 as Id<CommaClass>,
        primaryCommaId: 88 as Id<PrimaryComma>,
    },
    {
        id: 89 as Id<CommaClass>,
        primaryCommaId: 89 as Id<PrimaryComma>,
    },
    {
        id: 90 as Id<CommaClass>,
        primaryCommaId: 90 as Id<PrimaryComma>,
    },
    {
        id: 91 as Id<CommaClass>,
        primaryCommaId: 91 as Id<PrimaryComma>,
    },
    {
        id: 92 as Id<CommaClass>,
        primaryCommaId: 92 as Id<PrimaryComma>,
    },
    {
        id: 93 as Id<CommaClass>,
        primaryCommaId: 93 as Id<PrimaryComma>,
    },
    {
        id: 94 as Id<CommaClass>,
        primaryCommaId: 94 as Id<PrimaryComma>,
    },
    {
        id: 95 as Id<CommaClass>,
        primaryCommaId: 95 as Id<PrimaryComma>,
    },
    {
        id: 96 as Id<CommaClass>,
        primaryCommaId: 96 as Id<PrimaryComma>,
    },
    {
        id: 97 as Id<CommaClass>,
        primaryCommaId: 97 as Id<PrimaryComma>,
    },
    {
        id: 98 as Id<CommaClass>,
        primaryCommaId: 98 as Id<PrimaryComma>,
    },
    {
        id: 99 as Id<CommaClass>,
        primaryCommaId: 99 as Id<PrimaryComma>,
    },
    {
        id: 100 as Id<CommaClass>,
        primaryCommaId: 100 as Id<PrimaryComma>,
    },
    {
        id: 101 as Id<CommaClass>,
        primaryCommaId: 101 as Id<PrimaryComma>,
    },
    {
        id: 102 as Id<CommaClass>,
        primaryCommaId: 102 as Id<PrimaryComma>,
    },
    {
        id: 103 as Id<CommaClass>,
        primaryCommaId: 103 as Id<PrimaryComma>,
    },
    {
        id: 104 as Id<CommaClass>,
        primaryCommaId: 104 as Id<PrimaryComma>,
    },
    {
        id: 105 as Id<CommaClass>,
        primaryCommaId: 105 as Id<PrimaryComma>,
    },
    {
        id: 106 as Id<CommaClass>,
        primaryCommaId: 106 as Id<PrimaryComma>,
    },
    {
        id: 107 as Id<CommaClass>,
        primaryCommaId: 107 as Id<PrimaryComma>,
    },
    {
        id: 108 as Id<CommaClass>,
        primaryCommaId: 108 as Id<PrimaryComma>,
    },
    {
        id: 109 as Id<CommaClass>,
        primaryCommaId: 109 as Id<PrimaryComma>,
    },
    {
        id: 110 as Id<CommaClass>,
        primaryCommaId: 110 as Id<PrimaryComma>,
    },
    {
        id: 111 as Id<CommaClass>,
        primaryCommaId: 111 as Id<PrimaryComma>,
    },
    {
        id: 112 as Id<CommaClass>,
        primaryCommaId: 112 as Id<PrimaryComma>,
    },
    {
        id: 113 as Id<CommaClass>,
        primaryCommaId: 113 as Id<PrimaryComma>,
    },
    {
        id: 114 as Id<CommaClass>,
        primaryCommaId: 114 as Id<PrimaryComma>,
    },
    {
        id: 115 as Id<CommaClass>,
        primaryCommaId: 115 as Id<PrimaryComma>,
    },
    {
        id: 116 as Id<CommaClass>,
        primaryCommaId: 116 as Id<PrimaryComma>,
    },
    {
        id: 117 as Id<CommaClass>,
        primaryCommaId: 117 as Id<PrimaryComma>,
    },
    {
        id: 118 as Id<CommaClass>,
        primaryCommaId: 118 as Id<PrimaryComma>,
    },
    {
        id: 119 as Id<CommaClass>,
        primaryCommaId: 119 as Id<PrimaryComma>,
    },
    {
        id: 120 as Id<CommaClass>,
        primaryCommaId: 120 as Id<PrimaryComma>,
    },
    {
        id: 121 as Id<CommaClass>,
        primaryCommaId: 121 as Id<PrimaryComma>,
    },
    {
        id: 122 as Id<CommaClass>,
        primaryCommaId: 122 as Id<PrimaryComma>,
    },
    {
        id: 123 as Id<CommaClass>,
        primaryCommaId: 123 as Id<PrimaryComma>,
    },
    {
        id: 124 as Id<CommaClass>,
        primaryCommaId: 124 as Id<PrimaryComma>,
    },
    {
        id: 125 as Id<CommaClass>,
        primaryCommaId: 125 as Id<PrimaryComma>,
    },
    {
        id: 126 as Id<CommaClass>,
        primaryCommaId: 126 as Id<PrimaryComma>,
    },
    {
        id: 127 as Id<CommaClass>,
        primaryCommaId: 127 as Id<PrimaryComma>,
    },
    {
        id: 128 as Id<CommaClass>,
        primaryCommaId: 128 as Id<PrimaryComma>,
    },
    {
        id: 129 as Id<CommaClass>,
        primaryCommaId: 129 as Id<PrimaryComma>,
    },
    {
        id: 130 as Id<CommaClass>,
        primaryCommaId: 130 as Id<PrimaryComma>,
    },
    {
        id: 131 as Id<CommaClass>,
        primaryCommaId: 131 as Id<PrimaryComma>,
    },
    {
        id: 132 as Id<CommaClass>,
        primaryCommaId: 132 as Id<PrimaryComma>,
    },
    {
        id: 133 as Id<CommaClass>,
        primaryCommaId: 133 as Id<PrimaryComma>,
    },
    {
        id: 134 as Id<CommaClass>,
        primaryCommaId: 134 as Id<PrimaryComma>,
    },
    {
        id: 135 as Id<CommaClass>,
        primaryCommaId: 135 as Id<PrimaryComma>,
    },
    {
        id: 136 as Id<CommaClass>,
        primaryCommaId: 136 as Id<PrimaryComma>,
    },
    {
        id: 137 as Id<CommaClass>,
        primaryCommaId: 137 as Id<PrimaryComma>,
    },
    {
        id: 138 as Id<CommaClass>,
        primaryCommaId: 138 as Id<PrimaryComma>,
    },
    {
        id: 139 as Id<CommaClass>,
        primaryCommaId: 139 as Id<PrimaryComma>,
    },
    {
        id: 140 as Id<CommaClass>,
        primaryCommaId: 140 as Id<PrimaryComma>,
    },
    {
        id: 141 as Id<CommaClass>,
        primaryCommaId: 141 as Id<PrimaryComma>,
    },
    {
        id: 142 as Id<CommaClass>,
        primaryCommaId: 142 as Id<PrimaryComma>,
    },
    {
        id: 143 as Id<CommaClass>,
        primaryCommaId: 143 as Id<PrimaryComma>,
    },
    {
        id: 144 as Id<CommaClass>,
        primaryCommaId: 144 as Id<PrimaryComma>,
    },
    {
        id: 145 as Id<CommaClass>,
        primaryCommaId: 145 as Id<PrimaryComma>,
    },
    {
        id: 146 as Id<CommaClass>,
        primaryCommaId: 146 as Id<PrimaryComma>,
    },
    {
        id: 147 as Id<CommaClass>,
        primaryCommaId: 147 as Id<PrimaryComma>,
    },
    {
        id: 148 as Id<CommaClass>,
        primaryCommaId: 148 as Id<PrimaryComma>,
    },
]

export {
    COMMA_CLASSES,
}

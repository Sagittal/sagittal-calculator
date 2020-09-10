import { Id, Monzo } from "../../general"
import { SagittalComma } from "../types"

const UNISON: SagittalComma = { id: 0 as Id<SagittalComma>, monzo: [] as Monzo as Monzo<{ comma: true }> }
const PYTHAGOREAN_COMMA: SagittalComma = { id: 48 as Id<SagittalComma>, monzo: [-19, 12] as Monzo<{ comma: true }> }
const APOTOME: SagittalComma = { id: 1000 as Id<SagittalComma>, monzo: [-11, 7] as Monzo<{ comma: true }> }

const SAGITTAL_COMMAS: SagittalComma[] = [
    UNISON,
    { id: 1 as Id<SagittalComma>, monzo: [12, -2, -1, -1, 0, -1] },
    { id: 2 as Id<SagittalComma>, monzo: [5, -3, 1, -1, -1, 1] },
    { id: 3 as Id<SagittalComma>, monzo: [6, -5, -1, 0, 0, 0, 0, 1] },
    { id: 4 as Id<SagittalComma>, monzo: [-15, 8, 1] },
    { id: 5 as Id<SagittalComma>, monzo: [-3, 6, 0, -1, 0, -1] },
    { id: 6 as Id<SagittalComma>, monzo: [-8, 10, -4, -1, 0, 0, 0, 1] },
    { id: 7 as Id<SagittalComma>, monzo: [-9, 3, 0, 0, 0, 0, 0, 1] },
    { id: 8 as Id<SagittalComma>, monzo: [-3, 2, -1, 2, -1] },
    { id: 9 as Id<SagittalComma>, monzo: [-7, -1, 1, 1, 1] },
    { id: 10 as Id<SagittalComma>, monzo: [5, -3, 0, 0, 1, -1] },
    { id: 11 as Id<SagittalComma>, monzo: [-11, 6, 0, 0, -1, 0, 0, 0, 0, 0, 1] },
    { id: 12 as Id<SagittalComma>, monzo: [10, -6, 1, -1] },
    { id: 13 as Id<SagittalComma>, monzo: [5, -7, -1, 3] },
    { id: 14 as Id<SagittalComma>, monzo: [8, -1, -1, 0, 0, 0, -1] },
    { id: 15 as Id<SagittalComma>, monzo: [-4, 9, -2, -2] },
    { id: 16 as Id<SagittalComma>, monzo: [-5, 2, 2, -1] },
    { id: 17 as Id<SagittalComma>, monzo: [-10, 1, 0, 3] },
    { id: 18 as Id<SagittalComma>, monzo: [-7, 7, 0, 0, 0, 0, -1] },
    { id: 19 as Id<SagittalComma>, monzo: [-17, 2, 0, 0, 4] },
    { id: 20 as Id<SagittalComma>, monzo: [7, -4, 0, 1, -1] },
    { id: 21 as Id<SagittalComma>, monzo: [3, -7, 2, 0, 1] },
    { id: 22 as Id<SagittalComma>, monzo: [-13, 7, 0, 2, 0, -1] },
    { id: 23 as Id<SagittalComma>, monzo: [21, -5, -2, -3] },
    { id: 24 as Id<SagittalComma>, monzo: [-8, 4, 1, 1, -1] },
    { id: 25 as Id<SagittalComma>, monzo: [4, 2, 0, 0, -1, -1] },
    { id: 26 as Id<SagittalComma>, monzo: [3, -3, -1, 0, 0, 0, 1] },
    { id: 27 as Id<SagittalComma>, monzo: [9, -5, 0, 0, 1, 0, 0, 0, -1] },
    { id: 28 as Id<SagittalComma>, monzo: [1, 2, -3, 1] },
    { id: 29 as Id<SagittalComma>, monzo: [0, -5, 1, 2] },
    { id: 30 as Id<SagittalComma>, monzo: [-12, 5, 0, 0, 0, 0, 1] },
    { id: 31 as Id<SagittalComma>, monzo: [2, -4, 0, -1, 1, 1] },
    { id: 32 as Id<SagittalComma>, monzo: [-14, 10, -2, 1] },
    { id: 33 as Id<SagittalComma>, monzo: [-15, 3, 2, 2] },
    { id: 34 as Id<SagittalComma>, monzo: [5, -6, 0, 0, 0, 0, 0, 0, 1] },
    { id: 35 as Id<SagittalComma>, monzo: [9, -1, 0, 0, 0, -2] },
    { id: 36 as Id<SagittalComma>, monzo: [-1, 2, 0, -2, 1] },
    { id: 37 as Id<SagittalComma>, monzo: [-8, 6, 0, 0, 1, 0, 0, 0, 0, 0, -1] },
    { id: 38 as Id<SagittalComma>, monzo: [13, -9, 0, -1, 0, 0, 1] },
    { id: 39 as Id<SagittalComma>, monzo: [-1, -2, -1, 1, 0, 1] },
    { id: 40 as Id<SagittalComma>, monzo: [11, -4, -2] },
    { id: 41 as Id<SagittalComma>, monzo: [-10, 9, 0, 0, 0, 0, 0, -1] },
    { id: 42 as Id<SagittalComma>, monzo: [8, 0, 0, 0, -1, 0, 0, 0, -1] },
    { id: 43 as Id<SagittalComma>, monzo: [-16, 6, 0, 1, 0, 1] },
    { id: 44 as Id<SagittalComma>, monzo: [-4, 4, -1] },
    { id: 45 as Id<SagittalComma>, monzo: [-5, -3, 3, 1] },
    { id: 46 as Id<SagittalComma>, monzo: [7, -5, 2, 0, 0, -1] },
    { id: 47 as Id<SagittalComma>, monzo: [2, -1, -2, 0, 0, 0, 0, 1] },
    PYTHAGOREAN_COMMA,
    { id: 49 as Id<SagittalComma>, monzo: [-20, 5, 4, 1] },
    { id: 50 as Id<SagittalComma>, monzo: [4, -5, -1, 1, 1] },
    { id: 51 as Id<SagittalComma>, monzo: [-8, 3, 3, 0, 0, -1] },
    { id: 52 as Id<SagittalComma>, monzo: [-13, 7, -1, 0, 0, 0, 0, 1] },
    { id: 53 as Id<SagittalComma>, monzo: [9, -8, 0, 0, 0, 1] },
    { id: 54 as Id<SagittalComma>, monzo: [21, -10, -1, -1] },
    { id: 55 as Id<SagittalComma>, monzo: [-11, 3, 0, 1, 1] },
    { id: 56 as Id<SagittalComma>, monzo: [1, 1, -1, 0, 1, -1] },
    { id: 57 as Id<SagittalComma>, monzo: [-6, 0, 1, 0, 0, 1] },
    { id: 58 as Id<SagittalComma>, monzo: [6, -2, 0, -1] },
    { id: 59 as Id<SagittalComma>, monzo: [5, -9, 4] },
    { id: 60 as Id<SagittalComma>, monzo: [-14, 9, 0, 0, 1, -1] },
    { id: 61 as Id<SagittalComma>, monzo: [-21, 8, 2, 0, 0, 1] },
    { id: 62 as Id<SagittalComma>, monzo: [-9, 6, 1, -1] },
    { id: 63 as Id<SagittalComma>, monzo: [-10, -1, 5] },
    { id: 64 as Id<SagittalComma>, monzo: [5, -5, 1, 0, -1, 0, 1] },
    { id: 65 as Id<SagittalComma>, monzo: [-3, 1, 0, -1, 0, 0, 0, 1] },
    { id: 66 as Id<SagittalComma>, monzo: [3, 0, -1, 1, -1] },
    { id: 67 as Id<SagittalComma>, monzo: [-1, -3, 1, 0, 1] },
    { id: 68 as Id<SagittalComma>, monzo: [11, -5, 0, -1, 1, -1] },
    { id: 69 as Id<SagittalComma>, monzo: [-4, 1, 3, 0, 0, 0, 0, 0, -1] },
    { id: 70 as Id<SagittalComma>, monzo: [-12, 8, 0, 1, -1] },
    { id: 71 as Id<SagittalComma>, monzo: [2, -1, 0, 0, 0, 1, -1] },
    { id: 72 as Id<SagittalComma>, monzo: [-1, 1, -2, 0, 0, 0, 1] },
    { id: 73 as Id<SagittalComma>, monzo: [2, 2, 0, 1, 0, -1, 0, -1] },
    { id: 74 as Id<SagittalComma>, monzo: [1, 0, 2, -2] },
    { id: 75 as Id<SagittalComma>, monzo: [3, -5, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
    { id: 76 as Id<SagittalComma>, monzo: [-4, -1, 0, 2] },
    { id: 77 as Id<SagittalComma>, monzo: [-16, 9, -1, 0, 0, 0, 1] },
    { id: 79 as Id<SagittalComma>, monzo: [-10, 7, 0, 0, 1, 0, 0, 0, -1] },
    { id: 80 as Id<SagittalComma>, monzo: [13, -6, 0, 0, -1] },
    { id: 81 as Id<SagittalComma>, monzo: [-19, 7, 1, 2] },
    { id: 82 as Id<SagittalComma>, monzo: [1, -2, -1, 0, 0, 0, 0, 0, 1] },
    { id: 83 as Id<SagittalComma>, monzo: [-7, 5, 0, 1, 0, -1] },
    { id: 84 as Id<SagittalComma>, monzo: [7, -4, 0, 0, 1, 0, -1] },
    { id: 85 as Id<SagittalComma>, monzo: [-2, 2, 1, 0, -1] },
    { id: 86 as Id<SagittalComma>, monzo: [10, 0, 0, -1, -1, -1] },
    { id: 87 as Id<SagittalComma>, monzo: [-14, 6, 0, 0, 0, 0, 0, 0, 1] },
    { id: 88 as Id<SagittalComma>, monzo: [-5, 2, -2, 1, 0, 1] },
    { id: 89 as Id<SagittalComma>, monzo: [7, 0, -3] },
    { id: 90 as Id<SagittalComma>, monzo: [6, -7, 1, 1] },
    { id: 91 as Id<SagittalComma>, monzo: [-6, 3, 0, -1, 0, 0, 1] },
    { id: 92 as Id<SagittalComma>, monzo: [-20, 10, -1, 1, 0, 1] },
    { id: 93 as Id<SagittalComma>, monzo: [-8, 8, -2] },
    { id: 94 as Id<SagittalComma>, monzo: [-9, 1, 2, 1] },
    { id: 95 as Id<SagittalComma>, monzo: [3, -1, 1, 0, 0, -1] },
    { id: 96 as Id<SagittalComma>, monzo: [-11, 6, 0, 2, 0, 0, -1] },
    { id: 97 as Id<SagittalComma>, monzo: [-1, 1, 0, 0, 0, 1, 0, -1] },
    { id: 98 as Id<SagittalComma>, monzo: [0, -1, -2, 1, 1] },
    { id: 99 as Id<SagittalComma>, monzo: [-12, 7, 2, 0, 0, -1] },
    { id: 100 as Id<SagittalComma>, monzo: [5, -4, -1, 0, 0, 1] },
    { id: 101 as Id<SagittalComma>, monzo: [17, -6, -2, -1] },
    { id: 102 as Id<SagittalComma>, monzo: [-2, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
    { id: 103 as Id<SagittalComma>, monzo: [-3, 5, -2, 0, 1, -1] },
    { id: 104 as Id<SagittalComma>, monzo: [-10, 4, 0, 0, 0, 1] },
    { id: 105 as Id<SagittalComma>, monzo: [2, 2, -1, -1] },
    { id: 106 as Id<SagittalComma>, monzo: [1, -5, 3] },
    { id: 107 as Id<SagittalComma>, monzo: [4, -2, 0, 0, 1, 0, 0, -1] },
    { id: 108 as Id<SagittalComma>, monzo: [-25, 12, 1, 0, 0, 1] },
    { id: 109 as Id<SagittalComma>, monzo: [-13, 10, 0, -1] },
    { id: 110 as Id<SagittalComma>, monzo: [-14, 3, 4] },
    { id: 111 as Id<SagittalComma>, monzo: [10, -7, -1, 0, 1] },
    { id: 112 as Id<SagittalComma>, monzo: [1, -1, 0, 0, -1, 0, 1] },
    { id: 113 as Id<SagittalComma>, monzo: [7, -3, 1, 0, 0, 0, 0, 0, -1] },
    { id: 114 as Id<SagittalComma>, monzo: [-1, 4, -2, 1, -1] },
    { id: 115 as Id<SagittalComma>, monzo: [-5, 1, 0, 0, 1] },
    { id: 116 as Id<SagittalComma>, monzo: [-14, 7, 1, 0, -1, 0, 1] },
    { id: 117 as Id<SagittalComma>, monzo: [0, -2, 1, -1, 0, 1] },
    { id: 118 as Id<SagittalComma>, monzo: [12, -4, 0, -2] },
    { id: 119 as Id<SagittalComma>, monzo: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] },
    { id: 120 as Id<SagittalComma>, monzo: [-20, 9, 1, 0, 1] },
    { id: 121 as Id<SagittalComma>, monzo: [-8, 7, 0, -1, 1, -1] },
    { id: 122 as Id<SagittalComma>, monzo: [-6, -2, 1, 1, 0, 0, 1] },
    { id: 123 as Id<SagittalComma>, monzo: [-3, 4, 1, -2] },
    { id: 124 as Id<SagittalComma>, monzo: [-8, 3, -1, 2] },
    { id: 125 as Id<SagittalComma>, monzo: [-5, 9, -1, -1, 0, 0, -1] },
    { id: 126 as Id<SagittalComma>, monzo: [-3, 0, 0, 1, -1, 1] },
    { id: 127 as Id<SagittalComma>, monzo: [9, -2, -1, 0, -1] },
    { id: 128 as Id<SagittalComma>, monzo: [-16, 7, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
    { id: 129 as Id<SagittalComma>, monzo: [-23, 11, 0, 2] },
    { id: 130 as Id<SagittalComma>, monzo: [-11, 9, -1, 1, 0, -1] },
    { id: 131 as Id<SagittalComma>, monzo: [3, 0, -1, 0, 1, 0, -1] },
    { id: 132 as Id<SagittalComma>, monzo: [-6, 6, 0, 0, -1] },
    { id: 133 as Id<SagittalComma>, monzo: [-10, 3, 2, -1, 1] },
    { id: 134 as Id<SagittalComma>, monzo: [-18, 10, -1, 0, 0, 0, 0, 0, 1] },
    { id: 135 as Id<SagittalComma>, monzo: [-12, 8, 0, 0, 1, 0, -1] },
    { id: 136 as Id<SagittalComma>, monzo: [-21, 14, 1, 0, -1] },
    { id: 137 as Id<SagittalComma>, monzo: [3, 4, -4] },
    { id: 138 as Id<SagittalComma>, monzo: [2, -3, 0, 1] },
    { id: 139 as Id<SagittalComma>, monzo: [14, -5, -1, 0, 0, -1] },
    { id: 140 as Id<SagittalComma>, monzo: [-15, 9, 0, 0, -1, 0, 0, 1] },
    { id: 141 as Id<SagittalComma>, monzo: [-12, 12, -3] },
    { id: 142 as Id<SagittalComma>, monzo: [-13, 5, 1, 1] },
    { id: 143 as Id<SagittalComma>, monzo: [-1, 3, 0, 0, 0, -1] },
    { id: 144 as Id<SagittalComma>, monzo: [-8, 2, 2, 0, -1, 1] },
    { id: 145 as Id<SagittalComma>, monzo: [-9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] },
    { id: 146 as Id<SagittalComma>, monzo: [-28, 13, 2, 1] },
    { id: 147 as Id<SagittalComma>, monzo: [-16, 11, 1, 0, 0, -1] },
    { id: 148 as Id<SagittalComma>, monzo: [1, 0, -2, 0, 0, 1] },
    { id: 149 as Id<SagittalComma>, monzo: [-11, 8, 2, -1, -1] },
    APOTOME,
] as SagittalComma[]

export {
    SAGITTAL_COMMAS,
    APOTOME,
}

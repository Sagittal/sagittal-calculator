import { Id, PYTHAGOREAN_COMMA, UNISON } from "../../general"
import { CommaClass, Flacco } from "./types"

const COMMA_CLASSES: CommaClass[] = [
    {
        id: 0 as Id<CommaClass>,
        representativeFlaccoId: 0 as Id<Flacco>,
        pitch: UNISON,
    },
    {
        id: 1 as Id<CommaClass>,
        representativeFlaccoId: 1 as Id<Flacco>,
        pitch: { monzo: [12, -2, -1, -1, 0, -1] },
    },
    {
        id: 2 as Id<CommaClass>,
        representativeFlaccoId: 2 as Id<Flacco>,
        pitch: { monzo: [5, -3, 1, -1, -1, 1] },
    },
    {
        id: 3 as Id<CommaClass>,
        representativeFlaccoId: 3 as Id<Flacco>,
        pitch: { monzo: [6, -5, -1, 0, 0, 0, 0, 1] },
    },
    {
        id: 4 as Id<CommaClass>,
        representativeFlaccoId: 4 as Id<Flacco>,
        pitch: { monzo: [-15, 8, 1] },
    },
    {
        id: 5 as Id<CommaClass>,
        representativeFlaccoId: 5 as Id<Flacco>,
        pitch: { monzo: [-3, 6, 0, -1, 0, -1] },
    },
    {
        id: 6 as Id<CommaClass>,
        representativeFlaccoId: 6 as Id<Flacco>,
        pitch: { monzo: [-8, 10, -4, -1, 0, 0, 0, 1] },
    },
    {
        id: 7 as Id<CommaClass>,
        representativeFlaccoId: 7 as Id<Flacco>,
        pitch: { monzo: [-9, 3, 0, 0, 0, 0, 0, 1] },
    },
    {
        id: 8 as Id<CommaClass>,
        representativeFlaccoId: 8 as Id<Flacco>,
        pitch: { monzo: [-3, 2, -1, 2, -1] },
    },
    {
        id: 9 as Id<CommaClass>,
        representativeFlaccoId: 9 as Id<Flacco>,
        pitch: { monzo: [-7, -1, 1, 1, 1] },
    },
    {
        id: 10 as Id<CommaClass>,
        representativeFlaccoId: 10 as Id<Flacco>,
        pitch: { monzo: [5, -3, 0, 0, 1, -1] },
    },
    {
        id: 11 as Id<CommaClass>,
        representativeFlaccoId: 11 as Id<Flacco>,
        pitch: { monzo: [-11, 6, 0, 0, -1, 0, 0, 0, 0, 0, 1] },
    },
    {
        id: 12 as Id<CommaClass>,
        representativeFlaccoId: 12 as Id<Flacco>,
        pitch: { monzo: [10, -6, 1, -1] },
    },
    {
        id: 13 as Id<CommaClass>,
        representativeFlaccoId: 13 as Id<Flacco>,
        pitch: { monzo: [5, -7, -1, 3] },
    },
    {
        id: 14 as Id<CommaClass>,
        representativeFlaccoId: 14 as Id<Flacco>,
        pitch: { monzo: [8, -1, -1, 0, 0, 0, -1] },
    },
    {
        id: 15 as Id<CommaClass>,
        representativeFlaccoId: 15 as Id<Flacco>,
        pitch: { monzo: [-4, 9, -2, -2] },
    },
    {
        id: 16 as Id<CommaClass>,
        representativeFlaccoId: 16 as Id<Flacco>,
        pitch: { monzo: [-5, 2, 2, -1] },
    },
    {
        id: 17 as Id<CommaClass>,
        representativeFlaccoId: 17 as Id<Flacco>,
        pitch: { monzo: [-10, 1, 0, 3] },
    },
    {
        id: 18 as Id<CommaClass>,
        representativeFlaccoId: 18 as Id<Flacco>,
        pitch: { monzo: [-7, 7, 0, 0, 0, 0, -1] },
    },
    {
        id: 19 as Id<CommaClass>,
        representativeFlaccoId: 19 as Id<Flacco>,
        pitch: { monzo: [-17, 2, 0, 0, 4] },
    },
    {
        id: 20 as Id<CommaClass>,
        representativeFlaccoId: 20 as Id<Flacco>,
        pitch: { monzo: [7, -4, 0, 1, -1] },
    },
    {
        id: 21 as Id<CommaClass>,
        representativeFlaccoId: 21 as Id<Flacco>,
        pitch: { monzo: [3, -7, 2, 0, 1] },
    },
    {
        id: 22 as Id<CommaClass>,
        representativeFlaccoId: 22 as Id<Flacco>,
        pitch: { monzo: [-13, 7, 0, 2, 0, -1] },
    },
    {
        id: 23 as Id<CommaClass>,
        representativeFlaccoId: 23 as Id<Flacco>,
        pitch: { monzo: [21, -5, -2, -3] },
    },
    {
        id: 24 as Id<CommaClass>,
        representativeFlaccoId: 24 as Id<Flacco>,
        pitch: { monzo: [-8, 4, 1, 1, -1] },
    },
    {
        id: 25 as Id<CommaClass>,
        representativeFlaccoId: 25 as Id<Flacco>,
        pitch: { monzo: [4, 2, 0, 0, -1, -1] },
    },
    {
        id: 26 as Id<CommaClass>,
        representativeFlaccoId: 26 as Id<Flacco>,
        pitch: { monzo: [3, -3, -1, 0, 0, 0, 1] },
    },
    {
        id: 27 as Id<CommaClass>,
        representativeFlaccoId: 27 as Id<Flacco>,
        pitch: { monzo: [9, -5, 0, 0, 1, 0, 0, 0, -1] },
    },
    {
        id: 28 as Id<CommaClass>,
        representativeFlaccoId: 28 as Id<Flacco>,
        pitch: { monzo: [1, 2, -3, 1] },
    },
    {
        id: 29 as Id<CommaClass>,
        representativeFlaccoId: 29 as Id<Flacco>,
        pitch: { monzo: [0, -5, 1, 2] },
    },
    {
        id: 30 as Id<CommaClass>,
        representativeFlaccoId: 30 as Id<Flacco>,
        pitch: { monzo: [-12, 5, 0, 0, 0, 0, 1] },
    },
    {
        id: 31 as Id<CommaClass>,
        representativeFlaccoId: 31 as Id<Flacco>,
        pitch: { monzo: [2, -4, 0, -1, 1, 1] },
    },
    {
        id: 32 as Id<CommaClass>,
        representativeFlaccoId: 32 as Id<Flacco>,
        pitch: { monzo: [-14, 10, -2, 1] },
    },
    {
        id: 33 as Id<CommaClass>,
        representativeFlaccoId: 33 as Id<Flacco>,
        pitch: { monzo: [-15, 3, 2, 2] },
    },
    {
        id: 34 as Id<CommaClass>,
        representativeFlaccoId: 34 as Id<Flacco>,
        pitch: { monzo: [5, -6, 0, 0, 0, 0, 0, 0, 1] },
    },
    {
        id: 35 as Id<CommaClass>,
        representativeFlaccoId: 35 as Id<Flacco>,
        pitch: { monzo: [9, -1, 0, 0, 0, -2] },
    },
    {
        id: 36 as Id<CommaClass>,
        representativeFlaccoId: 36 as Id<Flacco>,
        pitch: { monzo: [-1, 2, 0, -2, 1] },
    },
    {
        id: 37 as Id<CommaClass>,
        representativeFlaccoId: 37 as Id<Flacco>,
        pitch: { monzo: [-8, 6, 0, 0, 1, 0, 0, 0, 0, 0, -1] },
    },
    {
        id: 38 as Id<CommaClass>,
        representativeFlaccoId: 38 as Id<Flacco>,
        pitch: { monzo: [13, -9, 0, -1, 0, 0, 1] },
    },
    {
        id: 39 as Id<CommaClass>,
        representativeFlaccoId: 39 as Id<Flacco>,
        pitch: { monzo: [-1, -2, -1, 1, 0, 1] },
    },
    {
        id: 40 as Id<CommaClass>,
        representativeFlaccoId: 40 as Id<Flacco>,
        pitch: { monzo: [11, -4, -2] },
    },
    {
        id: 41 as Id<CommaClass>,
        representativeFlaccoId: 41 as Id<Flacco>,
        pitch: { monzo: [-10, 9, 0, 0, 0, 0, 0, -1] },
    },
    {
        id: 42 as Id<CommaClass>,
        representativeFlaccoId: 42 as Id<Flacco>,
        pitch: { monzo: [8, 0, 0, 0, -1, 0, 0, 0, -1] },
    },
    {
        id: 43 as Id<CommaClass>,
        representativeFlaccoId: 43 as Id<Flacco>,
        pitch: { monzo: [-16, 6, 0, 1, 0, 1] },
    },
    {
        id: 44 as Id<CommaClass>,
        representativeFlaccoId: 44 as Id<Flacco>,
        pitch: { monzo: [-4, 4, -1] },
    },
    {
        id: 45 as Id<CommaClass>,
        representativeFlaccoId: 45 as Id<Flacco>,
        pitch: { monzo: [-5, -3, 3, 1] },
    },
    {
        id: 46 as Id<CommaClass>,
        representativeFlaccoId: 46 as Id<Flacco>,
        pitch: { monzo: [7, -5, 2, 0, 0, -1] },
    },
    {
        id: 47 as Id<CommaClass>,
        representativeFlaccoId: 47 as Id<Flacco>,
        pitch: { monzo: [2, -1, -2, 0, 0, 0, 0, 1] },
    },
    {
        id: 48 as Id<CommaClass>,
        representativeFlaccoId: 48 as Id<Flacco>,
        pitch: PYTHAGOREAN_COMMA,
    },
    {
        id: 49 as Id<CommaClass>,
        representativeFlaccoId: 49 as Id<Flacco>,
        pitch: { monzo: [-20, 5, 4, 1] },
    },
    {
        id: 50 as Id<CommaClass>,
        representativeFlaccoId: 50 as Id<Flacco>,
        pitch: { monzo: [4, -5, -1, 1, 1] },
    },
    {
        id: 51 as Id<CommaClass>,
        representativeFlaccoId: 51 as Id<Flacco>,
        pitch: { monzo: [-8, 3, 3, 0, 0, -1] },
    },
    {
        id: 52 as Id<CommaClass>,
        representativeFlaccoId: 52 as Id<Flacco>,
        pitch: { monzo: [-13, 7, -1, 0, 0, 0, 0, 1] },  // 1.01447753906
    },
    {
        id: 53 as Id<CommaClass>,
        representativeFlaccoId: 53 as Id<Flacco>,
        pitch: { monzo: [9, -8, 0, 0, 0, 1] },          // 1.01447950008
    },
    {
        id: 54 as Id<CommaClass>,
        representativeFlaccoId: 54 as Id<Flacco>,
        pitch: { monzo: [21, -10, -1, -1] },
    },
    {
        id: 55 as Id<CommaClass>,
        representativeFlaccoId: 55 as Id<Flacco>,
        pitch: { monzo: [-11, 3, 0, 1, 1] },
    },
    {
        id: 56 as Id<CommaClass>,
        representativeFlaccoId: 56 as Id<Flacco>,
        pitch: { monzo: [1, 1, -1, 0, 1, -1] },
    },
    {
        id: 57 as Id<CommaClass>,
        representativeFlaccoId: 57 as Id<Flacco>,
        pitch: { monzo: [-6, 0, 1, 0, 0, 1] },
    },
    {
        id: 58 as Id<CommaClass>,
        representativeFlaccoId: 58 as Id<Flacco>,
        pitch: { monzo: [6, -2, 0, -1] },
    },
    {
        id: 59 as Id<CommaClass>,
        representativeFlaccoId: 59 as Id<Flacco>,
        pitch: { monzo: [5, -9, 4] },
    },
    {
        id: 60 as Id<CommaClass>,
        representativeFlaccoId: 60 as Id<Flacco>,
        pitch: { monzo: [-14, 9, 0, 0, 1, -1] },
    },
    {
        id: 61 as Id<CommaClass>,
        representativeFlaccoId: 61 as Id<Flacco>,
        pitch: { monzo: [-21, 8, 2, 0, 0, 1] },
    },
    {
        id: 62 as Id<CommaClass>,
        representativeFlaccoId: 62 as Id<Flacco>,
        pitch: { monzo: [-9, 6, 1, -1] },
    },
    {
        id: 63 as Id<CommaClass>,
        representativeFlaccoId: 63 as Id<Flacco>,
        pitch: { monzo: [-10, -1, 5] },
    },
    {
        id: 64 as Id<CommaClass>,
        representativeFlaccoId: 64 as Id<Flacco>,
        pitch: { monzo: [5, -5, 1, 0, -1, 0, 1] },
    },
    {
        id: 65 as Id<CommaClass>,
        representativeFlaccoId: 65 as Id<Flacco>,
        pitch: { monzo: [-3, 1, 0, -1, 0, 0, 0, 1] },
    },
    {
        id: 66 as Id<CommaClass>,
        representativeFlaccoId: 66 as Id<Flacco>,
        pitch: { monzo: [3, 0, -1, 1, -1] },
    },
    {
        id: 67 as Id<CommaClass>,
        representativeFlaccoId: 67 as Id<Flacco>,
        pitch: { monzo: [-1, -3, 1, 0, 1] },
    },
    {
        id: 68 as Id<CommaClass>,
        representativeFlaccoId: 68 as Id<Flacco>,
        pitch: { monzo: [11, -5, 0, -1, 1, -1] },
    },
    {
        id: 69 as Id<CommaClass>,
        representativeFlaccoId: 69 as Id<Flacco>,
        pitch: { monzo: [-4, 1, 3, 0, 0, 0, 0, 0, -1] },
    },
    {
        id: 70 as Id<CommaClass>,
        representativeFlaccoId: 70 as Id<Flacco>,
        pitch: { monzo: [-12, 8, 0, 1, -1] },
    },
    {
        id: 71 as Id<CommaClass>,
        representativeFlaccoId: 71 as Id<Flacco>,
        pitch: { monzo: [2, -1, 0, 0, 0, 1, -1] },
    },
    {
        id: 72 as Id<CommaClass>,
        representativeFlaccoId: 72 as Id<Flacco>,
        pitch: { monzo: [-1, 1, -2, 0, 0, 0, 1] },
    },
    {
        id: 73 as Id<CommaClass>,
        representativeFlaccoId: 73 as Id<Flacco>,
        pitch: { monzo: [2, 2, 0, 1, 0, -1, 0, -1] },
    },
    {
        id: 74 as Id<CommaClass>,
        representativeFlaccoId: 74 as Id<Flacco>,
        pitch: { monzo: [1, 0, 2, -2] },
    },
    {
        id: 75 as Id<CommaClass>,
        representativeFlaccoId: 75 as Id<Flacco>,
        pitch: { monzo: [3, -5, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
    },
    {
        id: 76 as Id<CommaClass>,
        representativeFlaccoId: 76 as Id<Flacco>,
        pitch: { monzo: [-4, -1, 0, 2] },
    },
    {
        id: 77 as Id<CommaClass>,
        representativeFlaccoId: 77 as Id<Flacco>,
        pitch: { monzo: [-16, 9, -1, 0, 0, 0, 1] },
    },
    {
        id: 78 as Id<CommaClass>,
        representativeFlaccoId: 78 as Id<Flacco>,
        pitch: { monzo: [-10, 7, 0, 0, 1, 0, 0, 0, -1] },
    },
    {
        id: 79 as Id<CommaClass>,
        representativeFlaccoId: 79 as Id<Flacco>,
        pitch: { monzo: [13, -6, 0, 0, -1] },
    },
    {
        id: 80 as Id<CommaClass>,
        representativeFlaccoId: 80 as Id<Flacco>,
        pitch: { monzo: [-19, 7, 1, 2] },
    },
    {
        id: 81 as Id<CommaClass>,
        representativeFlaccoId: 81 as Id<Flacco>,
        pitch: { monzo: [1, -2, -1, 0, 0, 0, 0, 0, 1] },
    },
    {
        id: 82 as Id<CommaClass>,
        representativeFlaccoId: 82 as Id<Flacco>,
        pitch: { monzo: [-7, 5, 0, 1, 0, -1] },
    },
    {
        id: 83 as Id<CommaClass>,
        representativeFlaccoId: 83 as Id<Flacco>,
        pitch: { monzo: [7, -4, 0, 0, 1, 0, -1] },
    },
    {
        id: 84 as Id<CommaClass>,
        representativeFlaccoId: 84 as Id<Flacco>,
        pitch: { monzo: [-2, 2, 1, 0, -1] },
    },
    {
        id: 85 as Id<CommaClass>,
        representativeFlaccoId: 85 as Id<Flacco>,
        pitch: { monzo: [10, 0, 0, -1, -1, -1] },
    },
    {
        id: 86 as Id<CommaClass>,
        representativeFlaccoId: 86 as Id<Flacco>,
        pitch: { monzo: [-14, 6, 0, 0, 0, 0, 0, 0, 1] },
    },
    {
        id: 87 as Id<CommaClass>,
        representativeFlaccoId: 87 as Id<Flacco>,
        pitch: { monzo: [-5, 2, -2, 1, 0, 1] },
    },
    {
        id: 88 as Id<CommaClass>,
        representativeFlaccoId: 88 as Id<Flacco>,
        pitch: { monzo: [7, 0, -3] },
    },
    {
        id: 89 as Id<CommaClass>,
        representativeFlaccoId: 89 as Id<Flacco>,
        pitch: { monzo: [6, -7, 1, 1] },
    },
    {
        id: 90 as Id<CommaClass>,
        representativeFlaccoId: 90 as Id<Flacco>,
        pitch: { monzo: [-6, 3, 0, -1, 0, 0, 1] },
    },
    {
        id: 91 as Id<CommaClass>,
        representativeFlaccoId: 91 as Id<Flacco>,
        pitch: { monzo: [-20, 10, -1, 1, 0, 1] },
    },
    {
        id: 92 as Id<CommaClass>,
        representativeFlaccoId: 92 as Id<Flacco>,
        pitch: { monzo: [-8, 8, -2] },
    },
    {
        id: 93 as Id<CommaClass>,
        representativeFlaccoId: 93 as Id<Flacco>,
        pitch: { monzo: [-9, 1, 2, 1] },
    },
    {
        id: 94 as Id<CommaClass>,
        representativeFlaccoId: 94 as Id<Flacco>,
        pitch: { monzo: [3, -1, 1, 0, 0, -1] },
    },
    {
        id: 95 as Id<CommaClass>,
        representativeFlaccoId: 95 as Id<Flacco>,
        pitch: { monzo: [-11, 6, 0, 2, 0, 0, -1] },
    },
    {
        id: 96 as Id<CommaClass>,
        representativeFlaccoId: 96 as Id<Flacco>,
        pitch: { monzo: [-1, 1, 0, 0, 0, 1, 0, -1] },
    },
    {
        id: 97 as Id<CommaClass>,
        representativeFlaccoId: 97 as Id<Flacco>,
        pitch: { monzo: [0, -1, -2, 1, 1] },
    },
    {
        id: 98 as Id<CommaClass>,
        representativeFlaccoId: 98 as Id<Flacco>,
        pitch: { monzo: [-12, 7, 2, 0, 0, -1] },
    },
    {
        id: 99 as Id<CommaClass>,
        representativeFlaccoId: 99 as Id<Flacco>,
        pitch: { monzo: [5, -4, -1, 0, 0, 1] },
    },
    {
        id: 100 as Id<CommaClass>,
        representativeFlaccoId: 100 as Id<Flacco>,
        pitch: { monzo: [17, -6, -2, -1] },
    },
    {
        id: 101 as Id<CommaClass>,
        representativeFlaccoId: 101 as Id<Flacco>,
        pitch: { monzo: [-2, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
    },
    {
        id: 102 as Id<CommaClass>,
        representativeFlaccoId: 102 as Id<Flacco>,
        pitch: { monzo: [-3, 5, -2, 0, 1, -1] },
    },
    {
        id: 103 as Id<CommaClass>,
        representativeFlaccoId: 103 as Id<Flacco>,
        pitch: { monzo: [-10, 4, 0, 0, 0, 1] },
    },
    {
        id: 104 as Id<CommaClass>,
        representativeFlaccoId: 104 as Id<Flacco>,
        pitch: { monzo: [2, 2, -1, -1] },
    },
    {
        id: 105 as Id<CommaClass>,
        representativeFlaccoId: 105 as Id<Flacco>,
        pitch: { monzo: [1, -5, 3] },
    },
    {
        id: 106 as Id<CommaClass>,
        representativeFlaccoId: 106 as Id<Flacco>,
        pitch: { monzo: [4, -2, 0, 0, 1, 0, 0, -1] },
    },
    {
        id: 107 as Id<CommaClass>,
        representativeFlaccoId: 107 as Id<Flacco>,
        pitch: { monzo: [-25, 12, 1, 0, 0, 1] },
    },
    {
        id: 108 as Id<CommaClass>,
        representativeFlaccoId: 108 as Id<Flacco>,
        pitch: { monzo: [-13, 10, 0, -1] },
    },
    {
        id: 109 as Id<CommaClass>,
        representativeFlaccoId: 109 as Id<Flacco>,
        pitch: { monzo: [-14, 3, 4] },
    },
    {
        id: 110 as Id<CommaClass>,
        representativeFlaccoId: 110 as Id<Flacco>,
        pitch: { monzo: [10, -7, -1, 0, 1] },
    },
    {
        id: 111 as Id<CommaClass>,
        representativeFlaccoId: 111 as Id<Flacco>,
        pitch: { monzo: [1, -1, 0, 0, -1, 0, 1] },
    },
    {
        id: 112 as Id<CommaClass>,
        representativeFlaccoId: 112 as Id<Flacco>,
        pitch: { monzo: [7, -3, 1, 0, 0, 0, 0, 0, -1] },
    },
    {
        id: 113 as Id<CommaClass>,
        representativeFlaccoId: 113 as Id<Flacco>,
        pitch: { monzo: [-1, 4, -2, 1, -1] },
    },
    {
        id: 114 as Id<CommaClass>,
        representativeFlaccoId: 114 as Id<Flacco>,
        pitch: { monzo: [-5, 1, 0, 0, 1] },
    },
    {
        id: 115 as Id<CommaClass>,
        representativeFlaccoId: 115 as Id<Flacco>,
        pitch: { monzo: [-14, 7, 1, 0, -1, 0, 1] },
    },
    {
        id: 116 as Id<CommaClass>,
        representativeFlaccoId: 116 as Id<Flacco>,
        pitch: { monzo: [0, -2, 1, -1, 0, 1] },
    },
    {
        id: 117 as Id<CommaClass>,
        representativeFlaccoId: 117 as Id<Flacco>,
        pitch: { monzo: [12, -4, 0, -2] },
    },
    {
        id: 118 as Id<CommaClass>,
        representativeFlaccoId: 118 as Id<Flacco>,
        pitch: { monzo: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] },
    },
    {
        id: 119 as Id<CommaClass>,
        representativeFlaccoId: 119 as Id<Flacco>,
        pitch: { monzo: [-20, 9, 1, 0, 1] },
    },
    {
        id: 120 as Id<CommaClass>,
        representativeFlaccoId: 120 as Id<Flacco>,
        pitch: { monzo: [-8, 7, 0, -1, 1, -1] },
    },
    {
        id: 121 as Id<CommaClass>,
        representativeFlaccoId: 121 as Id<Flacco>,
        pitch: { monzo: [-6, -2, 1, 1, 0, 0, 1] },
    },
    {
        id: 122 as Id<CommaClass>,
        representativeFlaccoId: 122 as Id<Flacco>,
        pitch: { monzo: [-3, 4, 1, -2] },
    },
] as CommaClass[]

export {
    COMMA_CLASSES,
}

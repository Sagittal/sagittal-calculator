// tslint:disable max-line-length

import { JiNotationBoundClass, JI_NOTATION_BOUND_CLASSES } from "../../../../../../../src/sagittal/notations/ji"
import { analyzeJiNotationBoundClass } from "../../../../../../../src/scripts/jiNotationBoundClass/boundClass"
import { computeHistories } from "../../../../../../../src/scripts/jiNotationBoundClass/histories"
import { formatRankAnalyses } from "../../../../../../../src/scripts/jiNotationBoundClass/io/terminal/rank"
import { onlyRunInCi } from "../../../../../../helpers/onlyRunInCi"

describe("formatRankAnalyses", (): void => {
    it("gives the correct answer", (): void => {
        onlyRunInCi()

        JI_NOTATION_BOUND_CLASSES.map((jiNotationBoundClass: JiNotationBoundClass): void => {
            const histories = computeHistories(jiNotationBoundClass)
            analyzeJiNotationBoundClass(histories, jiNotationBoundClass)
        })

        const actual = formatRankAnalyses()

        const expected =
            "\n\n   ---   Rank Analyses   ---   " +
            "\n\n\n" +
            "ina midpoint event was worst-ranked bound class event:\n\ttotal: 99 bounds\n\tbounds: 0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 48, 50, 51, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 82, 83, 84, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97, 98, 99, 100, 101, 102, 103, 104, 106, 107, 108, 110, 111, 112, 113, 114, 115, 116, 117, 119, 121".blue +
            "\n\n" +
            "comma mean event was worst-ranked bound class event:\n\ttotal: 22 bounds\n\tbounds: 3, 13, 16, 18, 24, 31, 35, 40, 47, 49, 52, 65, 66, 74, 79, 80, 81, 85, 105, 109, 118, 120".cyan +
            "\n\n" +
            "size category bound event was worst-ranked bound class event:\n\ttotal: 2 bounds\n\tbounds: 96, 122".green
        expect(actual).toEqual(expected)
    })
})

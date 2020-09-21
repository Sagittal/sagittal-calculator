import { Count } from "../../../../../../../src/general"
import { ColorMethod, Row } from "../../../../../../../src/general/io"
import * as table from "../../../../../../../src/general/io/table/table"
import { BoundType } from "../../../../../../../src/sagittal/notations/ji"
import { JiNotationBoundAnalysis } from "../../../../../../../src/scripts/jiNotationBound/bound"
import { computeJiNotationBoundAnalysesOutput } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/bounds"
import { RANKS } from "../../../../../../../src/scripts/jiNotationBound/ranks"
import { jiNotationBoundAnalysisFixture } from "../../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeJiNotationBoundAnalysesOutput", (): void => {
    it("colors the rows correctly, according to their best rank", (): void => {
        const jiNotationBoundAnalyses: JiNotationBoundAnalysis[] = [
            { ...jiNotationBoundAnalysisFixture, bestRank: RANKS[ BoundType.INA_MIDPOINT ] },
            { ...jiNotationBoundAnalysisFixture, bestRank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ] },
            { ...jiNotationBoundAnalysisFixture, bestRank: RANKS[ BoundType.COMMA_MEAN ] },
        ]

        spyOn(table, "formatTable")

        computeJiNotationBoundAnalysesOutput(jiNotationBoundAnalyses)

        expect(table.formatTable).toHaveBeenCalledWith(
            jasmine.anything(),
            {
                colors: [
                    "white",
                    "white",
                    "white",
                    "white",
                    "white",
                    "white",
                    "blue",
                    "green",
                    "cyan",
                ] as ColorMethod[],
                headerRowCount: 5 as Count<Row<{ header: true }>>,
            },
        )
    })
})

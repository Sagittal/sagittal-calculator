import { Count } from "../../../../../../../src/general"
import { ColorMethod, Row } from "../../../../../../../src/general/io"
import * as table from "../../../../../../../src/general/io/table/table"
import { JiNotationBoundAnalysis } from "../../../../../../../src/scripts/jiNotationBound/bound"
import { EventType } from "../../../../../../../src/scripts/jiNotationBound/histories"
import { computeJiNotationBoundAnalysesTable } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/bounds"
import { RANKS } from "../../../../../../../src/scripts/jiNotationBound/ranks"
import { jiNotationBoundAnalysisFixture } from "../../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeJiNotationBoundAnalysesTable", (): void => {
    it("colors the rows correctly, according to their best rank", (): void => {
        const jiNotationBoundAnalyses: JiNotationBoundAnalysis[] = [
            { ...jiNotationBoundAnalysisFixture, bestRank: RANKS[ EventType.INA_MIDPOINT ] },
            { ...jiNotationBoundAnalysisFixture, bestRank: RANKS[ EventType.SIZE_CATEGORY_BOUND ] },
            { ...jiNotationBoundAnalysisFixture, bestRank: RANKS[ EventType.COMMA_MEAN ] },
        ]

        spyOn(table, "formatTable")

        computeJiNotationBoundAnalysesTable(jiNotationBoundAnalyses)

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

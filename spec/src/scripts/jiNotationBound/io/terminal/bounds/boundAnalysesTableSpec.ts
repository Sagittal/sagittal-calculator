import { Count } from "../../../../../../../src/general"
import { Rank } from "../../../../../../../src/general/code"
import { ColorMethod, Row } from "../../../../../../../src/general/io"
import * as table from "../../../../../../../src/general/io/table/table"
import { Integer } from "../../../../../../../src/general/math"
import { JiNotationBoundAnalysis } from "../../../../../../../src/scripts/jiNotationBound/bound"
import { EventAnalysis } from "../../../../../../../src/scripts/jiNotationBound/history/events"
import { computeJiNotationBoundAnalysesTable } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/bounds"
import { jiNotationBoundAnalysisFixture } from "../../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeJiNotationBoundAnalysesTable", (): void => {
    it("colors the rows correctly, according to their best rank", (): void => {
        const jiNotationBoundAnalyses: JiNotationBoundAnalysis[] = [
            { ...jiNotationBoundAnalysisFixture, bestRank: 0 as Integer & Rank<EventAnalysis> },
            { ...jiNotationBoundAnalysisFixture, bestRank: 2 as Integer & Rank<EventAnalysis> },
            { ...jiNotationBoundAnalysisFixture, bestRank: 1 as Integer & Rank<EventAnalysis> },
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

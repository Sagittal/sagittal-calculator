import { Count } from "../../../../../../../src/general"
import { Rank } from "../../../../../../../src/general/code"
import { ColorMethod, Row } from "../../../../../../../src/general/io"
import * as table from "../../../../../../../src/general/io/table/table"
import { Integer } from "../../../../../../../src/general/math"
import { AnalyzedBound } from "../../../../../../../src/scripts/bound/analyzeBound"
import { AnalyzedEvent } from "../../../../../../../src/scripts/bound/analyzedHistory/analyzeEvents"
import { computeBoundsAnalysisTable } from "../../../../../../../src/scripts/bound/io/terminal/bounds"
import { analyzedBoundFixture } from "../../../../../../helpers/src/scripts/bound/fixtures"

describe("computeBoundsAnalysisTable", () => {
    it("colors the rows correctly, according to their best rank", () => {
        const boundsAnalysis: AnalyzedBound[] = [
            { ...analyzedBoundFixture, bestRank: 0 as Rank<AnalyzedEvent, Integer> },
            { ...analyzedBoundFixture, bestRank: 2 as Rank<AnalyzedEvent, Integer> },
            { ...analyzedBoundFixture, bestRank: 1 as Rank<AnalyzedEvent, Integer> },
        ]

        spyOn(table, "formatTable")

        computeBoundsAnalysisTable(boundsAnalysis)

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
                headerRowCount: 5 as Count<Row<unknown, "Header">>,
            },
        )
    })
})

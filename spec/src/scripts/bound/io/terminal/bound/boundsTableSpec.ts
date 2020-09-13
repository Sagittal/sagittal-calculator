import { Count } from "../../../../../../../src/general"
import { Rank } from "../../../../../../../src/general/code"
import { ColorMethod, Row } from "../../../../../../../src/general/io"
import * as table from "../../../../../../../src/general/io/table/table"
import { Integer } from "../../../../../../../src/general/math"
import { BoundAnalysis } from "../../../../../../../src/scripts/bound/analyzeBound"
import { EventAnalysis } from "../../../../../../../src/scripts/bound/analyzeHistory/analyzeEvents"
import { computeBoundsAnalysisTable } from "../../../../../../../src/scripts/bound/io/terminal/bounds"
import { boundAnalysisFixture } from "../../../../../../helpers/src/scripts/bound/fixtures"

describe("computeBoundsAnalysisTable", () => {
    it("colors the rows correctly, according to their best rank", () => {
        const boundsAnalysis: BoundAnalysis[] = [
            { ...boundAnalysisFixture, bestRank: 0 as Integer & Rank<EventAnalysis> },
            { ...boundAnalysisFixture, bestRank: 2 as Integer & Rank<EventAnalysis> },
            { ...boundAnalysisFixture, bestRank: 1 as Integer & Rank<EventAnalysis> },
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
                headerRowCount: 5 as Count<Row<{ header: true }>>,
            },
        )
    })
})

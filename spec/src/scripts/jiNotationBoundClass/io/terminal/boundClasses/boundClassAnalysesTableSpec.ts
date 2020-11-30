import {ColorMethod, Count, Row} from "../../../../../../../src/general"
import * as table from "../../../../../../../src/general/io/table/table"
import {BoundType} from "../../../../../../../src/sagittal"
import {JiNotationBoundClassAnalysis} from "../../../../../../../src/scripts/jiNotationBoundClass/boundClass"
import {computeJiNotationBoundClassAnalysesOutput} from "../../../../../../../src/scripts/jiNotationBoundClass/io/terminal/boundClasses"
import {RANKS} from "../../../../../../../src/scripts/jiNotationBoundClass/ranks"
import {jiNotationBoundClassAnalysisFixture} from "../../../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeJiNotationBoundClassAnalysesOutput", (): void => {
    it("colors the rows correctly, according to their best rank", (): void => {
        const jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis[] = [
            {...jiNotationBoundClassAnalysisFixture, bestRank: RANKS[BoundType.INA_MIDPOINT]},
            {...jiNotationBoundClassAnalysisFixture, bestRank: RANKS[BoundType.SIZE_CATEGORY_BOUND]},
            {...jiNotationBoundClassAnalysisFixture, bestRank: RANKS[BoundType.COMMA_MEAN]},
        ]

        spyOn(table, "formatTable")

        computeJiNotationBoundClassAnalysesOutput(jiNotationBoundClassAnalysis)

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
                headerRowCount: 5 as Count<Row<{header: true}>>,
            },
        )
    })
})

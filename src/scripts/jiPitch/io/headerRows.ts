import {Count, Exponent, Max, Prime, Row, splitFieldTitlesIntoRowsBySpaces} from "@sagittal/general"
import {CommaAnalysis, JiPitchAnalysis, Two3FreeClassAnalysis} from "@sagittal/system"
import {excludeFields} from "./excludeFields"
import {
    COMMA_FIELD_TITLES,
    JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES,
    JI_PITCH_FIELD_TITLES,
    TWO_3_FREE_CLASS_FIELD_TITLES,
} from "./fieldTitles"
import {formatPrimeHeaders, splitMonzoAndQuotientFieldTitles} from "./splitMonzoAndQuotient"

const computeJiPitchHeaderRows = (
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
): Array<Row<{of: JiPitchAnalysis, header: true}>> =>
    formatPrimeHeaders(
        splitFieldTitlesIntoRowsBySpaces(
            splitMonzoAndQuotientFieldTitles(
                excludeFields(JI_PITCH_FIELD_TITLES),
                {maxMonzoLength},
            ),
        ),
    )

const compute23FreeClassHeaderRows = (): Array<Row<{of: Two3FreeClassAnalysis, header: true}>> =>
    splitFieldTitlesIntoRowsBySpaces(
        splitMonzoAndQuotientFieldTitles(
            excludeFields(TWO_3_FREE_CLASS_FIELD_TITLES),
            {recognizeNameTitleAsBeingFor23FreeClass: true},
        ),
    )

const computeNotatingCommasHeaderRows =
    (maxMonzoLength: Max<Count<Exponent<Prime>>>): Array<Row<{of: CommaAnalysis, header: true}>> =>
        formatPrimeHeaders(
            splitFieldTitlesIntoRowsBySpaces(
                splitMonzoAndQuotientFieldTitles(
                    excludeFields(COMMA_FIELD_TITLES),
                    {maxMonzoLength},
                ),
            ),
        )

const computeJiPitchesOrFindCommasHeaderRows =
    (maxMonzoLength: Max<Count<Exponent<Prime>>>): Array<Row<{of: CommaAnalysis, header: true}>> =>
        formatPrimeHeaders(
            splitFieldTitlesIntoRowsBySpaces(
                splitMonzoAndQuotientFieldTitles(
                    excludeFields(JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES),
                    {maxMonzoLength},
                ),
            ),
        )

export {
    computeJiPitchHeaderRows,
    compute23FreeClassHeaderRows,
    computeNotatingCommasHeaderRows,
    computeJiPitchesOrFindCommasHeaderRows,
}

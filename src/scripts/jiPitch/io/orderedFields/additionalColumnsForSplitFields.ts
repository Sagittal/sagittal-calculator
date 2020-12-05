import {add, Column, Count, Exponent, Max, ONE, Prime} from "@sagittal/general"

const ADDITIONAL_COLUMNS_FOR_SPLIT_QUOTIENT_FIELD = 2 as Count<Column>
const ADDITIONAL_COLUMNS_FOR_SPLIT_2_3_FREE_CLASS_FIELD = 3 as Count<Column>

const computeAdditionalColumnCountForSplitMonzoField = (
    maxMonzoLength: Max<Count<Exponent<Prime>>> = 0 as Max<Count<Exponent<Prime>>>,
): Count<Column> =>
    add(maxMonzoLength, ONE) as Count<Column>

export {
    ADDITIONAL_COLUMNS_FOR_SPLIT_QUOTIENT_FIELD,
    ADDITIONAL_COLUMNS_FOR_SPLIT_2_3_FREE_CLASS_FIELD,
    computeAdditionalColumnCountForSplitMonzoField,
}

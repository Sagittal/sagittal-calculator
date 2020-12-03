export {formatPrimeHeaders} from "./headers"
export {splitMonzoAndQuotientFieldTitles} from "./fieldTitles"
export {formatSplitQuotient} from "./quotient"
export {formatSplitMonzo} from "./monzo"
export {formatSplit23FreeClass} from "./two3FreeClass"
export {computeMaxMonzoLength} from "./maxMonzoLength"
export {computeSplitMonzoAndQuotientTableAlignment} from "./alignment"

// TODO: GETTING COMPLEX 3-LIMIT COMMA REFERENCE: MASTER TO-DO
//  Ideally I would have wanted to sort results by size category, then by ATE
//  But all I could do is sort by cents
//  This is because currently the comma name column is not able to be split
//  It would split into complexity, quotient (which in turn splits like a normal quotient), and then size category
//  Okay... so whether the quotient splits or not should probably be left up to whatever normally happens
//  But whether you split the comma name should be a new option
//  Or... could I just make this simpler by adding a new column called sizeCategory
//  Which by default is excluded
//  But you could request it
//  And it would be great if it sorted correctly (not alphabetically)
//  Alright so far I've added the sizeCategory field and excluded it by default
//  It doesn't sort correctly yet
//  (Using index for size category would also help with sorting them, and then just format them)
//  And I still can't accomplish the original goal because we can't parse comma-separated sortBy option to scripts
//  Nor can we sort by multiple nested sorts yet

export {ApotomeSlope, computeApotomeSlope, computeAte, computeAas} from "./uselessness"
export {
    N2D3P9,
    computeN2D3P9,
    computePrimeExponentExtremasGivenMaxN2D3P9,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
    computeN2,
    MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN,
} from "./unpopularity"
export {computeCentsError} from "./error"
export {lpei, Badness} from "./badness"
export {Complexity} from "./complexity"

// TODO: potentially uselessness and complexity could be consolidated, as could error and badness
//  If you want to view things that way. Not sure if that makes it clearer or less clear
//  See: http://forum.sagittal.org/viewtopic.php?f=4&t=493&p=2597#metric-hierarchy
//  How about this: nest the folders so that badness is the top level instead of metrics,
//  Then put error and complexity in there, and in complexity put uselessness and popularity.
//  And put sopfgtt in popularity

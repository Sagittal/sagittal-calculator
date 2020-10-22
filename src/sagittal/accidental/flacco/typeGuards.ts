import { Accent, Flag } from "./types"

const isFlag = (candidateFlag: Flag | Accent): candidateFlag is Flag =>
    !!(candidateFlag as Flag).side

const isAccent = (candidateAccent: Flag | Accent): candidateAccent is Accent =>
    !!(candidateAccent as Accent).orientation

export {
    isAccent,
    isFlag,
}

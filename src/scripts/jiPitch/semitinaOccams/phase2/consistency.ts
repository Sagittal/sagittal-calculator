import {Comma, computeMonzoMapping, LogTarget, saveLog} from "../../../../general"
import {formatComma, INSANE_ZETA_PEAK_VAL} from "../../../../sagittal"
import {TinaBucket} from "./types"

const checkMetacommaConsistency = (metacomma: Comma, tinaBucket: TinaBucket): void => {
    // TODO: should take numeric params to enforce that rational vals and rational monzos return integer steps
    const tinaMapping = computeMonzoMapping(metacomma.monzo, INSANE_ZETA_PEAK_VAL)
    const insaneZetaPeakEdoConsistent = tinaMapping as number === tinaBucket as number

    if (!insaneZetaPeakEdoConsistent) {
        saveLog(`FYI, this metacomma for a whole tina (which is within 9.5 tinas and therefore we care about it) is inconsistent! ${formatComma(metacomma)} maps to ${tinaMapping} steps of 8539.00834-EDO despite being bucketed for tina ${tinaBucket}`, LogTarget.ERROR)
    }
}

export {
    checkMetacommaConsistency,
}

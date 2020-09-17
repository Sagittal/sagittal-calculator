import { formatMonzo, formatNumber, formatRatio, Row } from "../../../../general"
import { JiPitchAnalysis } from "../../../../sagittal"

const computeJiPitchRow = (jiPitchAnalysis: JiPitchAnalysis): Row<{ of: JiPitchAnalysis }> => {
    const { cents, monzo, ratio, apotomeSlope } = jiPitchAnalysis

    return [
        formatRatio(ratio),
        formatMonzo(monzo),
        formatNumber(cents),
        formatNumber(apotomeSlope),
    ] as Row as Row<{ of: JiPitchAnalysis }>
}

export {
    computeJiPitchRow,
}

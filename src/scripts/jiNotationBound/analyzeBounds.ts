import { JiNotationBound, JI_NOTATION_BOUNDS } from "../../sagittal"
import { analyzeJiNotationBound, JiNotationBoundAnalysis } from "./bound"
import { computeHistories } from "./histories"

// TODO: so I just did a whole big commit where upper and lower bounds on comma search become full-fledged pitches
//  rather than simple cents values.
//  in general should avoid just passing Cents around like that, not just there.
//  probably doing it a lot in the JI notation bounds analysis script group?

const analyzeJiNotationBounds = (): JiNotationBoundAnalysis[] => {
    return JI_NOTATION_BOUNDS.map((jiNotationBound: JiNotationBound): JiNotationBoundAnalysis => {
        const histories = computeHistories(jiNotationBound)

        return analyzeJiNotationBound(histories, jiNotationBound)
    })
}

export {
    analyzeJiNotationBounds,
}

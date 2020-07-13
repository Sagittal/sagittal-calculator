import {
    bestMetricsForChunkCount,
    populatedForChunkCount,
    processedForChunkCount,
    sampleConfigsForChunkCount,
    status,
} from "../globals"
import { SampleConfig } from "../../types"
import { recursivelyFindUnpopularityMetric } from "./recursivelyFind"
import { debugProcessedAndPopulated, presentPercentage } from "../debug"

const processPopulatedSampleConfigsForChunkCount = async ({ debug }: { debug: boolean }) => {
    const processingChunkCount = status.processingChunkCount
    const processingSampleConfigs = sampleConfigsForChunkCount[ processingChunkCount ]
    const processingSampleConfigsCount = processingSampleConfigs.length

    if (debug) console.log(`sample configs for chunk count remaining to process: ${processingSampleConfigsCount}`.yellow)

    const sampleConfigForChunkCount = processingSampleConfigs.pop() as SampleConfig

    try {
        const bestMetricForSampleConfig = await recursivelyFindUnpopularityMetric(sampleConfigForChunkCount, { debug, bestMetric: bestMetricsForChunkCount[ processingChunkCount ] })

        if (!bestMetricsForChunkCount[ processingChunkCount ] || bestMetricForSampleConfig.sumOfSquares < bestMetricsForChunkCount[ processingChunkCount ].sumOfSquares) {
            bestMetricsForChunkCount[ processingChunkCount ] = bestMetricForSampleConfig
        }
    } catch (e) {
        // bad configs are still being computed... may not be a simple matter to not calculate them in the first place, so for now, just don't worry about them
    }

    processedForChunkCount[ processingChunkCount ] = processedForChunkCount[ processingChunkCount ] ? processedForChunkCount[ processingChunkCount ] + 1 : 1

    if (processedForChunkCount[ processingChunkCount ] % 10 === 0) {
        console.log(`processed out of populated for chunk count ${processingChunkCount}: ${presentPercentage(processedForChunkCount[ processingChunkCount ], populatedForChunkCount[ processingChunkCount ])} ${debugProcessedAndPopulated()}`.yellow)
    }
}

export {
    processPopulatedSampleConfigsForChunkCount,
}

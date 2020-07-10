import "colors"
import {program} from "commander"

import {recursivelyFindUnpopularityMetric} from "../automator/recursivelyFind"
import {computeInitialConfigs} from "../automator/initialConfigs"

program
  .option("-l, --lower-bound-chunk-count <lowerBoundChunkCount>", "lower bound chunk count", parseInt)
  .option("-u, --upper-bound-chunk-count <upperBoundChunkCount>", "upper bound chunk count", parseInt)
  .option("-i, --log-initial-configs", "log initial configs")
  .parse(process.argv)

const lowerBoundChunkCount = program.lowerBoundChunkCount || 1
const upperBoundChunkCount = program.upperBoundChunkCount || 8
const logInitialConfigs = !!program.logInitialConfigs

for (let chunkCount = lowerBoundChunkCount; chunkCount < upperBoundChunkCount; chunkCount++) {
    const initialConfigs = computeInitialConfigs(chunkCount)
    console.log(`investigating chunk count ${chunkCount} which has ${initialConfigs.length} configs to check`)

    let best = {sumOfSquares: Infinity}
    initialConfigs.forEach((initialConfig, index) => {
        try {
            if (logInitialConfigs) console.log(JSON.stringify(initialConfig))
            const bestForConfig = recursivelyFindUnpopularityMetric(initialConfig, {quiet: true})

            if (bestForConfig.sumOfSquares < best.sumOfSquares) {
                best = bestForConfig
            }
        } catch (e) {
            // bad configs are still being computed... may not be a simple matter to not calculate them in the first place, so for now, just don't worry about them
        }

        if (index > 0 && index % 100 === 0) console.log(`${index}/${initialConfigs.length} (${100 * index / initialConfigs.length}%)`["blue"])
    })
    console.log("best was", best)
}

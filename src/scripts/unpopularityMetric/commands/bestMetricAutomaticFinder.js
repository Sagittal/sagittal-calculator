require("colors")
const {program} = require("commander")

const {recursivelyFindUnpopularityMetric} = require("../automator/recursivelyFind")
const {computeInitialConfigs} = require("../automator/initialConfigs")

program
  .option("-l, --lower-bound-chunk-count <lowerBoundChunkCount>", "lower bound chunk count", parseInt)
  .option("-u, --upper-bound-chunk-count <upperBoundChunkCount>", "upper bound chunk count", parseInt)
  .parse(process.argv)

const lowerBoundChunkCount = program.lowerBoundChunkCount || 1
const upperBoundChunkCount = program.upperBoundChunkCount || 8

for (let chunkCount = lowerBoundChunkCount; chunkCount < upperBoundChunkCount; chunkCount++) {
    const initialConfigs = computeInitialConfigs(chunkCount)
    console.log(`Investigating chunk count ${chunkCount} which has ${initialConfigs.length} configs to check`)

    let best = {sumOfSquares: Infinity}
    initialConfigs.forEach((initialConfig, index) => {
        try {
            const bestForConfig = recursivelyFindUnpopularityMetric(initialConfig, {quiet: true})

            if (bestForConfig.sumOfSquares < best.sumOfSquares) {
                best = bestForConfig
            }
        } catch (e) {
            // bad configs are still being computed... may not be a simple matter to not calculate them in the first place, so for now, just don't worry about them
        }

        if (index > 0 && index % 1000 === 0) console.log(`${index}/${initialConfigs.length} (${100 * index / initialConfigs.length}%)`)
    })
    console.log("best was", best)
}

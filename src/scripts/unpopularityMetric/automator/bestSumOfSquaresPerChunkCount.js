require("colors")
const {recursivelyFindUnpopularityMetric} = require("./recursivelyFind")
const {computeInitialConfigs} = require("./initialConfigs")

console.log(require('v8').getHeapStatistics().total_available_size)

for (let chunkCount = 0; chunkCount < 8; chunkCount++) {
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

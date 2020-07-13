import { populatedForChunkCount, processedForChunkCount, sampleConfigsForChunkCount } from "./globals"

const presentNums = (thing: number[]) => {
    return JSON.stringify(Object.entries(thing).map(([k, v]) => `${k}: ${v}`))
}

const presentLens = (thing: unknown[][]) => {
    return JSON.stringify(Object.entries(thing).map(([k, v]) => `${k}: ${v.length}`))
}

const debugProcessedAndPopulated = () => {
    return `| populated ${presentNums(populatedForChunkCount)} | processed ${presentNums(processedForChunkCount)} | in the queue ${presentLens(sampleConfigsForChunkCount)}`
}

const presentPercentage = (a: number, b: number) => {
    return `${a}/${b} (${(100 * a / b).toPrecision(3)}%)`
}


export {
    debugProcessedAndPopulated,
    presentPercentage,
}

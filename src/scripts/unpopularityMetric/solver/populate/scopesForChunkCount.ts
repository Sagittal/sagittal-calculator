import { computeCombinations } from "../../../../utilities/combinations"
import { Combination, Combinations, Count } from "../../../../utilities/types"
import {
    cachedParameterChunkCombinations,
    cachedSubmetricChunkCombinations,
    scopesForChunkCount,
} from "../globals"
import { debugSearchedAndPopulated } from "../debug"
import { populateScopeForChunkCount } from "./scopeForChunkCount"
import { populateScopesForSubmetricChunkCombination } from "./scopesForSubmetricChunkCombination"
import { Chunk, ParameterChunk, SubmetricChunk } from "../types"
import { PARAMETER_CHUNKS, SUBMETRIC_CHUNKS } from "./constants"

const populateScopesForChunkCount = async (chunkCount: Count<Chunk>, { debug = false } = {}) => {
    if (debug) console.log(`computing scopes for chunk count ${chunkCount}: phase 1 of ${chunkCount} (please give lead time for combinations calculation)`.cyan)
    scopesForChunkCount[ chunkCount ] = scopesForChunkCount[ chunkCount ] || []

    // TODO: I still believe there might be a way to get this thing inside that while loop... it shouldn't be exceptional
    const submetricChunkCombinations: Combinations<SubmetricChunk> = computeCombinations(SUBMETRIC_CHUNKS, chunkCount)
    submetricChunkCombinations.forEach((submetricChunkCombination: Combination<SubmetricChunk>) => {
        populateScopeForChunkCount(submetricChunkCombination, chunkCount)
    })

    console.log(`finished phase 1/${chunkCount} of scope population for chunk count ${chunkCount} ${debugSearchedAndPopulated()}`.cyan)

    let chunkCountForSubmetrics: Count<Chunk> = chunkCount
    while (chunkCountForSubmetrics > 1) {
        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as Count<Chunk>
        const chunkCountForParameters: Count<ParameterChunk> = chunkCount - chunkCountForSubmetrics as Count<ParameterChunk>

        if (debug) console.log(`computing scopes for chunk count ${chunkCount}: phase ${chunkCountForParameters + 1} of ${chunkCount} (please give lead time for combinations calculation)`.cyan)

        cachedSubmetricChunkCombinations[ chunkCountForSubmetrics ] = cachedSubmetricChunkCombinations[ chunkCountForSubmetrics ] || computeCombinations(SUBMETRIC_CHUNKS, chunkCountForSubmetrics, { withRepeatedElements: true })
        const submetricChunkCombinations: Combinations<SubmetricChunk> = cachedSubmetricChunkCombinations[ chunkCountForSubmetrics ]

        cachedParameterChunkCombinations[ chunkCountForParameters ] = cachedParameterChunkCombinations[ chunkCountForParameters ] || computeCombinations(PARAMETER_CHUNKS, chunkCountForParameters, { withRepeatedElements: true })
        const parameterChunkCombinations: Combinations<ParameterChunk> = cachedParameterChunkCombinations[ chunkCountForParameters ]

        if (debug) console.log(`combinations calculated: ${submetricChunkCombinations.length} submetric combinations and ${parameterChunkCombinations.length} parameter combinations`.cyan)
        for (const submetricChunkCombination of submetricChunkCombinations) {
            await populateScopesForSubmetricChunkCombination(submetricChunkCombination, parameterChunkCombinations, 0, chunkCount, debug)
            if (debug) console.log(`finished for one submetric chunk combination within this phase ${debugSearchedAndPopulated()}`.cyan)
        }
        console.log(`finished phase ${chunkCountForParameters + 1}/${chunkCount} of scope population for chunk count ${chunkCount} ${debugSearchedAndPopulated()}`.cyan)
    }

    console.log(`FINISHED POPULATING CHUNK COUNT ${chunkCount} ${debugSearchedAndPopulated()}`.cyan)
}

export {
    populateScopesForChunkCount,
}

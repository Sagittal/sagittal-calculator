import { deepClone } from "../code"
import { Count } from "../types"
import { Distribution, DistributionBin } from "./types"

const computeDistributions = <T>(array: T[], binCount: Count<DistributionBin<T>>): Array<Distribution<T>> => {
    const emptyDistribution: Distribution<T> = [...Array(binCount).keys()]
        .map(_ => [] as unknown[] as DistributionBin<T>) as Distribution<T>
    let distributions: Array<Distribution<T>> = [emptyDistribution]

    array.forEach(element => {
        const extendedDistributions: Array<Distribution<T>> = []
        for (let index = 0; index < binCount; index++) {
            distributions.forEach(distribution => {
                const extendedDistribution = deepClone(distribution)
                extendedDistribution[ index ].push(deepClone(element))
                extendedDistributions.push(extendedDistribution)
            })
        }
        distributions = extendedDistributions
    })

    return distributions
}

export {
    computeDistributions,
}

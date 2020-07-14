import { computeDeepClone } from "../code"
import { Distribution, DistributionBin } from "./types"

const computeDistributions = <T>(array: T[], bucketCount: number): Array<Distribution<T>> => {
    const emptyDistribution: Distribution<T> = [...Array(bucketCount).keys()].map(_ => [] as unknown as DistributionBin<T>) as Distribution<T>
    let distributions: Array<Distribution<T>> = [emptyDistribution]

    array.forEach(element => {
        const extendedDistributions: Array<Distribution<T>> = []
        for (let index = 0; index < bucketCount; index++) {
            distributions.forEach(bucketing => {
                const extendedBucketing = computeDeepClone(bucketing)
                extendedBucketing[ index ].push(computeDeepClone(element))
                extendedDistributions.push(extendedBucketing)
            })
        }
        distributions = extendedDistributions
    })

    return distributions
}

export {
    computeDistributions,
}

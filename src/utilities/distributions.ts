import { computeDeepClone } from "./deepClone"

const computeDistributions = <T>(array: T[], bucketCount: number): T[][][] => {
    const emptyBucketing: T[][] = [...Array(bucketCount).keys()].map(_ => [] as T[]) as T[][]
    let bucketings: T[][][] = [emptyBucketing]

    array.forEach(element => {
        let extendedBucketings: T[][][] = []
        for (let index = 0; index < bucketCount; index++) {
            bucketings.forEach(bucketing => {
                const extendedBucketing = computeDeepClone(bucketing)
                extendedBucketing[ index ].push(computeDeepClone(element))
                extendedBucketings.push(extendedBucketing)
            })
        }
        bucketings = extendedBucketings
    })

    return bucketings
}


export {
    computeDistributions,
}

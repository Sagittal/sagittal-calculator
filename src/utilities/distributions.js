const {computeDeepClone} = require("./deepClone")

const computeDistributions = (array, bucketCount) => {
    const emptyBucket = [...Array(bucketCount).keys()].map(_ => [])
    let bucketings = [emptyBucket]

    array.forEach(element => {
        let extendedBucketings = []
        for (let index = 0; index < bucketCount; index++) {
            bucketings.forEach(bucketing => {
                const extendedBucketing = computeDeepClone(bucketing)
                extendedBucketing[index].push(computeDeepClone(element))
                extendedBucketings.push(extendedBucketing)
            })
        }
        bucketings = extendedBucketings
    })

    return bucketings
}


module.exports = {
    computeDistributions,
}

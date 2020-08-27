// tslint:disable-next-line no-type-definitions-outside-types-modules
declare namespace jasmine {
    interface Matchers<T> {
        toBeCloseToTyped(expected: T, precision?: number, negate?: boolean, message?: string): CustomMatcherResult

        toBeCloseToArray(expected: T, message?: string): CustomMatcherResult

        toBeCloseSoFar(expected: T, precision?: number, negate?: boolean, message?: string): CustomMatcherResult

        toBeArrayWithDeepEqualContents(expected: T, message?: string): CustomMatcherResult

        toBeSameCombinationsAs(expected: T, message?: string): CustomMatcherResult

        toBeSameDistributionsAs(expected: T, message?: string): CustomMatcherResult

        toBeArrayIncludingDeepEqual(expected: T, message?: string): CustomMatcherResult

        toBeArrayIncludingCombinations(expected: T, message?: string): CustomMatcherResult
    }
}

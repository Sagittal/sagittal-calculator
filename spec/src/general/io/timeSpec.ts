import { presentTime } from "../../../../src/general"

describe("presentTime", () => {
    it("formats ms to hours", () => {
        const ms = 205207663.470801

        const actual = presentTime(ms)

        const expected = "2d, 9h, 0m, 7s, 663ms"
        expect(actual).toEqual(expected)
    })

    it("works for small times", () => {
        const ms = 13801.802699999884

        const actual = presentTime(ms)

        const expected = "13s, 802ms"
        expect(actual).toEqual(expected)
    })
})

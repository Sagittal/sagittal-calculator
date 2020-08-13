import { formatTime } from "../../../src/general/time"

describe("formatTime", () => {
    it("formats ms to hours", () => {
        const ms = 205207663.470801

        const result = formatTime(ms)

        expect(result).toEqual("2d, 9h, 0m, 7s, 663ms")
    })

    it("works for small times", () => {
        const ms = 13801.802699999884

        const result = formatTime(ms)

        expect(result).toEqual("13s, 802ms")
    })
})

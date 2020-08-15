import { doOnNextEventLoop } from "../../../../src/general/code"

describe("doOnNextEventLoop", () => {
    it("resolves on the next event loop", async done => {
        let work = 0
        const fn = () => {
            work = 1
        }

        doOnNextEventLoop(fn).then(() => {
            expect(work).toBe(1)
            done()
        })

        expect(work).toBe(0)
    })

    it("works when the function passed in is itself async", async done => {
        let work = 0
        const fn = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    work = 1
                    resolve()
                }, 0)
            })
        }

        doOnNextEventLoop(fn).then(() => {
            expect(work).toBe(1)
            done()
        })

        expect(work).toBe(0)
    })

    it("supports having a longer timeout", async done => {
        let work = 0
        const fn = () => {
            work = 1
        }

        doOnNextEventLoop(fn, 500).then(() => {
            expect(work).toBe(1)
        })

        setTimeout(() => {
            expect(work).toBe(0)
        }, 300)

        setTimeout(() => {
            expect(work).toBe(1)
            done()
        }, 700)

        expect(work).toBe(0)
    })
})

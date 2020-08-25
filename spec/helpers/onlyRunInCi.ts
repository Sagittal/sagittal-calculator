import { CI_MODE } from "./specHelper"

const onlyRunInCi = () => {
    if (CI_MODE) {
        pending("slow test only run in CI")
    }
}

export {
    onlyRunInCi,
}

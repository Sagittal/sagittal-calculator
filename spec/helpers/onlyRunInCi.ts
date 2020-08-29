import { CI_MODE } from "./ciMode"

const onlyRunInCi = () => {
    if (!CI_MODE) {
        pending("slow test only run in CI")
    }
}

export {
    onlyRunInCi,
}

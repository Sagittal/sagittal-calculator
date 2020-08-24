const onlyRunInCi = () => {
    if (!process.env.CI) {
        pending("slow test only run in CI")
    }
}

export {
    onlyRunInCi,
}

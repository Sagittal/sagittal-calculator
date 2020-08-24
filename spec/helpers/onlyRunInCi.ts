const onlyRunInCi = () => {
    if (!process.env.ON_CI) {
        pending("slow test only run in CI")
    }
}

export {
    onlyRunInCi,
}

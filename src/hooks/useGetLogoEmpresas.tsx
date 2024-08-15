const useGetLogoEmpresas = () => {

    const getLogo = (nome: string) => {
        let extencao = ".com"
        if (nome === "ford" || nome === "jeep")
            extencao = ".com.br"
        return "https://logo.clearbit.com/" + nome + extencao
    }

    return {
        getLogo
    }
}

export default useGetLogoEmpresas

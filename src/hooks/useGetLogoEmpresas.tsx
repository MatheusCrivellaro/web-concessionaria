const useGetLogoEmpresas = () => {

    const getLogo = (nome: string) => {
        let nomeTolowerCase = nome.toLowerCase()
        let extencao = ".com"
        if (nomeTolowerCase === "ford" || nomeTolowerCase === "jeep" || nomeTolowerCase === "renault")
            extencao = ".com.br"
        return "https://logo.clearbit.com/" + nomeTolowerCase + extencao
    }

    return {
        getLogo
    }
}

export default useGetLogoEmpresas

import { useEthers, useTokenBalance } from "@usedapp/core"
import { Token } from "../Main"

export interface StakeFormProps {
    token: Token
}

export const StakeForm = ({ token }: StakeFormProps) => {
    const { address: tokenAddress, name } = token
    const { account } = useEthers()
    const tokenBalance = useTokenBalance(tokenAddress, account)
    const tokenBalance: number = tokenBalance ? parseFloat(formatUnits(tokenBalance, 18)) : 0
}
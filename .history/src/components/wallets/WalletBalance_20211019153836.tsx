import { Token } from "../Main"
import { useEthers, useTokenBalance } from "@usedapp/core"


export interface WalletBalanceProps {
    token: Token
}


export const WalletBalance = ({ token }: WalletBalanceProps) => {
    const { image, address, name } = token
    const { account } = useEthers()
    const tokenBalance = useTokenBalance(address, account)
    const formattedTokenBalance: number = tokenBalance ? parseFloat(formatUnits(tokenBalance, 18))
    console.log(tokenBalance?.toString())
    return (<div>Wallet Balance</div>)

}
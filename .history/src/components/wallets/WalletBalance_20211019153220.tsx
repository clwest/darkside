import { Token } from "../Main"
import { useEthers, useTokenBalance } from "@usedapp/core"


export interface WalletBalanceProps {
    token: Token
}


export const WalletBalance = ({ token }: WalletBalanceProps) => {
    const { image, address, name } = token
    const { account } = useEthers()

}
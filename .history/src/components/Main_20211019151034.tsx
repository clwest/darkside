import { useEthers } from "@usedapp/core"
import { makeStyles } from "@material-ui/core"
import { constants } from "ethers"
import { Wallet } from "./wallets"
import helperConfig from "../helper-config.json"
import networkingMaps from "../darkside-info/deployments/map.json"
import brownieConfig from "../brownie_config.json"
import donkey from "../donkey.png"
import eth from "../eth.png"
import dai from "../dai.png"

export type Token = {
    image: string
    address: string
    name: string
}

export const Main = () => {
    const { chainId } = useEthers()
    const networkId = chainId ? helperConfig[chainId] : "dev"

    const darksideTokenAddress = chainId ? networkingMaps[String(chainId)]["DarksideToken"][0] : constants.AddressZero
    const wethTokenAddress = chainId ? brownieConfig["networks"][networkId]["weth_token"] : constants.AddressZero
    const fauTokenAddress = chainId ? brownieConfig["networks"][networkId]["fau_token"] : constants.AddressZero

    const supportedTokens: Array<Token> = [
        {
            image: donkey,
            address: darksideTokenAddress,
            name: "DARK"
        },
        {
            image: eth,
            address: wethTokenAddress,
            name: "WETH"
        },
        {
            image: dai,
            address: fauTokenAddress,
            name: "DAI"
        }

    ]
    return (
        <Wallet supportedTokens={supportedTokens} />
    )
}
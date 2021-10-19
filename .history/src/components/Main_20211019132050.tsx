import { useEthers } from "@usedapp/core"
import { makeStyles } from "@material-ui/core"
import { constants } from "ethers"
import helperConfig from "../helper-config.json"
import networkingMaps from "../darkside-info/deployments/map.json"
import brownieConfig from "../brownie_config.json"
import donkey from "..donkey.png"
import eth from "../eth.png"
import dai from "../dai.png"


export const Main = () => {
    const { chainId } = useEthers()
    const networkId = chainId ? helperConfig[chainId] : "dev"

    const darksideTokenAddress = chainId ? networkingMaps[String(chainId)]["DarksideToken"][0] : constants.AddressZero
    console.log(chainId)
    console.log(networkId)
    return (<></>)
}
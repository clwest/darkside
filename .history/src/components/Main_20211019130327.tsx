import { useEthers } from "@usedapp/core"
import { makeStyles } from "@material-ui/core"
import helperConfig from "../helper-config.json"
import networkingMaps from "../darkside-info/deployments/map.json"
import brownieConfig from "../brownie_config.json"
import donkey from "..donkey.png"
import eth from "../eth.png"
import dai from "../dai.png"

export const Main = () => {
    const classes = useStyles()
    const { chainId } = useEthers()
    const networkId = chainId ? helperConfig[chainId] : "dev"
}
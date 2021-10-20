import { useEthers } from "@usedapp/core"
import { constants } from "ethers"
import DarksideFarm from "../darkside-info/contracts/darksideFarm.json"

export const useStakeTokens = (tokenAddress: string) => {
    const { chainId } = useEthers()
    const { abi } = DarksideFarm
    const darksideFarmAddress = chainId ? networkingMaps[String(chainId)]["DarksideToken"][0] : constants.AddressZero

}
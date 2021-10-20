import { useEthers } from "@usedapp/core"
import { constants, Contract, utils } from "ethers"
import { Contract } from "@ethersproject/contract"
import DarksideFarm from "../darkside-info/contracts/darksideFarm.json"
import { networkingMaps } from "../darkside-info/deployments/map.json"

export const useStakeTokens = (tokenAddress: string) => {
    const { chainId } = useEthers()
    const { abi } = DarksideFarm
    const darksideFarmAddress = chainId ? networkingMaps[String(chainId)]["DarksideFarm"][0] : constants.AddressZero
    const darksideFarmInterface = new utils.Interface(abi)
    const darksideFarmContract = new Contract(darksideFarmAddress, darksideFarmInterface)

}
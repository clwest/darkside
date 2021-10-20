import { useEthers, useContractFunction } from "@usedapp/core"
import { useEffect, useState } from "react"
import { constants, utils } from "ethers"
import { Contract } from "@ethersproject/contracts"
import DarksideFarm from "../darkside-info/contracts/darksideFarm.json"
import ERC20 from "../darkside-info/contracts/MockERC20.json"
import networkingMaps from "../darkside-info/deployments/map.json"

export const useStakeTokens = (darksideTokenAddress: string) => {
    const { chainId } = useEthers()
    const { abi } = DarksideFarm
    const darksideFarmAddress = chainId ? networkingMaps[String(chainId)]["DarksideFarm"][0] : constants.AddressZero
    const darksideFarmInterface = new utils.Interface(abi)
    const darksideFarmContract = new Contract(darksideFarmAddress, darksideFarmInterface)

    const erc20ABI = ERC20.abi
    const erc20Interface = new utils.Interface(erc20ABI)
    const erc20Contract = new Contract(darksideTokenAddress, erc20Interface)

    const { send: approveErc20Send, state: approveErc20State } =
        useContractFunction(erc20Contract, "approve", {
            transactionName: "Approve ERC20 transfer"
        })

    const approve = (amount: string) => {
        return approveErc20Send(darksideFarmAddress, amount)
    }

    const [state, setState] = useState(approveErc20State)
    return { approve }

}
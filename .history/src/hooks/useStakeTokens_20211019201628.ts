import { useEthers, useContractFunction } from "@usedapp/core"
import { useEffect, useState } from "react"
import { constants, utils, Contract } from "ethers"
import DarksideFarm from "../darkside-info/contracts/DarksideFarm.json"
import ERC20 from "../darkside-info/contracts/MockERC20.json"
import networkingMaps from "../darkside-info/deployments/map.json"

export const useStakeTokens = (tokenAddress: string) => {
    const { chainId } = useEthers()
    const { abi } = DarksideFarm
    const darksideFarmAddress = chainId ? networkingMaps[String(chainId)]["DarksideFarm"][0] : constants.AddressZero
    const darksideFarmInterface = new utils.Interface(abi)
    const darksideFarmContract = new Contract(darksideFarmAddress, darksideFarmInterface)

    const erc20ABI = ERC20.abi
    const erc20Interface = new utils.Interface(erc20ABI)
    const erc20Contract = new Contract(tokenAddress, erc20Interface)

    const { send: approveErc20Send, state: approveErc20State } =
        useContractFunction(erc20Contract, "approve", {
            transactionName: "Approve ERC20 transfer",
        })

    const approve = (amount: string) => {
        return approveErc20Send(darksideFarmContract, amount)
    }

    return { approve, approveErc20State }

}
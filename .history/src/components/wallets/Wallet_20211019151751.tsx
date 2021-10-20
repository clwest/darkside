
import React, { useState } from "react"
import { Box, makeStyles } from "@material-ui/core"
import { TabContext, TabList, TabPanel } from "@material-ui/lab"
import { Token } from "../Main"

interface WalletProps {
    supportedTokens: Array<Token>
}

export const Wallet = ({ supportedTokens }: WalletProps) => {
    const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0)

    return (
        <Box>
            <h1>Your Wallet</h1>
            <Box>

            </Box>
        </Box>
    )
}

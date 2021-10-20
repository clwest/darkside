
import React, { useState } from "react"
import { Box, makeStyles } from "@material-ui/core"
import { Token } from "../Main"

interface WalletProps {
    supportedTokens: Array<Token>
}

export const Wallet = ({ supportedTokens }: WalletProps) => {

    return (<Box>
        <h1>Your Wallet</h1>
        <div>I'm the wallets</div>
    </Box>)
}

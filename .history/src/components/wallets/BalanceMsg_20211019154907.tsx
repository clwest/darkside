import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    constianer: {
        display: 'inline-grid',
        gridTemplateColumns: 'auto auto auto',
        gap: theme.spacing(1),
        alignItems: "center"
    },
    tokenImg: {
        width: "32px"
    }
}))

interface BalanceMsgProps {
    label: string
    amount: number
    tokenImgSrc: string
}

export const BalanceMsg = ({ label, amount, tokenImgSrc }: BalanceMsgProps) => {

}
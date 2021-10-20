import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    contianer: {
        display: 'inline-grid',
        gridTemplateColumns: 'auto auto auto',
        gap: theme.spacing(1),
        alignItems: "center"
    },
    tokenImg: {
        width: "32px"
    },
    amount: {
        fontWeight: 700
    }
}))

interface BalanceMsgProps {
    label: string
    amount: number
    tokenImgSrc: string
}

export const BalanceMsg = ({ label, amount, tokenImgSrc }: BalanceMsgProps) => {

}
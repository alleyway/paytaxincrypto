import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import { Grid } from "@material-ui/core"
import Link from "./Link"

const formatter = new Intl.NumberFormat()

const useHeadStyles = makeStyles({
    root: {
        fontWeight: "bold"
    },
})

const useRowStyles = makeStyles({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
})

function createData (jurisdictionName, jurisdictionCountry, launchDate, currencies, population, expandedInfo) {
    return {
        jurisdictionName,
        jurisdictionCountry,
        launchDate,
        currencies,
        population,
        expandedInfo,
    }
}

function Row (props) {
    const {row} = props
    const [open, setOpen] = React.useState(false)
    const classes = useRowStyles()

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.jurisdictionName}<br/>
                    <span style={{color: "#969696"}}>{row.jurisdictionCountry}</span>
                </TableCell>
                <TableCell align="left">{row.launchDate}</TableCell>
                <TableCell align="left">{row.currencies}</TableCell>
                <TableCell align="right">{formatter.format(row.population)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Overview
                                    </Typography>
                                    <Typography variant="body2" gutterBottom component="div">
                                        {row.expandedInfo.overview}
                                    </Typography>
                                </Grid>
                                {row.expandedInfo.proponents &&
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Proponent(s)
                                    </Typography>
                                    <Typography variant="body2" gutterBottom component="div">
                                        {row.expandedInfo.proponents.map((proponent) => {
                                            return <React.Fragment><Link href={proponent.link}>{proponent.name} </Link><br/></React.Fragment>
                                        })}
                                    </Typography>
                                </Grid>
                                }
                                {row.expandedInfo.sources &&
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Source(s)
                                    </Typography>
                                    <Typography variant="body2" gutterBottom component="div">
                                        {row.expandedInfo.sources.map((proponent) => {
                                            return <React.Fragment><Link href={proponent.link}>{proponent.name}</Link><br/></React.Fragment>
                                        })}
                                    </Typography>

                                </Grid>
                                }
                            </Grid>


                            {/*<Table size="small" aria-label="purchases">*/}
                            {/*    <TableHead>*/}
                            {/*        <TableRow>*/}
                            {/*            <TableCell>Date</TableCell>*/}
                            {/*            <TableCell>Customer</TableCell>*/}
                            {/*            <TableCell align="right">Amount</TableCell>*/}
                            {/*            <TableCell align="right">Total price ($)</TableCell>*/}
                            {/*        </TableRow>*/}
                            {/*    </TableHead>*/}
                            {/*    <TableBody>*/}
                            {/*        {row.history.map((historyRow) => (*/}
                            {/*            <TableRow key={historyRow.date}>*/}
                            {/*                <TableCell component="th" scope="row">*/}
                            {/*                    {historyRow.date}*/}
                            {/*                </TableCell>*/}
                            {/*                <TableCell>{historyRow.customerId}</TableCell>*/}
                            {/*                <TableCell align="right">{historyRow.amount}</TableCell>*/}
                            {/*                <TableCell align="right">*/}
                            {/*                    {Math.round(historyRow.amount * row.price * 100) / 100}*/}
                            {/*                </TableCell>*/}
                            {/*            </TableRow>*/}
                            {/*        ))}*/}
                            {/*    </TableBody>*/}
                            {/*</Table>*/}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
}

const rows = [
    createData("Zug", "Switzerland", "2021-02-01", "BTC, ETH", 30000, {
        overview: "Tax settlement by means of cryptocurrency will be available to both companies and private individuals up to an amount of CHF 100,000. Partial payments will not be accepted.",
        proponents: [
            {
                name: "Heinz Tännler, Zug Financial Director",
                link: "https://www.zg.ch/behoerden/finanzdirektion"
            },
            {
                name: "Bitcoin Suisse",
                link: "https://www.bitcoinsuisse.com/"
            }
        ],
        sources: [
            {
                name: "Official Statement",
                link: "https://www.zg.ch/behoerden/finanzdirektion/direktionssekretariat/aktuell/kanton-zug-akzeptiert-ab-2021-kryptowaehrungen-fuer-steuerzahlungen/medienmitteilungen/press-release-of-september-3rd-2020-english-version?searchterm=cryptocurrencies"
            }
        ]
    }),
]

export default function JurisdictionsTable () {

    const classes = useHeadStyles()

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead className={classes.root}>
                    <TableRow>
                        <TableCell/>
                        <TableCell align="left">Jurisdiction Name</TableCell>
                        <TableCell>Launch Date</TableCell>
                        <TableCell align="left">Currencies</TableCell>
                        <TableCell align="right">Addressable Population</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.jurisdictionName} row={row}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

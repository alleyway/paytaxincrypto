import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import ProTip from "../src/ProTip"
import Link from "../src/Link"
import Copyright from "../src/Copyright"
import JurisdictionsTable from "../src/JurisdictionsTable"
import { Dialog, useMediaQuery, useTheme } from "@material-ui/core"

export default function Index () {
    const theme = useTheme();

    const [newDialogOpen, setNewDialogOpen ] = useState(false)

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="md" disableGutters>
            <Box my={6}>
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                    Tax Jurisdictions Accepting Cryptocurrency
                </Typography>

                <JurisdictionsTable/>

                <Box my={2}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Do you have a tax jurisdiction to add to this list? <Link href={"#newTaxJurisdiction"} onClick={(e)=>setNewDialogOpen(true)}>Fill out this form</Link>.
                        <br/>
                    </Typography>
                </Box>

                <Copyright/>
                {/*<Link href="/about" color="secondary">*/}
                {/*  Go to the about page*/}
                {/*</Link>*/}

            </Box>

            <Dialog open={newDialogOpen} fullScreen={fullScreen} fullWidth onClose={()=>setNewDialogOpen(false)}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfMn7aolovEyQ4gFgOHLDdh1bGOpbPe7E61nMBdN_E3jrIpHQ/viewform?embedded=true"
                    width={fullScreen? "100%": "600"} height="1369" frameBorder="0" marginHeight="0" marginWidth="0"
                >Loading…
                </iframe>
            </Dialog>

        </Container>
    )
}

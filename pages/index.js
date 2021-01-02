import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import ProTip from "../src/ProTip"
import Link from "../src/Link"
import Copyright from "../src/Copyright"
import JurisdictionsTable from "../src/JurisdictionsTable"

export default function Index () {
    return (
        <Container maxWidth="md" disableGutters>
            <Box my={6}>
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                    Tax Jurisdictions Accepting Cryptocurrency
                </Typography>

                <JurisdictionsTable/>

                {/*<Link href="/about" color="secondary">*/}
                {/*  Go to the about page*/}
                {/*</Link>*/}

            </Box>
            <Copyright/>
        </Container>
    )
}

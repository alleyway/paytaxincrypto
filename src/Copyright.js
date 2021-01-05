import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Link from "./Link"

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Want updates? <Link href="https://twitter.com/TaxInCrypto">Follow @TaxInCrypto</Link>
        </Typography>
    );
}

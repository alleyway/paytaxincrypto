import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheets } from "@material-ui/core/styles"
import theme from "../src/theme"

export default class MyDocument extends Document {
    render () {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */}
                    <meta name="theme-color" content={theme.palette.primary.main}/>

                    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
                    <link rel="icon" type="image/svg+xml" href="/images/favicon/safari-pinned-tab.svg"/>
                    <link rel="alternate icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
                    <link rel="alternate icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
                    <link rel="manifest" href="/images/favicon/site.webmanifest"/>
                    <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                    <link rel="shortcut icon" href="/images/favicon/favicon.ico"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="msapplication-config" content="/images/favicon/browserconfig.xml"/>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Helvetica:300,400,500,700&display=swap"
                    />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@TaxInCrypto" />
                    <meta name="twitter:creator" content="@mlake900" />
                    <meta property="og:url" content="https://taxincrypto.org" />
                    <meta property="og:title" content="Tax Jurisdictions Accepting Cryptocurrency" />
                    <meta property="og:description" content="A list of places where companies/individuals can pay their tax using bitcoin, ethereum, stablecoins, etc." />
                    <meta property="og:image" content="https://taxincrypto.org/images/TaxIncrptoTwitterCard.png" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8S0D50PXNF"></script>
                    <script dangerouslySetInnerHTML={
                        { __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "G-8S0D50PXNF");
    `}
                    }></script>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        })

    const initialProps = await Document.getInitialProps(ctx)

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
}

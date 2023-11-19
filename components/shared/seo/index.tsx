import React from "react";
import Head from "next/head";
import { seoData } from "./data";

const AppSeo = ({children}: any) => {
    const domain = "website";
    const url = "website";
    const canonical = domain + url;
    const type = "website";

    return (
        <>
            <Head>
                <title>{seoData.title }</title>
                <meta charSet="UTF-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={seoData.description} />
                <meta property="og:title" content={seoData.title} key="ogtitle" />
                <meta property="og:image" itemProp="image" content={'image'} key="ogimage" />
                <meta property="og:image:alt" content={seoData.title} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:type" content={type} key="ogtype" />
                <meta property="og:description" content={seoData.description} key="ogdesc" />
                <meta property="og:url" content={canonical} key="ogurl" />
                <meta name="og:site_name" content={domain} key="ogsitename" />
                <meta name="robots" content="index, follow" />
                <meta name="twitter:card" content="summary_large_image" key="twcard" />
                <meta name="twitter:title" content={seoData.title} key="twitter:title" />
                <meta name="twitter:description" content={seoData.description} key="twitter:description" />
                <meta name="twitter:image" content={"image"} />
                <meta name="twitter:url" content={canonical} />
                <meta name="twitter:site" content="@website" key="twitter:site" />
                <meta name="twitter:creator" content="@website" key="twitter:title" />
                <link href={canonical} rel="canonical" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                    rel="preload"
                    href="../public/fonts/Karla-Bold.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                    integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
        </>
    );
};

export default AppSeo;

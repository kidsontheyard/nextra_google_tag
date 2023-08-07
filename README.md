# 
Fix to issue: #2130 Google Tag Manager - cross-site errors when using next/script

[https://github.com/shuding/nextra/issues/2130](https://github.com/shuding/nextra/issues/2130)


## Solution 

1. Google Tag is NOT Google Analytics, and not the same scripts (what you used is google analytics gtag script that loads from Google Tag Manager) 
2. Google Tag requires two parts one install at the header and one install in the body, including iframe 

The issue is that I try to apply the same way we apply google analytics to google tag manager, and this will create cross-site errors when google tag injects code using `document.write`

To solve it we need to load the two parts with a different strategy
1. `beforeInteractive` - for the Header
2. `afterInteractive` - for the body

The full solution for Google Tag Manager, tested on a live server 
`next@13.4.13`
`nextra@2.10.0`
`react@18.2.0`

Create a file `/.env.local` in the root of the project

```
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=
```


Create a file `pages/_app.mdx`

```
import Script from "next/script";

export default function App({ Component, pageProps }) {
const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

return (

<>
  <Component {...pageProps} />

  {/* Global Tag Manager Header */}

{" "}

<Script
  id="google-tag-manager-header"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
    `,
  }}
/>

  {/* Global Tag Manager Body */}

<Script id="google-tag-manager" strategy="afterInteractive">
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe>
</Script>
</>
)
}

```

Working Example:

[https://github.com/kidsontheyard/nextra_google_tag/](https://github.com/kidsontheyard/nextra_google_tag/)

How to set up a Google Tag Manager to add Google Analytics on all pages.

![Google Tag Manager](https://github.com/kidsontheyard/nextra_google_tag/raw/main/doc/google-tag-manager_1.png)

![Google Tag Manager](https://github.com/kidsontheyard/nextra_google_tag/raw/main/doc/google-tag-manager_2.png)




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

echo "# legalhub" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:kidsontheyard/legalhub.git
git push -u origin main

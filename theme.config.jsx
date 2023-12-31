// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useNextSeoProps() {
    return {
      titleTemplate: "%s : Kids on the Yard",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Kids on the Yard" />
      <meta property="og:description" content="Kids on the Yard" />
      <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="mask-icon" href="/favicon.svg" type="image/svg+xml" />
    </>
  ),
  logo: (
    <>
      <span>Kids on the Yard Legal Hub</span>
    </>
  ),
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  sidebar:{
    toggleButton:true,
    autoCollapse:true,
  },
  gitTimestamp: null,
  footer: {
    text: (
      <>
        <div>
          <span>
            Copyright 2014-{new Date().getFullYear()} ©{" "}
            <a href="https://kidsontheyard.com" target="_blank">
              Kids on the Yard.
            </a>
          </span>
        </div>
      </>
    ),
  },
};

const size = {
    mobileMax: '767px',
    tablet: '768px',
    tabletMax: '1023px',
    laptop: '1024px',
    laptopMax: '1279px',
    desktop: '1280px',
    desktopMax: '1599px',
    widescreenMin: '1600px',
  }

  export const BREAK_POINTS = {
    mobileMax: `(max-width: ${size.mobileMax})`,
    tabletMin: `(min-width: ${size.tablet})`,
    tabletMax: `(max-width: ${size.tabletMax})`,
    laptopMin: `(min-width: ${size.laptop})`,
    laptopMax: `(max-width: ${size.laptopMax})`,
    desktopMin: `(min-width: ${size.desktop})`,
    desktopMax: `(max-width: ${size.desktopMax})`,
    widescreenMin: `(min-width: ${size.widescreen})`,
  };
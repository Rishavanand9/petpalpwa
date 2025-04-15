export const theme = {
    colors: {
      primary: '#3BACB6',
      primaryHover: '#5E80C0',
      secondary: '#ede8d8',
      secondaryHover: '#E9D99D',
      background: '#FFFFFF',
      text: '#000000',
      title: '#747474',
      gray: {
        100: 'rgba(0, 0, 0, 0.05)',
        200: 'rgba(0, 0, 0, 0.08)',
      }
    },
    fonts: {
      primary: 'inter',
    },
    breakpoints: {
      mobile: '600px',
    },
    spacing: {
      small: '8px',
      medium: '16px',
      large: '24px',
      xlarge: '32px',
      xxlarge: '64px',
    },
    borderRadius: {
      button: '10px',
    }
  };
  
  // Type definitions for the theme
  export type Theme = typeof theme;
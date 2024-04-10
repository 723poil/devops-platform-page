// ** Type Imports
// @ts-ignore

import {PaletteColor, PaletteColorOptions, PaletteMode} from '@mui/material'
import {GitLabelColor, GitStatusColor, ThemeColor} from '../../layouts/types'

const DefaultPalette = (mode: PaletteMode, themeColor: ThemeColor) => {
  // ** Vars
  const lightColor = '58, 53, 65'
  const darkColor = '231, 227, 252'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const primaryGradient = () => {
    if (themeColor === 'primary') {
      return '#C6A7FE'
    } else if (themeColor === 'secondary') {
      return '#9C9FA4'
    } else if (themeColor === 'success') {
      return '#93DD5C'
    } else if (themeColor === 'error') {
      return '#FF8C90'
    } else if (themeColor === 'warning') {
      return '#FFCF5C'
    } else {
      return '#6ACDFF'
    }
  }

  return {
    customColors: {
      main: mainColor,
      primaryGradient: primaryGradient(),
      tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759'
    },
    common: {
      black: '#000',
      white: '#FFF'
    },
    mode: mode,
    primary: {
      light: '#9E69FD',
      main: '#9155FD',
      dark: '#804BDF',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#9C9FA4',
      main: '#8A8D93',
      dark: '#777B82',
      contrastText: '#FFF'
    },
    success: {
      light: '#6AD01F',
      main: '#56CA00',
      dark: '#4CB200',
      contrastText: '#FFF'
    },
    error: {
      light: '#FF6166',
      main: '#FF4C51',
      dark: '#E04347',
      contrastText: '#FFF'
    },
    warning: {
      light: '#FFCA64',
      main: '#FFB400',
      dark: '#E09E00',
      contrastText: '#FFF'
    },
    info: {
      light: '#32BAFF',
      main: '#16B1FF',
      dark: '#139CE0',
      contrastText: '#FFF'
    },
    refactoring: {
      light: '#fef2c0',
      main: '#fef2c0',
      dark: '#fef2c0',
      contrastText: '#000'
    },
    deploy: {
      light: '#0A772F',
      main: '#0A772F',
      dark: '#0A772F',
      contrastText: '#FFF'
    },
    release: {
      light: '#5319E7',
      main: '#5319E7',
      dark: '#5319E7',
      contrastText: '#FFF'
    },
    issue: {
      light: '#D93F0B',
      main: '#D93F0B',
      dark: '#D93F0B',
      contrastText: '#FFF'
    },
    feature: {
      light: '#1D76DB',
      main: '#1D76DB',
      dark: '#1D76DB',
      contrastText: '#FFF'
    },
    'up-to-date': {
      light: '#FBCA04',
      main: '#FBCA04',
      dark: '#FBCA04',
      contrastText: '#FFF'
    },
    open: {
      light: '#0E8A16',
      main: '#0E8A16',
      dark: '#0E8A16',
      contrastText: '#FFF'
    },
    closed: {
      light: '#5319E7',
      main: '#5319E7',
      dark: '#5319E7',
      contrastText: '#FFF'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? '#FFF' : '#312D4B',
      default: mode === 'light' ? '#F4F5FA' : '#28243D'
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.3)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  }
}

declare module "@mui/material/styles" {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPaletteOptions {}
}

type CustomPalette = {
  [_ in GitLabelColor | GitStatusColor]: PaletteColor;
}
type CustomPaletteOptions = {
  [_ in keyof CustomPalette]?: PaletteColorOptions;
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    'refactoring': true;
    'deploy': true;
    'issue': true;
    'feature': true;
    'up-to-date': true;
    'release': true;
    'hotfix': true;
  }
}

export default DefaultPalette

import {createTheme} from "@material-ui/core";


const theme = createTheme({
    props: {
        MuiButton: {
            disableElevation: true,
        },
    },
    palette: {
        primary: {
            main: '#3E3E3E',
        },
        secondary: {
            main: '#FFFFFF',
        },
        error: {
            main: '#B72A27',
        }
    },
    typography: {
        fontFamily: ['"Noto Sans"',].join(','),
    },
    overrides: {
        MuiSlider: {
            colorSecondary: {
                color: '#B72A27',
            }
        },
        MuiDialog: {
            paper: {
                borderRadius: '30px',
                backgroundColor: 'transparent',
                overflowX: 'hidden',
            }
        },
        MuiMenu: {
            paper: {
                borderRadius: '20px',
                padding: '20px',
            },
        },
        PrivateSwitchBase: {
            root: {
                padding: '2px',
                paddingLeft: '35px',
            },
            checked: {
                color: '#B72A27',
            }
        },
        PrivateRadioButtonIcon: {
            checked: {
                color: '#B72A27',
            }
        },
    }
});

export default theme;
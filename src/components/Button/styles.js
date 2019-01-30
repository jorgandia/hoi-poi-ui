export default (theme) => ({
    root: {
        boxSizing: 'border-box',
        display: 'inline-block',
        minWidth: '100px',
        padding: '5px 16px',
        borderRadius: '100px',
        textAlign: 'center',
        cursor: 'pointer !important',
        '&:active': {
            ...theme.effects.buttonActive,
        },
        '&$fullWidth': {
            width: '100%',
        },
        '&$disabled': {
            backgroundPosition: '0 0 !important',
            opacity: 0.5,
            cursor: 'not-allowed !important',
            '& *': {
                cursor: 'not-allowed',
            },
        },
        '& *': {
            cursor: 'pointer',
        },
    },
    label: {
        isolate: true,
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
        fontWeight: 500,
        ...theme.typography.button,
    },
    // Types
    outlined: {
        padding: '4px 16px',
        '&$primary': {
            background: 'transparent',
            backgroundColor: 'transparent',
            border: `1px solid ${theme.colors.primary}`,
            transition: `color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .1s ease-in-out`,
            '&$disabled': {
                '&:hover': {
                    backgroundColor: 'transparent',
                    '& $label': {
                        color: theme.colors.primary,
                    },
                },
            },
            '& $label': {
                color: theme.colors.primary,
            },
            '&:hover': {
                backgroundColor: theme.colors.primary,
                '& $label': {
                    color: theme.colors.text.primary,
                },
            },
        },
        '&$danger': {
            background: 'transparent',
            backgroundColor: 'transparent',
            border: `1px solid ${theme.colors.danger}`,
            transition: `color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .1s ease-in-out`,
            '& $label': {
                color: theme.colors.danger,
            },
            '&:hover': {
                backgroundColor: theme.colors.danger,
                '& $label': {
                    color: theme.colors.text.danger,
                },
            },
        },
        '&$small': {
            padding: '0 16px',
        },
        '&$big': {
            padding: '9px 16px',
        },
    },
    //Colors
    default: {
        backgroundColor: 'transparent',
        transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
        '& $label': {
            color: theme.colors.text.default,
        },
        '&:hover': {
            backgroundColor: theme.colors.lightGray,
        },
    },
    primary: {
        background: `linear-gradient(to bottom, ${theme.colors.primary} 0%, ${
            theme.colors.primary
        } 50%, ${theme.colors.primaryDark} 100%)`,
        filter: `DXImageTransform.Microsoft.gradient( startColorstr='${
            theme.colors.primary
        }', endColorstr='${theme.colors.primaryDark}', GradientType=0 )`,
        backgroundSize: 'auto 200% !important',
        backgroundPosition: '100% 0 !important',
        transition: `box-shadow .2s ease-in, background-position .1s ease-in-out`,
        '& $label': {
            color: theme.colors.text.primary,
        },
        '&:hover': {
            backgroundPosition: '0 100% !important',
        },
    },
    danger: {
        background: `linear-gradient(to bottom, ${theme.colors.danger} 0%, ${
            theme.colors.danger
        } 50%, ${theme.colors.dangerDark} 100%)`,
        filter: `DXImageTransform.Microsoft.gradient( startColorstr='${
            theme.colors.danger
        }', endColorstr='${theme.colors.dangerDark}', GradientType=0 )`,
        backgroundSize: 'auto 200% !important',
        backgroundPosition: '100% 0 !important',
        transition: `box-shadow .2s ease-in, background-position .1s ease-in-out`,
        '& $label': {
            color: theme.colors.text.danger,
        },
        '&:hover': {
            backgroundPosition: '0 100% !important',
        },
    },
    // Sizes
    small: {
        minWidth: '60px',
        padding: '0px 10px',
    },
    big: {
        minWidth: '130px',
        padding: '10px 16px',
    },
    // States
    disabled: {},
    fullWidth: {},
});

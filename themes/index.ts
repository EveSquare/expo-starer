import { createTheme } from "@rneui/themed";

const theme = createTheme({
    lightColors: {
        primary: 'red',
        background: 'white',
    },
    darkColors: {
        primary: 'blue',
        background: 'black',
    },
    components: {
        Button: {
            containerStyle: {
                backgroundColor: "primary",
            },
            raised: true,
            radius: "md",
        },
        Card: {
            containerStyle: {
                backgroundColor: "background",
            },
        }
    },
});

export default theme;
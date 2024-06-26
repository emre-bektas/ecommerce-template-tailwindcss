/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
    content: [
        "src/**/*.{html,js}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                blue_flower : "#030741",
                primary: {
                    DEFAULT : "#2dbb25",
                    '50': '#fff8ed',
                    '100': '#feefd6',
                    '200': '#fcdcac',
                    '300': '#fac277',
                    '400': '#f79937',
                    '500': '#f5811a',
                    '600': '#e66610',
                    '700': '#bf4d0f',
                    '800': '#973d15',
                    '900': '#7a3414',
                    '950': '#421808',
                },
            },
            fontSize: {
                xxs: ['0.68rem', '.8rem'],
                s: "0.813rem",
                m: ['0.9rem', '1.3rem'],

            },
        },
    },
    plugins: [
        nextui({
            prefix: "nexlink",
            themes : {
                light : {
                    colors : {
                        primary: {
                            DEFAULT : "#f79937",
                            '50': '#fff8ed',
                            '100': '#feefd6',
                            '200': '#fcdcac',
                            '300': '#fac277',
                            '400': '#f79937',
                            '500': '#f5811a',
                            '600': '#e66610',
                            '700': '#bf4d0f',
                            '800': '#973d15',
                            '900': '#7a3414',
                            '950': '#421808',
                        },
                    }
                }
            }
        }),
    ],
}


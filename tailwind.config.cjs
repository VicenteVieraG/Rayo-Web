/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter Variable", "sans-serif"],
                poppins: ["Poppins", "sans-serif"]
            },
            colors: {
                rblue: {
                    DEFAULT: "#0054d1",
                    200: "#bdd0ee",
                    400: "#8cafe3",
                    600: "#0054d1",
                    800: "#004aad",
                    900: "#25316d"
                }
            },
            height: {
                "1/12": "8.333333%"
            },
            minHeight: {
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "1/12": "8.333333%"
            }
        }
    },
    experimental: {
        classRegex: [
            ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
            ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
        ]
    },
    plugins: [
        require("@tailwindcss/container-queries"),
        "prettier-plugin-tailwindcss"
    ]
};

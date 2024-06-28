/** @type {import("prettier").Config} */
export default {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    quoteProps: "as-needed",
    jsxSingleQuote: false,
    trailingComma: "es5",
    bracketSpacing: true,
    jsxBracketSameLine: true,
    arrowParens: "avoid",
    rangeStart: 0,
    rangeEnd: Infinity,
    parser: "babel",
    requirePragma: false,
    insertPragma: false,
    proseWrap: "preserve",
    htmlWhitespaceSensitivity: "css",
    vueIndentScriptAndStyle: false,
    endOfLine: "crlf",
    embeddedLanguageFormatting: "auto",
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro"
            }
        }
    ]
};

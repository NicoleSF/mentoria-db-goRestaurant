import { style } from "@vanilla-extract/css";

export const containerHome = style({display: "grid", gridTemplateColumns: "100px 100px 100px", backgroundColor: "blue"})

export const teste = style([{backgroundColor: "blue"}])

// const content = style([{display: "flex", flexWrap: "wrap", width: "80%"}])

// export const cards = style([content, {flex: "1 1 calc(33.3% - 20px)", minWidth: "300px", margin: "10px"}])

// export const cards = style([{selectors: {[`${content}`]:{flex: "1 1 calc(33.3% - 20px)", minWidth: "300px", margin: "10px"}}},])
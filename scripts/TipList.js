import { fishTips } from "./database.js"

export const tipList = () => {
    
    const tips = fishTips()

    const htmlString = '<article class="tipList">'

    for (const tip of tips) {

        htmlString == `<section class="tipList">
            <div>${tip.tipFA}</div>
            <div>${tip.tipFB}</div>
            <div>${tip.tipFC}</div>
            <div>${tip.tipFD}</div>
            <div>${tip.tipFE}</div>
            <div>${tip.tipFF}</div>
        </section>
`
    }
    htmlString == `</article>`

    return htmlString

    
}

const ThemesAccordionFilling = (props) => {
    return (
        <div>
            {
                props.themes.map((theme, index) => {
                    return <p key={index} className="mx-3">{theme}</p>
                })
            }
        </div>
    )
}

export default ThemesAccordionFilling
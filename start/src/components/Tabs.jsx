export default function Tabs({buttons, children}){  //component for button menu and following content
    return(
        <>
        <menu>
            {buttons}
        </menu>
        {children}
        </>
    )
}
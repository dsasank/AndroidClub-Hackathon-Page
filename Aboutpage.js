import React from 'react'
import Grid from '@react-css/grid'
function Aboutpage() {
    const pagestyle = {
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
        overflowX: "hidden",
        background: "#180E0E",


    }
    const rectbox = {
        margin: "40px",
        flex: "1 0 250px",
        flexWrap: "wrap",
        height: "50vw",
        background: "#DEDEDE",
        borderRadius: "50px",
    }
    const fitem = {
        padding: "6vw",
        flex: "1 0 250px",
        flexWrap: "wrap",
        borderRadius: "50px",
    }
    const aboutstyle = {
        position: "relative",
        fontSize: "7vw",
        fontFamily: "Tourney",
        fontStyle: "normal",
        fontWeight: "900",
        lineHeight: "80px",
        color: "#FFF9F2",
    }
    const hacathonstyle = {
        position: "relative",
        fontFamily: "Tourney",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "8.5vw",
        marginLeft: "5vw",
        color: "#FFF9F2"
    }
    const textstyle = {
        position: "relative",
        fontFamily: 'Tourney',
        fontStyle: "normal",
        marginLeft: "10px",
        fontWeight: "800",
        fontSize: "20px",
        lineHeight: "30px",
        color: '#FFF9F2',
    }
    const buttonstyle = {
        position: "relative",
        height: "80px",
        width: "250px",
        float: "right",
        marginRight: "30px",
        background: "#FFF9F2",
        borderRadius: "30px",
        fontFamily: 'Tourney',
        fontWeight: "700",
        fontSize: "28px",
        color: "#FF0000",
        boxShadow: "0 4px red",
    }

    const winprizes = {
        flexWrap: "wrap",
        position: "relative",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        marginLeft: "5vw",
        marginTop: "0",
        fontFamily: "Tourney",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "7vw",
        color: "#FFF9F2",
        padding: 0,
    }
    const col1 = {
        display: "flex",
        justifyContent:"space-between",
    }
    const row1={
         margin:10,
        boxShadow:"7px 15px 9px red",
    }
    const col1items = {
       justifyContent:"space-between",
        float: "left",
        padding: 10,
        margin:10,
        boxShadow:"7px 15px 9px red",
        }
        return (
        <div>
            <div style={pagestyle}>
                <div style={rectbox}>

                </div>
                <div style={fitem}>
                    <div style={aboutstyle}>
                        about
                    </div>
                    <div style={hacathonstyle}>
                        hackathon
                    </div>
                    <div style={textstyle} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident,”
                    </div>
                    <button style={buttonstyle}>
                        Register here
                    </button>
                </div>
                <div>
                    <div style={winprizes}>
                        <p><span style={{ color: "red", marginRight: "15px", }}>Win</span>exciting prizes!</p>
                        {/* <div style={prizes}>
                        </div> */}
                        <Grid>
                            <div style={row1}>first</div>
                            <div style={row1}>second</div>
                            <div style={row1}>third</div>
                            <div style={col1}>
                                <span style={col1items}>sixth</span>
                                <span style={col1items}>sixth</span>
                                <span style={col1items}>sixth</span>
                                </div>
                            <div style={col1}>
                                <span style={col1items}>sixth</span>
                                <span style={col1items}>sixth</span>
                                <span style={col1items}>sixth</span>
                            </div>
                            </Grid>
                        </div>
                        </div>
                        </div>
                        </div>
    )
}

export default Aboutpage
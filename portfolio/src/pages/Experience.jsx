import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import VerticalScrollCards from "../components/VerticalScrollCards";


function Experience() {
    return (
        <>
        <ResponsiveAppBar/>
        <main style={{ position: 'relative', zIndex: 1 }}>
            <VerticalScrollCards/>
        </main>
    </>
    );
}

export default Experience;

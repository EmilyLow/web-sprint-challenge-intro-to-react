import React from "react";



const Character = props => {

    console.log("test");
    console.log("Character props,", props);
    if(!props.charData.name) return <h3>Loading...</h3>;
    

    return (

        <div>Test</div>

    );
};

export default Character;
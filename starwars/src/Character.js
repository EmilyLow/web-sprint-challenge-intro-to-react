import React from "react";
import styled from "styled-components";

//Green = #33FF33 

const FancyP = styled.p`
    color: #33FF33;
    font-size: 32px;
    margin: 15px;


`;



const Character = props => {

    console.log("test");
    console.log("Character props,", props);
    if(!props.charData.name) return <h3>Loading...</h3>;
    

    return (

        <FancyP>{props.charData.name}</FancyP>

    );
};

export default Character;
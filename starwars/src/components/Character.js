// Write your Character component here
import React from "react";
import styled from "styled-components";

//Green = #33FF33 

const FancyP = styled.p`
    
    font-size: 32px;
    margin: 15px;
    color: #33FF33;
    


`;

//${props => (props.openStatus ? `background: #2196f3;` : null)}

const InfoP = styled.p` 

    font-size: 16px;
    margin: 5px;
    color: #33FF33;
`;

const CharBox = styled.div`
    border-top: 2px solid #33FF33;
    margin-top: 40px;
    margin-left: 50px;
    margin-right: 50px;
`;






const Character = props => {

  
    //console.log("Character props,", props);
    if(!props.charData.name) return <h3>Loading...</h3>;
    
   
    return (
       
       
        //<FancyP onClick={(event) => console.log("click")}>{props.charData.name}</FancyP>
        //<FancyP>{props.charData.name}</FancyP>
       <CharBox>
            <FancyP onClick={props.toggleOpen}>{props.charData.name}</FancyP>
            
            <InfoP>Height: {props.charData.height} </InfoP>
            <InfoP>Mass: {props.charData.mass}</InfoP>
            <InfoP>Birth Year: {props.charData.birth_year}</InfoP>
       </CharBox>
       
        //<p>Test</p>
    );
};

export default Character;
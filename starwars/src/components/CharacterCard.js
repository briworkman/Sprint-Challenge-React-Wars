import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  const Container = styled.div`
    display: inline-block;
    margin: 40px;
  `;

  const CharacterContainer = styled.div`
    background-color: rgba(247, 247, 247, 0.8);
    border: 1px solid #443e3e;
    box-shadow: 0px 5px 20px rgb(71, 71, 71);
    border-radius: 15px;
    width: 300px;
    margin: 0 auto;
  `;

  const CharacterHeading = styled.h1`
    color: #443e3e;
    font-weight: bold;
  `;

  const CharacterInfo = styled.p`
    color: #443e3e;
  `;

  return (
    <Container>
      <CharacterContainer>
        <CharacterHeading>{props.name}</CharacterHeading>
        <CharacterInfo>Birth year: {props.birthYear}</CharacterInfo>
        <CharacterInfo>Gender: {props.gender}</CharacterInfo>
        <CharacterInfo>Eye Color: {props.eyecolor}</CharacterInfo>
      </CharacterContainer>
    </Container>
  );
}

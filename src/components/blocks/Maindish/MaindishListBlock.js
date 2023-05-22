import React from "react";
import styled from "styled-components";

const MaindishListBlock = ({ values }) => {
  return (
    <ListBlock>
      <div className="recipe">
        {values.recipe.map((value, index) => {
          return <div>{value}</div>;
        })}
      </div>
      <div className="price" style={{ textAlign: "right" }}>
        {values.price}
      </div>
    </ListBlock>
  );
};

const ListBlock = styled.div`
  display: flex;
  align-items: top;
  font-weight: 300;
  font-size: 1rem;

  & > div {
    padding: 10px 0;
  }

  & .recipe {
    width: 70%;
  }

  & .price {
    width: 30%;
  }
`;

export default MaindishListBlock;

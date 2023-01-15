/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import { Component } from 'react';
import * as PropTypes from 'prop-types';
import Item from './Item';

const ItemList = ({ itemList }) => {

    return (
        <Main>
            <Container>

                <SearchContainer>
                    <img id='logo' src='sausage-logo.png' />
                    <div id='search-box'></div>
                    <img id='cart-share' src='cart-share.png' />
                </SearchContainer>

                <ItemRankingTitle>상품 랭킹</ItemRankingTitle>

                <RankingContainer>

                    {itemList.map((it,index) => (
                        <Item
                            key = {it.id}
                            index={index + 1}
                            itemNm={it.itemNm}
                            itemImgUrl={it.itemImgUrl}
                            itemAmt={it.itemAmt}
                            brandNm='test'
                        />
                    ))}


                </RankingContainer>


            </Container>
        </Main>
    );
};

const Main = styled.div`
  width: auto;
  height: 100vh;
  background: #f2f2f2;
  font-family: 'line';
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

const Container = styled.div`

  border-radius: 20px;
  text-align: center;
  width: 380px;
  height: 880px;
  background: white;
  font-family: 'line';
`;

const SearchContainer = styled.div`

  display: flex;

  flex-direction: row;

  justify-content: space-around;

  margin-top: 20px;

  #logo {
    height: 18px;
    align-self: center;
  }

  #search-box {
    width: 200px;
    height: 30px;
    border-radius: 20px;

    background-color: #f2f2f2;
  }

  #cart-share {
    width: 28px;
    height: 28px;
  }
`;


const ItemRankingTitle = styled.p`

  margin: 40px 20px 50px 20px;
  
  text-align: start;
  margin-bottom: 30px;
  font-weight: bold;
  
`;

const RankingContainer = styled.div`
  text-align: start;
  height: 700px;

  margin: 20px 0px 50px 0px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-auto-rows: auto;
  overflow: scroll;
`;


export default ItemList;
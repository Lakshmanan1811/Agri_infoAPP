import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";

import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>crops</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter crops:</FilterText>
          <Select>
            <Option disabled selected>
              soil
            </Option>
            <Option>aluvial soil</Option>
            <Option>Black soil</Option>
            <Option>Red soil</Option>
            <Option>clay soil</Option>
            
          </Select>
          <Select>
            <Option disabled selected>
              climate
            </Option>
            <Option>summer</Option>
            <Option>winter</Option>
            <Option>monsoon</Option>
            <Option>rainy</Option>
            
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort crops by duration:</FilterText>
          <Select>
            <Option selected>minimum </Option>
            <Option>maximum </Option>
            
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      
      <Footer />
    </Container>
  );
};

export default ProductList;

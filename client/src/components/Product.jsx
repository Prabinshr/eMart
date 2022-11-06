import styled from "styled-components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { publicReq } from "../requestMethod";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  width: 75%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  a{
    width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  }

  &:hover {
    background-color: #e9f5f5;
    scale: 1.2;
  }
`;

const Product = ({ item }) => {
  const [product,setProduct] = useState({})
  const [quantity,setQuantity] = useState(1)
  const [color,setColor] = useState("black")
  const [size,setSize] = useState("L")
  const dispatch = useDispatch()

  useEffect(()=>{
    const getProduct = async ()=>{
      try{
        const res =await publicReq.get(`/product/find/${item._id}`)
        setProduct(res.data)
      }catch{}
    }
    getProduct()
  },[item._id])
 

  const handleClick = ()=>{
    dispatch(
      addProduct({...product,quantity,color,size})
    )
  }
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img}></Image>
      <Info>
        <Icon>
          <AddShoppingCartIcon onClick={handleClick}></AddShoppingCartIcon>
        </Icon>
        <Icon>
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>  
          <SearchIcon></SearchIcon>
          
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

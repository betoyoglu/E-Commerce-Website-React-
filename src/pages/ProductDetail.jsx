import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Card,Button,} from 'semantic-ui-react';
import ProductService from "../services/productService";

export default function ProductDetail() {
  //parametreleri obje olarak vericek
  let { name } = useParams();

  const [product, setProduct] = useState({}); 

  useEffect(()=>{
    let productService = new ProductService()
    productService.getByProductName(name).then(result=>setProduct(result.data.data))
  },[])
  
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header> {product.productName} </Card.Header>
            <Card.Meta> {product.categoryName} </Card.Meta>
            <Card.Description>
              {product.quantityPerUnit}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                sepete ekle
              </Button>
              <Button basic color="red">
                favorilere ekle
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

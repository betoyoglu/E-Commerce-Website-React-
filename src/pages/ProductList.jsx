import React, { useState, useEffect } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
  Button,
} from "semantic-ui-react";
import ProductService from "../services/productService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import {toast} from "react-toastify";

export default function ProductList() {
  const dispatch = useDispatch(); //action çağırmak için

  const [products, setProducts] = useState([]); //products diye bi datam var. defaul değeri [] ve ben bunu değiştirmek için setProducts kullanıcam >> hooks

  //sayfa yüklendiğinde yapılmasını istediğimiz kod >> useeffect
  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((result) => {
      setProducts(result.data.data);
      console.log(result.data.data); // Burada API'den gelen veriyi konsola yazdırıyoruz
    });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi!`)
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.error(`${product.productName} sepeten kaldırıldı!`)
  };

  //table rowu gelen ürün sayısı kadar tekrar etmem gerekiyor

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Ürün adı</TableHeaderCell>
            <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
            <TableHeaderCell>Stok Adedi</TableHeaderCell>
            <TableHeaderCell>Açıklama</TableHeaderCell>
            <TableHeaderCell>Kategori</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Link to={`/products/${product.productName}`}>
                  {product.productName}
                </Link>
              </TableCell>
              <TableCell>{product.unitPrice}</TableCell>
              <TableCell>{product.unitsInStock}</TableCell>
              <TableCell>{product.quantityPerUnit}</TableCell>
              <TableCell>
                {product.category !== undefined &&
                  product.category.categoryName}
              </TableCell>
              <TableCell>
                <Button onClick={()=>handleAddToCart(product)}> Sepete ekle</Button>
              </TableCell>
              <TableCell>
                <Button onClick={()=>handleRemoveFromCart(product)}> Sepetten kaldır</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <MenuItem as="a" icon>
                  <Icon name="chevron left" />
                </MenuItem>
                <MenuItem as="a">1</MenuItem>
                <MenuItem as="a">2</MenuItem>
                <MenuItem as="a">3</MenuItem>
                <MenuItem as="a">4</MenuItem>
                <MenuItem as="a" icon>
                  <Icon name="chevron right" />
                </MenuItem>
              </Menu>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

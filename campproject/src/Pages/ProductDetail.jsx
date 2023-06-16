import React, { useState, useEffect } from 'react';
import ProductService from '../Services/productService';
import { useParams } from 'react-router';
import { Button, Card, Image, Loader } from 'semantic-ui-react';
import { useNavigate } from 'react-router';

export default function ProductDetail() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!Number(id)) {
      navigate('/404');
    } else {
      let productService = new ProductService();
      productService.getProductById(id).then(result => setProduct(result.data));
    }
  }, [id, navigate]);

  if (!product && Number(id)) {
    return <div><Loader active inline='centered' /></div>;
  }

  if (!Number(id)) {
    navigate('/404');
    return null;
  }

  return (
    <div>
      {/* <h2>Ürün Detayı</h2>
      <p>Ürün Adı: {product.productID}</p>  
      <p>Ürün Adı: {product.productName}</p>  
      <p>Birim Fiyatı: {product.unitPrice}</p>  
      <p>Stok Adedi: {product.unitsInStock}</p> 
      <p>Açıklama: {product.quantityPerUnit}</p> 
      <p>Kategorinin Adı: {product.categoryName}</p> */}
      <Card.Group centered>
        <Card fluid>
          <Card.Content>
            <Card.Header>{product?.productName}</Card.Header>
            <Card.Meta>{product?.categoryName}</Card.Meta>
            <Card.Description>
              {product?.quantityPerUnit}
            </Card.Description>
            <Image
              centered
              size='medium'
              src={product?.productImage}
            />
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Sepete Ekle
              </Button>
              <Button basic color='red'>
                Favorilere Ekle
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

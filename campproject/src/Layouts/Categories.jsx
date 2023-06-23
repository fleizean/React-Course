import React, { useState, useEffect } from 'react'
import ProductService from '../Services/productService'
import { Dropdown } from 'semantic-ui-react'

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getCategories().then(result => {
      const uniqueCategories = Array.from(new Set(result.data));
      setCategories(uniqueCategories);
    });
  }, []);

  return (
    <Dropdown
      text=""
      icon="filter"
      floating
      labeled
      button
      className="icon"
    >
      <Dropdown.Menu>
        <Dropdown.Header icon="tags" content="Categories" />
        <Dropdown.Menu scrolling>
          {categories.map((category) => (
            <Dropdown.Item key={category} text={category} />
          ))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
  );
}

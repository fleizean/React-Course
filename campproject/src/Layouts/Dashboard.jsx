import React from 'react';
import Categories from './Categories';
import ProductList from '../Pages/ProductList';
import { Grid } from 'semantic-ui-react';
import { Route, Routes } from "react-router";
import ProductDetail from '../Pages/ProductDetail';
import CartDetail from '../Pages/CartDetail';
import { ToastContainer } from 'react-toastify';
import Error404 from '../Pages/Error404';

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position='bottom-right'/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Routes>
                            <Route exact path="/" element={<ProductList />} />
                            <Route path="/products" element={<ProductList />} />
                            <Route path="/products/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<CartDetail />} />
                            <Route path="*" element={<Error404/>} />
                            <Route path="/404" element={<Error404/>} />

                        </Routes>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}
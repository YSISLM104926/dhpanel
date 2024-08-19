import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: string;
    productTitle: string;
    description: string;
    category: string;
    status: string;
    regularPrice: number;
    extraprice: number;
    taxAmount: number;
    weight: number;
    length: number;
    height: number;
    width: number;
    totalstock: number;
}

interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
    products: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter((product: any) => product.id !== action.payload);
        },
        updateProduct: (state, action: PayloadAction<{ id: number; updatedProduct: Product }>) => {
            const { id, updatedProduct } = action.payload;
            const index = state.products.findIndex((product: any) => product.id === id);
            if (index !== -1) {
                state.products[index] = updatedProduct;
            }
        },
    },
});

export const { addProduct, deleteProduct, updateProduct } = productsSlice.actions;

export default productsSlice.reducer;

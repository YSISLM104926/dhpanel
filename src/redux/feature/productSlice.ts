import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    height?: number;
    length?: number;
    weight?: number;
    width?: number;
    totalstock?: number | undefined;
    id?: string | undefined;
    productTitle?: string | undefined;
    description?: string | undefined;
    category?: string | undefined;
    status?: string | undefined;
    regularPrice?: number | undefined;
    extraprice?: number | undefined;
    taxAmount?: number | undefined;
    error?: boolean;
    imageURL?: string[];
}

interface ProductsState {
    products: Product[];
    singleProduct: Product | null;
}

const initialState: ProductsState = {
    products: [],
    singleProduct: null,
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
        // updateProduct: (state, action: PayloadAction<{ id: number; updatedProduct: Product }>) => {
        //     const { id, updatedProduct } = action.payload;
        //     const index = state.products.findIndex((product: any) => product.id === id);
        //     if (index !== -1) {
        //         state.products[index] = updatedProduct;
        //     }
        // },
        getSingleProduct: (state, action: PayloadAction<number>) => {
            const foundProduct = state.products.find((product: any) => product.id === action.payload);
            state.singleProduct = foundProduct || null;
        },
        getDataAndMerge: (state, action: PayloadAction<Product>) => {
            const { id, height, length, weight, width, totalstock } = action.payload;
            const foundProduct = state.products.find((product) => product.id === id);

            if (foundProduct) {
                if ((totalstock as any) > 0) {
                    foundProduct.status = 'In Stock';
                } else {
                    foundProduct.status = 'Out of Stock';
                }

                // Merge the new data with the existing product
                const updatedProduct = {
                    ...foundProduct,
                    height,
                    length,
                    weight,
                    width,
                    totalstock
                };

                // Replace the old product with the updated one
                state.products = state.products.map(product =>
                    product.id === id ? updatedProduct : product
                );
            } else {
                state.products.push({ id, error: true })
                console.error(`Product with id ${id} not found`);
            }
        },
        getDataAndMergeWithImage: (state, action: PayloadAction<Product>) => {
            const { imageURL, id } = action.payload;
            const foundProduct = state.products.find((product) => product?.id === id);

            if (foundProduct) {
                const prevImg = foundProduct?.imageURL || []; // Ensure prevImg is an array
                console.log('prevImg', prevImg);
                console.log('imageURL', imageURL)
                const updatedProduct = {
                    ...foundProduct,
                    imageURL: {
                        ...prevImg, // Spread the existing images
                        ...(imageURL || []) // Spread the new images, defaulting to an empty array if undefined
                    }
                };
                // Replace the old product with the updated one
                state.products = state.products.map(product =>
                    product.id === id ? updatedProduct : product
                );
            } else {
                state.products.push({ id, error: true })
                console.error(`Product with id ${id} not found`);
            }
        },
    },
});

export const { addProduct, deleteProduct, getSingleProduct, getDataAndMerge, getDataAndMergeWithImage } = productsSlice.actions;

export default productsSlice.reducer;

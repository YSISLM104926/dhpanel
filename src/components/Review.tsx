import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hook";
const Review = () => {
    let data = useAppSelector((state: RootState) => state.products.products)
    console.log(data);
    return (
        <div className="w-full">
            <div className="shadow-md sm:rounded-lg">
                <table className="w-[1790px] ms-[-300px] text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Product Image</th>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Product Title</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Regular Price</th>
                            <th scope="col" className="px-6 py-3">Extra Price</th>
                            <th scope="col" className="px-6 py-3">Tax Amount</th>
                            <th scope="col" className="px-6 py-3">Weight</th>
                            <th scope="col" className="px-6 py-3">Length</th>
                            <th scope="col" className="px-6 py-3">height</th>
                            <th scope="col" className="px-6 py-3">Width</th>
                            <th scope="col" className="px-6 py-3">Total Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((d: any, index: number) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        <img
                                            className="w-10 h-10 rounded"
                                            src="/path/to/product-image.jpg"
                                            alt="Product Image"
                                        />
                                    </td>
                                    <td className="px-6 py-4">{d.id}</td>
                                    <td className="px-6 py-4">{d.productTitle}</td>
                                    <td className="px-6 py-4">{d.description}</td>
                                    <td className="px-6 py-4">{d.category}</td>
                                    <td className="px-6 py-4">${d.regularPrice}</td>
                                    <td className="px-6 py-4">${d.extraprice}</td>
                                    <td className="px-6 py-4">${d.taxAmount}</td>
                                    <td className="px-6 py-4">{d.weight}kg</td>
                                    <td className="px-6 py-4">{d.length}</td>
                                    <td className="px-6 py-4">{d.height}</td>
                                    <td className="px-6 py-4">{d.width}</td>
                                    <td className="px-6 py-4">{d.totalstock}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Review
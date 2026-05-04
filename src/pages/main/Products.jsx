import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader"
import productsData from "../../data/productsData";

export default function Products() {
    const [products] = useState(productsData);

    return (
        <div className="space-y-6">
            <PageHeader title="Products" breadcrumb={["Dashboard", "Product List"]} />

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 font-medium tracking-wide">
                            <tr>
                                <th className="px-6 py-4 uppercase text-xs">ID</th>
                                <th className="px-6 py-4 uppercase text-xs">Product Name</th>
                                <th className="px-6 py-4 uppercase text-xs">Code</th>
                                <th className="px-6 py-4 uppercase text-xs">Category</th>
                                <th className="px-6 py-4 uppercase text-xs">Brand</th>
                                <th className="px-6 py-4 uppercase text-xs text-right">Price</th>
                                <th className="px-6 py-4 uppercase text-xs text-center">Stock</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.map((item) => (
                                <tr key={item.id} className="hover:bg-blue-50/40 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-gray-900">{item.id}</td>
                                    <td className="px-6 py-4">
                                        <Link 
                                            to={`/products/${item.id}`} 
                                            className="text-emerald-400 hover:text-emerald-500"
                                        >
                                            {item.title}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{item.code}</td>
                                    <td className="px-6 py-4 text-gray-600">{item.category}</td>
                                    <td className="px-6 py-4 text-gray-600">{item.brand}</td>
                                    <td className="px-6 py-4 text-right font-bold text-gray-800">
                                        Rp {item.price.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-center text-gray-600">{item.stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

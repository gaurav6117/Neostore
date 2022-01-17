import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { getColor, getCategories } from '../../config/Myservices';
export default function ProductPage() {
    useEffect(() => {
        getColor().then(res => {
            if (res.data.success) {
                setcolor(res.data.cdata)
            }
        })
        getCategories().then(res => {
            if (res.data.success) {
                setcategories(res.data.cdata)
            }
        })
    }, [])
    const [color, setcolor] = useState([])
    const [categories, setcategories] = useState([])
    return (
        <div style={{ width: "95%" }} className="row m-auto">
            <div className="col-md-2 col-sm-4">
                <Link to="/productpage/" className="btn btn-outline-primary myacountLink">All Products</Link>
                <div className="dropdown">
                    <button className="btn btn-outline-primary myacountLink dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {categories.map(elem =>
                            <li><Link to={`/productpage/category/${elem.category_name}`} className="dropdown-item" >{elem.category_name}</Link></li>
                        )}
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="btn btn-outline-primary myacountLink dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Color
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {color.map(elem =>
                            <li><Link to={`/productpage/color/${elem.color_name}`} className="dropdown-item" >{elem.color_name}</Link></li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="col-md-10 col-sm-8">
                <Outlet />
            </div>
        </div>
    )
}

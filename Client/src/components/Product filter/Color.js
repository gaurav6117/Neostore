import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';
export default function Color() {
    const dispatch = useDispatch()
    let params = useParams();
    const Products = useSelector(state => state.Products)
    const [rerender, setrerender] = useState()
    var colorProducts = Products.filter(function (el){
        return el.color_id.color_name === params.cname
    })
    let navigate = useNavigate();
    const productDetailFunc = (id) => {
        navigate(`/productDetail/${id}`)
    } 
    const addToCart = (id) => {
        if (localStorage.getItem("myCart") != undefined) {
            let arr = JSON.parse(localStorage.getItem("myCart"));
            if ((Object.keys(arr)).includes(String(id))) {
                var val = arr[id];
                arr[id] = val + 1;
                let temp2 = Object.keys(arr);
                dispatch({ type: "CARTCOUNT", payload: temp2.length });
                localStorage.setItem("myCart", JSON.stringify(arr));
            }
            else {
                arr[id] = 1;
                let temp2 = Object.keys(arr);
                dispatch({ type: "CARTCOUNT", payload: temp2.length });
                localStorage.setItem("myCart", JSON.stringify(arr));
            }
        }
        else {
            let arr = { [id]: 1 }
            let temp2 = Object.keys(arr);
            dispatch({ type: "CARTCOUNT", payload: temp2.length });
            localStorage.setItem("myCart", JSON.stringify(arr))
        }
    }
    const sortByRating = () => {
        colorProducts.sort((a, b) => {
            return b.product_rating - a.product_rating;
        });
        setrerender(!rerender)
    }
    const sortByPriceUp = () => {
        colorProducts.sort((a, b) => {
            return a.product_cost - b.product_cost;
        });
        setrerender(!rerender)
    }
    const sortByPriceDown = () => {
        colorProducts.sort((a, b) => {
            return b.product_cost - a.product_cost;
        });
        setrerender(!rerender)
    }
    return (
        <>
            <p style={{ color: "black", fontSize: "20px", textAlign: "end" }}>Sort By:<button onClick={sortByRating} className="sortIcon"><i className="fa fa-star sortIconin"></i></button><button onClick={sortByPriceUp} className="sortIcon">₹<i className="fa fa-arrow-up sortIconin"></i></button><button  onClick={sortByPriceDown} className="sortIcon">₹<i className="fa fa-arrow-down sortIconin"></i></button></p>
            <div className="row my-4 container m-auto">
                {colorProducts.map(elem =>
                    <div key={elem._id} className="col-lg-4 productCard">
                        <div className="productCardInner" style={{ width: "19rem" }}>
                            <img src={elem.product_image[0].base64} onClick={() => productDetailFunc(elem._id)} className="card-img-top m-auto" height="180px" width="100px" alt="loading..." />
                            <div className="cardBody">
                                <h5 className="cardTitle">{elem.product_name}</h5>
                                <div className="d-flex justify-content-between">
                                    <span className="productCardCost">${elem.product_cost}</span>
                                    <span className="productCardRating">Rating: <span className="cardRatingValue">{elem.product_rating}</span><i style={{ color: "blue", fontSize: "20px" }} className="fa fa-star"></i></span>
                                </div>
                                <div>
                                    <button onClick={() => addToCart(elem._id)} className="btn btn-primary productCardBtn">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

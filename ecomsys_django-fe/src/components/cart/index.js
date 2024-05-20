import './style.css'
import { useEffect, useState } from 'react';
import api_endpoint from '../../utils/ApiEnpoint';
import { getUser } from '../../utils/Utils';
import { NavLink } from 'react-router-dom'
function Cart() {
    const [listCarts, setListCarts] = useState([
        {
            "id": 8,
            "product": {
                "product_id": "Mb545e1c0-3448-489e-aaab-448c8c02a34a",
                "name": "Phone 15 Pro Max",
                "price": "1499.00",
                "image": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png"
            },
            "quantity": 1,
            "status": "Đợi mua hàng",
            "type_product": "Điện thoại"
        },
        {
            "id": 9,
            "product": {
                "product_id": "C6c7c3b4d-492d-4c3b-899a-b472f22d3688",
                "name": "ÁO KHOÁC NAM TORKLD",
                "price": "149.00",
                "image": "https://cbu01.alicdn.com/img/ibank/O1CN01C9LOjr1GQAg6XUIf4_!!4258180616-0-cib.jpg"
            },
            "quantity": 1,
            "status": "Đợi mua hàng",
            "type_product": "Quần áo"
        },
        {
            "id": 12,
            "product": {
                "product_id": "Bd284a60f-1eb5-4c6a-87e8-ba08b6446049",
                "name": "Hình Ảnh Của Bạn Đáng Giá Triệu Đô",
                "price": "15.00",
                "image": "https://cdn0.fahasa.com/media/catalog/product/i/m/image_181017.jpg"
            },
            "quantity": 1,
            "status": "Đợi mua hàng",
            "type_product": "Sách"
        },
        {
            "id": 13,
            "product": {
                "product_id": "Mab0e5352-df79-4955-b6f0-ae78c3332a84",
                "name": "Xiaomi 13T 12GB 256GB",
                "price": "1200.00",
                "image": "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-13t_1__1_2.png"
            },
            "quantity": 1,
            "status": "Đợi mua hàng",
            "type_product": "Điện thoại"
        }
    ]
    );

    const [order, setOrder] = useState();

    const handlePlaceOrder = async () => {

    };

    useEffect(() => {
        if (getUser() === null) return;
        var customer_id = getUser().id
        fetch(`${api_endpoint.getCart}${customer_id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListCarts(data)
            })
            .catch(error => console.error('There was a problem with your fetch operation:', error));
    }, []);

    return (
        <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="h2">Cart</th>
                                    <th className='text-center'>Quantity</th>
                                    <th className='text-center'>Price</th>
                                    <th className='text-center'>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listCarts ? listCarts.map(cart => (
                                    <tr key={cart.book?.id}>
                                        <th>
                                            <div className="d-flex align-items-center">
                                                <img src={''} className="img-fluid rounded-3"
                                                    style={{ maxWidth: '80px' }} alt="Book-cover" />
                                                <div className="flex-column ms-4 col-lg-8">
                                                    <NavLink style={{ textDecoration: 'none' }} to={`/book-detail/${cart.book?.id}`}><p className="mb-2 text-black" style={{ fontWeight: '500' }}>{cart.book?.title}</p></NavLink>
                                                    <p className="mb-0 text-muted" style={{ fontSize: '12px' }} >{cart.book?.author}</p>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="align-middle text-center" style={{ fontWeight: 500 }}>
                                            <p className='mb-0'>{cart.quantity}</p>
                                        </td>
                                        <td className="align-middle col-lg-1 text-center">
                                            <p className="mb-0" style={{ fontWeight: 500 }}>
                                                {`${(cart.book?.price * cart.quantity).toLocaleString()} vnđ`}
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                                <div onClick={() => { }} className="text-center" style={{ width: '100%' }}>
                                                    <i className="fa-regular fa-trash-can fa-lg trash-can-icon"></i>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )) : <h3>Loading...</h3>}
                            </tbody>
                        </table>
                    </div>

                    {listCarts.length > 0 ?
                        <div className="card shadow-2-strong mb-5 mb-lg-5" style={{ borderRadius: '16px', margin: '0 -8px' }}>
                            <div className="card-body p-4">
                                <div className="row">
                                    <div className="col-lg-3 mb-4 mb-md-0">
                                        <div className="d-flex flex-row pb-3">
                                            <div className="d-flex align-items-center pe-2">
                                                <input className="form-check-input" type="radio" value="Credit card" checked={order?.paymentStatus === 'Credit card'} onChange={e => { setOrder({ ...order, paymentStatus: e.target.value }); }} />
                                            </div>
                                            <div className="rounded border w-100 p-3">
                                                <p className="d-flex align-items-center mb-0">
                                                    <i className="fa-regular fa-credit-card fa-lg me-2"></i>Credit
                                                    Card
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row pb-3">
                                            <div className="d-flex align-items-center pe-2">
                                                <input className="form-check-input" type="radio" value="Cash" checked={order?.paymentStatus === 'Cash'} onChange={e => setOrder({ ...order, paymentStatus: e.target.value })} />
                                            </div>
                                            <div className="rounded border w-100 p-3">
                                                <p className="d-flex align-items-center mb-0">
                                                    <i className="fa-solid fa-money-bill-wave fa-xl me-2"></i>
                                                    Cash
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-6 col-xl-6">
                                                <div className="form-outline mb-3 mb-xl-4">
                                                    <input type="text" className="form-control" placeholder="What's the name" value={order?.name} onChange={e => setOrder({ ...order, name: e.target.value })} />
                                                    <label className="form-label"><span className='required'>Receiver's Name</span> <span style={{ color: 'red' }}>Thiếu tên</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-xl-6">
                                                <div className="form-outline mb-3 mb-xl-4">
                                                    <input type="number" className="form-control" placeholder="(+84) XX-XXX-XXX" value={order?.phoneNumber} onChange={e => setOrder({ ...order, phoneNumber: e.target.value })} />
                                                    <label className="form-label"><span className='required'>Receiver's phone number</span> <span style={{ color: 'red' }}>Không có số điện thoại</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12 col-xl-12">
                                                <div className="form-outline mb-3 mb-xl-4">
                                                    <input type="text" className="form-control" placeholder="eg. 2848 El Caminito Street, Los Angeles" value={order?.address} onChange={e => setOrder({ ...order, address: e.target.value })} />
                                                    <label className="form-label"><span className='required'>Delivery Address</span> <span style={{ color: 'red' }}>Không có địa chỉ</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        {order?.paymentStatus === 'Credit card' && <><div className="row">
                                            <div className="col-lg-6 col-xl-6">
                                                <div className="form-outline mb-3 mb-xl-4">
                                                    <input type="text" className="form-control"
                                                        placeholder="Name" />
                                                    <label className="form-label">Name on card</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-xl-6">
                                                <div className="form-outline mb-3 mb-xl-4">
                                                    <input type="text" className="form-control" placeholder="MM/YY" />
                                                    <label className="form-label">Expiration</label>
                                                </div>
                                            </div>
                                        </div>

                                            <div className="row">
                                                <div className="col-lg-6 col-xl-6">
                                                    <div className="form-outline mb-3 mb-xl-4">
                                                        <input type="text" className="form-control"
                                                            placeholder="1111 2222 3333 4444" />
                                                        <label className="form-label" >Card Number</label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-xl-6">
                                                    <div className="form-outline mb-3 mb-xl-4">
                                                        <input type="password" className="form-control"
                                                            placeholder="&#9679;&#9679;&#9679;" />
                                                        <label className="form-label">Cvv</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>}
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                                            <p className="mb-2">Subtotal</p>
                                            <p className="mb-2" style={{ color: 'red' }}>{
                                                `${(listCarts.reduce((res, curr) => {
                                                    return res + curr.book?.price * curr.quantity;
                                                }, 0)).toLocaleString()} vnđ`
                                            }</p>
                                        </div>

                                        <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                                            <p className="mb-0">Shipping</p>
                                            <p className="mb-0">30.000 vnđ</p>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-flex justify-content-between mb-4" style={{ fontWeight: 500 }}>
                                            <p className="mb-2">Total</p>
                                            <p className="mb-2" style={{ color: 'red' }}>{`${(listCarts.reduce((res, curr) => {
                                                return res + curr.book?.price * curr.quantity;
                                            }, 0) + 30000).toLocaleString()} vnđ`}</p>
                                        </div>

                                        <button className="btn btn-primary btn-block btn-lg" onClick={handlePlaceOrder}>
                                            <div className="d-flex justify-content-between">
                                                {`Place Order`}
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> : <h3>Nothing in your cart.</h3>}
                </div>
            </div>
        </div>
    );
}

export default Cart;
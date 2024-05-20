import './style.css'
import avt from '../../images/ip15.jpg'
import Navigation from '../nav';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api_endpoint, { getProductById } from '../../utils/ApiEnpoint';
import { getUser } from '../../utils/Utils';
function ProductDetail() {
    const { product_id } = useParams();

    const [product, setProduct] = useState({})
    const navi = useNavigate()
    useEffect(() => {
        if (!product_id) {
            return;
        }
        // getProductById(product_id)
        //     .then(products => {
        //         console.log(products)
        //         setProduct(products);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching products:', error);
        //     });

        setProduct({
            "product_id": "B9dec643d-4486-4008-8ad5-ddd420d722b5",
            "name": "Sức Hút Của Sự Điềm Tĩnh",
            "author": "Tô Hoài",
            "publisher": "Tuổi thơ",
            "price": "12.00",
            "description": "Đặc điểm nổi bật\r\nblue-check\r\nXây dựng sự điềm tĩnh trong hành động, lời nói và thái độ.\r\nblue-check\r\nPhát triển khả năng làm chủ cảm xúc và tạo ra khí chất riêng.\r\nblue-check\r\nTác giả có kinh nghiệm và kiến thức sâu sắc về vấn đề này.",
            "image": "https://salt.tikicdn.com/cache/750x750/ts/product/5e/7d/c5/6caf6cf19d451fd5bbb40519ad8c01aa.png.webp",
            "category_id": 0,
            "type_product": "Sách"
        }
        );
    }, [])

    const addToCart = () => {
        var user = getUser()
        if (user === null) {
            alert('Vui lòng đăng nhập!')
            return;
        }
        const data = {
            'product_id': product.product_id,
            'quantity': 1,
            'customer_id': user.id
        }
        fetch(api_endpoint.addToCart, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data['status'] === 1) {
                    navi(`/cart`)
                } else {
                    alert('Có lỗi xảy ra!')
                }
            })
            .catch(error => {
                console.log(error)
            });
    }
    return (
        <div className='component-home-containe'>
            <section class="product-description">
                <div class="product-image">
                    <img id="preview-image" src={product?.image} />
                </div>
                <div class="product-info">
                    <h2>{product?.name}</h2>
                    <div className="book-rating">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span
                                key={i}
                                className={`${i < 5 ? 'star' : 'star-muted'}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <p>Mô tả sản phẩm:</p>
                    <pre class="time-new">{product?.description}</pre>
                    <p class="price-d">Giá: ${product?.price}</p>
                    <button class="add-to-cart" onClick={addToCart}>Thêm vào giỏ hàng</button>
                </div>
            </section>

        </div>
    );
}

export default ProductDetail;
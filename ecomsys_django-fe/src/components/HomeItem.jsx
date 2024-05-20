import React from 'react';
import Rating from 'react-rating';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

function HomeItem(props) {
    const { product } = props;
    const navigate = useNavigate();
    return (
        <>
            <h3>{product.category.name}</h3>
            <div className='book-cards mb-5'>
                {product.items.map(
                    book => (
                        <div key={book.id} className="book-card" >
                            <div className="content-wrapper result-item">
                                <img className="book-card-img" src={`${book.image}`} alt="book-cover" />
                                <NavLink to={`/product/${book.product_id}`} style={{ textDecoration: 'none' }}>
                                    <div className="card-content">
                                        <div className="book-name">
                                            {book?.name || 'khong co ten'}
                                            {book?.discount > 0 && (
                                                <img
                                                    src="./sale-icon.png"
                                                    alt="sale-icon"
                                                    className='flickering-icon'
                                                    style={{
                                                        maxWidth: '100%',
                                                        height: '1em',  // Adjust the height to match the text size
                                                        verticalAlign: 'middle',
                                                        marginLeft: '8px', // Add some spacing
                                                    }}
                                                />
                                            )}
                                        </div>

                                        <div className="book-by">by {book.author || 'khong co ten'}</div>
                                        <div className="rate">
                                            <Rating
                                                initialRating={book.overall_rating ?? 3}
                                                emptySymbol={<FaStar className="star-empty" />}
                                                fullSymbol={<FaStar className="star-full" />}
                                                halfSymbol={<FaStarHalfAlt className="star-half" />}
                                                readonly={true}
                                            />
                                            <span className="book-voters card-vote">{book.num_ratings} voters</span>
                                        </div>
                                        <div id='description' className="book-sum card-sum">{book.description}</div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    )
                )
                }
            </div>
        </>
    );
}

export default HomeItem;
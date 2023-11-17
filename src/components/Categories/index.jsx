import React, { useEffect } from 'react'
import styles from './Categories.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAC, setSelectedCategoryAC, getProductsAC } from '../../redux/reducers/productReducer';


const Categories = () => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.products.categories);

    useEffect(() => {
        dispatch(getCategoriesAC());
      }, []);

    const handleCategoryClick = (categoryId) => {
        dispatch(setSelectedCategoryAC(categoryId));
        dispatch(getProductsAC(50, 0, categoryId));
    };

    return (
        <div>
            <div className={styles.categoryContainer}>
                <ul className={styles.categoryList}>
                    {categories.map((category) => (
                    <li key={category._id} onClick={() => handleCategoryClick(category._id)}>{category.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Categories
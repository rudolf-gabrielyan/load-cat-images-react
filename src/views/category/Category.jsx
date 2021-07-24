import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/actions/imageActions";

import './category.scss';

const Category = () => {
    const  location  = useLocation();
    const dispatch = useDispatch();
    const[imagesLimit, setImagesLimit] = useState(10);
    const images = useSelector(({image}) => image.images);

    function getCategoryId() {
        return location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    }

    useEffect(() => {
        dispatch(getImages(imagesLimit, getCategoryId()));
    }, [getCategoryId(), imagesLimit]);

    function showMore() {
        setImagesLimit(imagesLimit + 10);
    }

    function showLess() {
        imagesLimit > 10 && setImagesLimit(imagesLimit - 10);
    }
    
    return (
        <div className='category-container'>
            <h1 className="category-title">Category {getCategoryId()}</h1>
            {
                images.map(image => <img className='image' src={image.url} key={image.id}/>)
            }
            <button onClick={showMore}>Show more</button>
            <button onClick={showLess}>Show less</button>
        </div>
    )
}

export default Category
import { useEffect } from "react";
import { getImages } from "../../store/actions/imageActions";

import { useDispatch, useSelector } from "react-redux";

import './dashboard.scss';


const Dashboard = () => {
    const images = useSelector(({image}) => image.images);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getImages(10));
    }, [])

    return (
        <div className="dashboard-container">
           <h3 className='dashboard-title'>Cats</h3>
            {
                images.map(image => <img className='image' src={image.url} key={image.id}/>)
            }
        </div>
    )
}

export default Dashboard
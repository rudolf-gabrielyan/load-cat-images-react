import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../store/actions/categoryActions";

import "./dashboard-layout.scss";


const DashboardLayout = () => {
    const dispatch = useDispatch();
    const categories = useSelector(({category}) => category.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    return (
        <div className="sidebar">
            <Link to={{ pathname: '/categories' }}>Dashboard</Link>
            <hr />
            {
                categories.map(category => <Link to={{pathname: `/categories/${category.id}`}} key={category.id} >{category.name}</Link>)
            }
        </div>
    )
}

export default DashboardLayout;
import { Link } from 'react-router-dom';
import { CategoryProps } from '../interface/categories.interface';

const CardCategory = ({ category }: { category: CategoryProps }) => {
    const cssProperties = "flex flex-col cursor-pointer transition-transform  duration-300 transform hover:scale-105 shadow-[0px_0px_12px_3px_rgba(0,0,0,0.1)] rounded-3xl border border-gray-800 p-3 items-center justify-center"
    return (
        <Link to={category.strCategory}>
            <div
                className={`${cssProperties}`}>
                <img className='w-60  rounded-3xl' src={category?.strCategoryThumb} alt={category?.strCategory} />
                <em className='text-base tracking-tight text-white sm:text-2xl'>{category?.strCategory}</em>
            </div>
        </Link>
    )
}

export default CardCategory
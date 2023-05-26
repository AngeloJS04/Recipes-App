import { Link } from 'react-router-dom';
import { CategoryProps } from '../interface/categories.interface';

const CardCategory = ({ category }: { category: CategoryProps }) => {

    return (
        <Link to={category.strCategory}>
            <div
                className='flex flex-col cursor-pointer transition-transform duration-300 transform hover:scale-105 
                shadow-[0px_0px_12px_3px_rgba(0,0,0,0.1)] rounded-lg border border-gray-200 p-3 items-center justify-center'>
                <img className='w-60' src={category?.strCategoryThumb} alt={category?.strCategory} />
                <p className='text-base  tracking-tight text-dark sm:text-2xl'>{category?.strCategory}</p>
            </div>
        </Link>
    )
}

export default CardCategory

import { useParams } from 'react-router-dom';
import CardMeals from '../components/cardmeals';
import { appConfig } from '../config';
import useFetch from '../hooks/useFetch';

const Meals = () => {
    const { id } = useParams()
    const API_URL = `${appConfig.server.api}/search.php?s=${id}`
    const { data, loading } = useFetch(API_URL)
  

    return (
        <div>
            {
                loading ?
                    <div className='flex justify-center mt-32 items-center'>
                        <span className="loader"></span>
                    </div>
                    : data?.meals ? <CardMeals data={data} id={id} />
                        : <>
                            <h2 className='text-4xl text-center font-bold tracking-tight text-white sm:text-4xl mt-10'>No meals found for {id}</h2>
                            <div className='flex justify-center mt-16'>
                                <img width="100" height="100" src="https://img.icons8.com/ios/50/meal.png" alt="warning-emoji" />
                            </div>
                        </>
            }
        </div>
    )
}

export default Meals
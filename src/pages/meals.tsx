
import { useParams } from 'react-router-dom';
import CardMealsList from '../components/cardmeals';
import Loading from '../components/loading/laoding';
import NotFound from '../components/noFound';
import { appConfig } from '../config';
import useFetch from '../hooks/useFetch';

const Meals = () => {
    const { id } = useParams()
    let FILTER_BY_CATEGORY = 'filter.php?c='
    
    const API_URL = `${appConfig.server.api}/${FILTER_BY_CATEGORY}${id}`
    const { data, loading } = useFetch(API_URL)

    return (
        <div>
            {
                loading ? <Loading />
                    : data?.meals ? <CardMealsList meals={data.meals} />
                        : <NotFound title='No meals found' />
            }
        </div>
    )
}

export default Meals
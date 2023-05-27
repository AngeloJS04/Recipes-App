
import { useParams } from 'react-router-dom';
import CardMeals from '../components/cardmeals';
import Loading from '../components/loading/laoding';
import NotFound from '../components/noFound';
import { appConfig } from '../config';
import useFetch from '../hooks/useFetch';

const Meals = () => {
    const { id } = useParams()
    const API_URL = `${appConfig.server.api}/search.php?s=${id}`
    const { data, loading } = useFetch(API_URL)

    return (
        <div>
            {
                loading ? <Loading />
                    : data?.meals ? <CardMeals data={data.meals} id={id} />
                        : <NotFound title='No meals found' id={id} />
            }
        </div>
    )
}

export default Meals
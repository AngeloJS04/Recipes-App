import CardCategory from "../components/card"
import Container from "../components/container"
import Layout from "../components/layout"
import { appConfig } from "../config"
import useFetch from "../hooks/useFetch"
import { CategoryProps } from "../interface/categories.interface"

const Home = () => {
    const API_URL = `${appConfig.server.api}/categories.php`
    const { data } = useFetch(API_URL)

    return (
        <Layout>
            <Container title='Categories'>
                {data?.categories.map((category: CategoryProps) => <CardCategory key={category?.idCategory} category={category} />)}
            </Container>
        </Layout>
    )
}

export default Home
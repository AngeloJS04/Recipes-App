import React, { useState } from "react"
import { appConfig } from "../config"
import { MealsDetailsProps } from "../interface/categories.interface"
import ContainerMeals from "./container/containerMeals"
import MealCard from "./mealCard"
import MealsRecipe from "./mealReceipe"
import Modal from "./modal"

const CardMealsList = ({ meals }: { meals: MealsDetailsProps[] }) => {

    const [active, setActive] = useState(false)
    const [meal, setMeal] = useState<any>({})

    let FILTER_BY_ID = 'lookup.php?i='

    const getMealByID = async (id: string) => {
        const res = await fetch(`${appConfig.server.api}/${FILTER_BY_ID}${id}`)
        const data = await res.json()
        setActive(!active)
        setMeal(data.meals[0])
        return data
    }

    return (
        <React.Fragment>
            <ContainerMeals data={meals}>
                {meals?.map((meal: MealsDetailsProps) => (
                    <MealCard key={meal?.idMeal} meal={meal} getMealByID={getMealByID} />
                ))}
            </ContainerMeals>

            {active && (
                <Modal bg="bg-gray-900" title={`${meal?.strMeal}`} setActive={setActive} >
                    <MealsRecipe meal={meal} />
                </Modal>
            )}
        </React.Fragment>
    )
}
export default CardMealsList
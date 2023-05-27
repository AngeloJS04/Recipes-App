import { useState } from "react"
import { DateModified } from "../interface/categories.interface"
import ContainerMeals from "./container/containerMeals"
import MealCard from "./mealCard"
import MealsRecipe from "./mealReceipe"
import Modal from "./modal"
import React from "react"

const CardMeals = ({ data }: { data: DateModified[] }) => {

    const [active, setActive] = useState(false)
    const [meal, setMeal] = useState<any>({})

    const mealSelected = (meal: DateModified) => {
        setActive(!active)
        setMeal(meal)
    }

    return (
        <React.Fragment>
            <ContainerMeals data={data}>
                {data?.map((meal: DateModified) => (
                    <MealCard key={meal?.idMeal} meal={meal} mealSelected={mealSelected} />
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
export default CardMeals
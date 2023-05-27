import { useState } from "react"
import { DateModified } from "../interface/categories.interface"
import MealsRecipe from "./mealReceipe"
import Modal from "./modal"
import MealCard from "./mealCard"
import ContainerMeals from "./container/containerMeals"

const CardMeals = ({ data, id }: { id: string | undefined, data: DateModified[] }) => {

    const [active, setActive] = useState(false)
    const [meal, setMeal] = useState<any>({})

    const mealSelected = (meal: DateModified) => {
        setActive(!active)
        setMeal(meal)
    }

    return (
        <>
            <ContainerMeals data={data} id={id}>
                {data.map((meal: DateModified) => (
                    <MealCard key={meal?.idMeal} meal={meal} mealSelected={mealSelected} />
                ))}
            </ContainerMeals>

            {active && <Modal bg="bg-gray-900" title={`${meal?.strMeal}`} setActive={setActive} >
                <MealsRecipe meal={meal} />
            </Modal>
            }
        </>
    )
}

export default CardMeals
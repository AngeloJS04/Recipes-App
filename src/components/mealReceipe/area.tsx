import { MealsDetailsProps } from '../../interface/categories.interface'

const MealFrom = ({meal}: {meal: MealsDetailsProps}) => {
  return (
    <div className="mt-4 font-bold">
    <em>
        from: <span className="bg-green-100  text-green-800 text-sm font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            {meal.strArea}
        </span>
        category: <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            {meal.strCategory}
        </span>
    </em>
</div>
  )
}

export default MealFrom
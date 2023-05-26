import Stars from "./start";
import { useState } from "react"

const MealsRecipe = ({ meal }: { meal: any }) => {
    const [showVideo, setShowVideo] = useState(false)


    let count = 20;
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 py-8'>
            <div className="col-span-12 md:col-span-4 bg-yellow-200 rounded-r-3xl mr-10 p-5">
                <img className='w-80 rounded-full border border-gray-400 p-3 items-center justify-center' src={meal?.strMealThumb} alt={meal?.strMeal} />
                <div className="flex flex-col items-end">
                    <div className="mt-4 font-bold">
                        from: <span className="bg-green-100  text-green-800 text-sm font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                            {meal.strArea}
                        </span>
                        category: <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                            {meal.strCategory}
                        </span>
                    </div>
                    <Stars />
                </div>
            </div>
            {
                showVideo ? <>

                    <div className="flex">
                        <div className="video-container">
                            <iframe
                                allowFullScreen
                                className="video-frame"
                                src={meal.strYoutube.replace("watch?v=", "embed/")}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                            ></iframe>
                        </div>
                        <div>
                            <button
                                onClick={() => setShowVideo(!showVideo)}
                                className="mx-15">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white bg-red-600 rounded-full  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </> :

                    <>
                        <div className="col-span-12 md:col-span-4 m-3  ">
                            <div>
                                <span className="text-2xl mb-5  font-bold text-white p-1 rounded-lg">Description</span>
                            </div>
                            <span className="text-sm  text-center  text-white sm:text-sm">{meal.strInstructions}</span>
                            <div className=" mt-2">


                            </div>
                        </div>


                        <div className=" col-span-12 md:col-span-4 px-5 ">
                            <span className="text-2xl  font-bold mb-4 text-white p-1 rounded-lg">Ingredients</span>

                            {
                                Array(count).fill(0).map((_, i) => {
                                    return (<>
                                        {meal[`strIngredient${i + 1}`] && <div className="flex justify-between">
                                            <span className="text-sm  text-center text-white sm:text-sm"><span className="px-2 mr-2 bg-yellow-500 rounded-full">{i + 1}</span>{meal[`strIngredient${i + 1}`]}</span>
                                            <span className="text-sm   border-x-4 border-yellow-500 w-20  text-center text-white sm:text-sm">{meal[`strMeasure${i + 1}`]}</span>
                                        </div>}
                                    </>)
                                })
                            }
                            <div className="flex justify-end items-end mt-5">
                                <button className="bg-red-500 border hover:bg-red-700 text-white border-black font-bold py-2 px-4 rounded-full">
                                    <a
                                        onClick={() => setShowVideo(true)}
                                        target="_blank" >
                                        <span className="flex items-center">
                                            <img width="24" height="24" src="https://img.icons8.com/color/48/youtube--v1.png" alt="youtube--v1" />
                                            <span className="text-sm" >
                                                Watch video
                                            </span>
                                        </span>
                                    </a>
                                </button>
                            </div>
                        </div>

                    </>
            }
        </div>
    )
}

export default MealsRecipe
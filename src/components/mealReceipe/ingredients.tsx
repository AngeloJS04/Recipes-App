

const MealIngredients = ({meal, setShowVideo}: {meal: any,  setShowVideo: Function}) => {
    let count = 20
    return (
        <div className=" col-span-12 md:col-span-4 px-5 ">
            <span className="text-2xl  font-bold mb-4 text-white p-1 rounded-lg">Ingredients</span>

            {
                Array(count).fill(0).map((_, i) => {
                    return (<div key={i}>
                        {meal[`strIngredient${i + 1}`] && <div className="flex justify-between">
                            <span className="text-sm  text-center text-white sm:text-sm"><span className="px-2 mr-2 bg-yellow-500 rounded-full">{i + 1}</span><em>{meal[`strIngredient${i + 1}`]}</em></span>
                            <span className="text-sm   border-x-4 border-yellow-500 w-20  text-center text-white sm:text-sm"><em>{meal[`strMeasure${i + 1}`]}</em></span>
                        </div>}
                    </div>)
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
    )
}

export default MealIngredients
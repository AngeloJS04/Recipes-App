
import { MealsDetailsProps } from '../../interface/categories.interface'

const VideoMeal = ({ meal, setShowVideo, showVideo }: { meal: MealsDetailsProps, showVideo: boolean, setShowVideo: Function }) => {
    return (
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
    )
}

export default VideoMeal
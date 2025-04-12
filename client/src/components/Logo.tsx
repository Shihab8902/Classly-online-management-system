import { GrTechnology } from "react-icons/gr"


const Logo = () => {
    return <div className="flex flex-col items-center h-fit">
        <GrTechnology className="text-primary text-3xl lg:text-4xl" />
        <span className="text-font font-semibold font-logo text-base ">Classly Institute</span>
    </div>
}

export default Logo
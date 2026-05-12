
import vector from '../../assets/vector1.png'

const Banner = ({count}) => {
    return (
        <div className="flex gap-5 mt-20 items-center">


            <div className=" relative overflow-hidden rounded-xl flex items-center flex-row justify-center w-full h-64 bg-linear-to-r from-[#6e50e7] to-[#8d72e6] ">

                <img className=" absolute top-0 left-1
        " src={vector} alt="no" />

                <img className=" absolute top-0 right-1 rotate-180
        " src={vector} alt="no" />

                <div className="text-center relative z-10 text-white">
                    <h3 className="font-bold text-3xl">In-Progress</h3>
                    <h1 className="font-bold text-7xl">{ count }</h1>
                </div>
            </div>
            <div className=" relative overflow-hidden rounded-xl flex items-center flex-row justify-center w-full h-64 bg-linear-to-r from-[#41b6a0] to-[#92dae5] ">

                <img className=" absolute top-0 left-1
        " src={vector} alt="no" />

                <img className=" absolute top-0 right-1 rotate-180
        " src={vector} alt="no" />

                <div className="text-center relative z-10 text-white">
                    <h3 className="font-bold text-3xl">Resolve</h3>
                    <h1 className="font-bold text-7xl">0</h1>
                </div>
            </div>



        </div>
    );
};

export default Banner;
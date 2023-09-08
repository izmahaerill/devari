import Img from "../assets/child.jpg" // penamaan bebas yg penting root folder harus tepat

function Images({ image }) {
    return (

    <div className=" bg-blue-500 shadow-md flex flex-row items-center justify-center">
         <div className="w-20 h-20 block ">
            <img src={Img} alt="" />
            <img src={image} alt="" />
            {/*
                <Images Image="nama.jpg" />
            */}
            <p>{Image}</p>
         </div>
         <div className="flex justify-center bg-red-500 px-1 py-1 rounded-lg">
                <button className="">it's images</button>
         </div>    
    </div>
    
    );
}

export default Images; // penamaan bebas
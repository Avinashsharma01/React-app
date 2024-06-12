function Item(props){
    console.log(props)

    let Name="Avinash"
    let Date="23/12/2024"
    return(
        <>
            <div className="con flex justify-around items-center bg-cyan-500 p-2 mb-4">
                <div className="name w-[220px] px-2 h-[30px]">
                    <h1>{Name}</h1>
                </div>
                <div className="name  px-2 h-[30px]">
                    <h1>{Date} </h1>
                </div>
                <div className="name">
                   <button className="bg-red-700 w-20 text-white h-[30px]">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Item
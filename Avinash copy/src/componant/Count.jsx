/* eslint-disable react/prop-types */
function Count({Text}){
    return(
        <>
             <div className="textSummary mb-2 flex justify-around">
                        <h1  className="border-b-2 border-white">   (1).Your Text summary </h1>
                        <p  className="border-b-2 border-white">  (2). Total word is <span>{Text.split(" ").length-1}</span> and Total Latter is <span>{Text.length}</span></p>
                        <p  className="border-b-2 border-white">  (3). {0.48*Text.split(" ").length-1 + "  Second take to read"}</p>
                        <p  className="border-b-2 border-white">   (4). {(0.48*Text.split(" ").length-1)/60 + "  Minutes take to read"}</p>
                    </div>
        </>
    )
} 


export default Count
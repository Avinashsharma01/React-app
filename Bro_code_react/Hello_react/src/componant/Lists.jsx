/* eslint-disable react/jsx-key */
function Lists() {
    let fruits = ["Banana", "Orange", "Mango", "Apple"];
    fruits.sort()
    // let fruitList=fruits.map((fruit)=>{
    //     <li>{fruit}</li>
    // })

    let fruitList=fruits.map(fruit=> <li key={fruit}>{fruit}</li>)
    return(
        <>
            <h1>Hello World</h1>
            <ul>{fruitList}</ul>
        </>
    )
}

export default Lists;

import Item from "./item"


let todoitems=[
   {
    Name:'Avinash',
    Date:'04/12/2003'
   },
   {
    Name:'Soumya',
    Date:'04/23/2005'
   },
   {
    Name:'Avinash',
    Date:'02/06/2003'
   },
]


function Items(){
    return(
        <>
            <Item Name={todoitems} />
        </>
    )
}

export default Items
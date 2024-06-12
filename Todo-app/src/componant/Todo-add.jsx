function TodoAdd() {
    return (
        <>
            <div className="mt-4 flex justify-around mb-4">
                <div className="inputfield">
                    <input type="text" className=" w-[220px] px-2 h-[30px] "  />
                </div>
                <div className="inputfield">
                    <input type="date" className=" px-2 h-[30px]" />
                </div>
                <div className="inputfield">
                    <button className="bg-green-700 w-20 text-white h-[30px]">Add</button>
                </div>
            </div>
        </>
    );
}

export default TodoAdd;

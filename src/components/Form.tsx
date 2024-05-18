
function Form() {

    function handleSave() {
        
    }

  return (
    <>
        <div className="flex flex-col gap-6 w-1/2  mt-8 mb-5 mx-auto">
            <input type="text" className="border px-4 py-2 outline-none rounded-lg" placeholder="Enter name" />
            <input type="number" className="border px-4 py-2 outline-none rounded-lg" placeholder="Enter price" />
            <textarea name="" id="" className="border px-4 py-2 outline-none rounded-lg resize-none w-full" style={{height: '120px'}} placeholder="Enter description"></textarea>
            <button className="bg-blue-700 text-white p-2 rounded-lg transition-all duration-500 hover:bg-blue-800" onClick={handleSave}>SAVE</button>
        </div>
    </>
  )
}

export default Form
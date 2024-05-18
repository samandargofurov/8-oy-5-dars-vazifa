// import { useRef } from "react"

// interface ValidatePhoneType{
//     name: string,
//     price: number,
//     description: string
// }

// function Form() {
//     const nameRef = useRef<HTMLInputElement>(null)
//     const priceRef = useRef<HTMLInputElement>(null)
//     const descRef = useRef<HTMLTextAreaElement>(null)

//     function validate(name: string, price: number, desc: string) {
//         if(name.length.trim().value > 3){
//             alert('invalid name')
//             return false
//         }
//         if(price.length.trim().value < 0){
//             alert('invalid name')
//             return false
//         }
//         if(desc.length.trim().value > 3){
//             alert('invalid name')
//             return false
//         }

//         return true
//     }

//     function handleSave(event: React.MouseEvent) {
//         event.preventDefault()

//         let isValid = validate(name, price, desc);
//         if (isValid) {
//             const phone = {
//                 name: nameRef.current?.value,
//                 price: priceRef.current?.value,
//                 description: descRef.current?.value
//             }
//         }

//     }

//   return (
//     <>
//         <div className="flex flex-col gap-6 w-3/5  mt-8 mb-8 mx-auto">
//             <h1 className="font-semibold text-center text-4xl">Fill in the given</h1>
//             <input ref={nameRef} type="text" className="border px-4 py-2 outline-none rounded-lg" placeholder="Enter name" />
//             <input ref={priceRef} type="number" className="border px-4 py-2 outline-none rounded-lg" placeholder="Enter price" />
//             <textarea ref={descRef} name="" id="" className="border px-4 py-2 outline-none rounded-lg resize-none w-full" style={{height: '120px'}} placeholder="Enter description"></textarea>
//             <button className="bg-blue-700 text-white p-2 rounded-lg transition-all duration-500 hover:bg-blue-800" onClick={handleSave}>SAVE</button>
//         </div>
//     </>
//   )
// }

// export default Form



import { useRef } from "react"

interface ValidatePhoneType {
    name: string,
    price: number,
    description: string
}

function Form() {
    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const descRef = useRef<HTMLTextAreaElement>(null)

    function validate(name: string, price: number, desc: string) {
        if(name.trim().length <= 3){
            alert('Invalid name')
            return false
        }
        if(price < 0){
            alert('Invalid price')
            return false
        }
        if(desc.trim().length <= 3){
            alert('Invalid description')
            return false
        }

        return true
    }

    function handleSave(event: React.MouseEvent) {
        event.preventDefault()

        const name = nameRef.current?.value ?? ""
        const price = parseFloat(priceRef.current?.value ?? "0")
        const desc = descRef.current?.value ?? ""

        let isValid = validate(name, price, desc)
        if (isValid) {
            const phone: ValidatePhoneType = {
                name: name,
                price: price,
                description: desc
            }
            console.log(phone)
        }
        nameRef.current.value = null
        priceRef.current.value = null
        descRef.current.value = null
    }

    return (
        <>
            <div className="flex flex-col gap-6 w-3/5 mt-8 mb-8 mx-auto">
                <h1 className="font-semibold text-center text-4xl">Fill in the given</h1>
                <input ref={nameRef} type="text" className="border px-4 py-2 outline-none rounded-lg" placeholder="Enter name" />
                <input ref={priceRef} type="number" className="border px-4 py-2 outline-none rounded-lg" placeholder="Enter price" />
                <textarea ref={descRef} className="border px-4 py-2 outline-none rounded-lg resize-none w-full" style={{height: '120px'}} placeholder="Enter description"></textarea>
                <button className="bg-blue-700 text-white p-2 rounded-lg transition-all duration-500 hover:bg-blue-800" onClick={handleSave}>SAVE</button>
            </div>
        </>
    )
}

export default Form

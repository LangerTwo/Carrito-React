// import { BsX } from "react-icons/bs";

// const OrderCard = (props) => {
//     const { id, title, imageUrl, price, handleDelete } = props
//     let renderBsX
//     if (handleDelete) {
//         renderBsX = <div className="bg-red-500 rounded-full cursor-pointer">
//                         <BsX onClick={() => handleDelete(id)} className="text-2xl text-white"/>
//                     </div>
//     }
//   return (
//     <div className='flex justify-between items-center px-2 mb-2'>
//         <div className="flex items-center gap-2">
//             <figure className="w-20 h-20">
//                 <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
//             </figure>
//             <p className="text-sm font-light">{title}</p>
//         </div>
//         <div className="flex items-center gap-2">
//             <p className="text-lg font-medium">{price}</p>
//             {renderBsX}
//         </div>
//     </div>
//   )
// }

// export default OrderCard

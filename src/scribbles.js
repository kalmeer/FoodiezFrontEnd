// import React, { useState } from "react";

// const AddIngredient = ({ categoryStatus }) => {
//   const handleChange = (event) => {
//     // setCategory(event.target.value);
//     if (event.target.value === "other") categoryStatus(false);

//     return (
//       <div>
//         <input
//           type="text"
//           className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//           placeholder="Type Ingredient"
//           required
//         />
//       </div>
//     );
//   };

//   return (
//     <div>
//       <select onChange={handleChange} className="category">
//         <option value=" ">Select Ingredient</option>
//         <option value="category1">Category 1</option>
//         <option value="category2">Category 2</option>
//         <option value="category3">Category 3</option>
//         <option value="other">Other</option>
//       </select>
//     </div>
//   );
// };

// export default AddIngredient;

// import React, { useState } from "react";

// const AddIngredient = ({ categoryStatus }) => {
//   const handleChange = (event) => {
//     // setCategory(event.target.value);
//     if (event.target.value === "other") categoryStatus(false);

//     return (
//       <div>
//         <input
//           type="text"
//           className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//           placeholder="Type Ingredient"
//           required
//         />
//       </div>
//     );
//   };

//   return (
//     <div>
//       <select onChange={handleChange} className="category">
//         <option value=" ">Select Ingredient</option>
//         <option value="category1">Category 1</option>
//         <option value="category2">Category 2</option>
//         <option value="category3">Category 3</option>
//         <option value="other">Other</option>
//       </select>
//     </div>
//   );
// };

// export default AddIngredient;
// return (
//     <div className="fixed inset-0 bg-orange-900 bg-opacity-50 flex items-center justify-center  ">
//       <div className="bg-orange-500  rounded-md shadow-md  p-6 overflow-scroll max-h-[100%] recipe-container">
//         <form onSubmit={handleFormSubmit}>
//           <div className="flex">
//             <div className="mb-4">
//               <input
//                 type="text"
//                 id="name"
//                 value={title}
//                 onChange={handleTitleChange}
//                 className=" px-4 py-2 border-b text-2xl  rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 placeholder="Recipe Title"
//                 required
//               />
//               <textarea
//                 id="body"
//                 value={body}
//                 onChange={handleBodyChange}
//                 className=" px-4 py-2 border-b border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 rows={}
//                 required
//                 placeholder="This is Image location"
//               />
//               <br />
//               <textarea
//                 id="body"
//                 value={body}
//                 onChange={handleBodyChange}
//                 className=" px-4 py-2 border-b border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 rows={4}
//                 required
//                 placeholder="Description"
//               />
//             </div>

//             <div className="flex  border-b ">
//               <div className="  ">
//                 <div className="mb-6 ">
//                   <input onChange={handleBodyChange1}></input>
//                 </div>
//               </div>
//               <br />
//               <div className="mb-4">
//                 {ingredients.map((index) => (
//                   <div
//                     key={index}
//                     className="flex w-1000 items-center mb-2 text-orange-700"
//                   >
//                     <AddIngredient categoryStatus={categoryStatus} />

//                     <button
//                       type="button"
//                       onClick={() => handleRemoveIngredient(index)}
//                       className="ml-2 px-2 py-1 bg-orange-100 text-orange-500 rounded-md hover:bg-red-600 transition-colors"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 type="button"
//                 onClick={handleAddIngredient}
//                 className="px-2 py-1 bg-orange-800 text-orange-100 rounded-md hover:bg-orange-600 transition-colors"
//               >
//                 Add Ingredient
//               </button>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-orange-100 text-orange-500 rounded-md hover:bg-orange-800 hover:text-orange-100 transition-colors"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="ml-2 px-4 py-2 bg-red-600 text-orange-100 rounded-md hover:bg-red-700 transition-colors"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRecipe;

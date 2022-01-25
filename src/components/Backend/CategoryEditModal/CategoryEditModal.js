const CategoryEditModal = ({setModal, updatedCategory, setUpdatedCategory, updateCategoryFunc, categorySlug}) => {

  const updateSubmit = async (event) => {
    event.preventDefault();
    await updateCategoryFunc({categorySlug, name: updatedCategory});
    setModal(false);
    setUpdatedCategory('');
  }

  return (
      <div>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <form onSubmit={updateSubmit} className='p-4 bg-white flex justify-between items-center rounded-md'>
                        <input type="text" value={updatedCategory} onChange={(e) => setUpdatedCategory(e.target.value)} className='border focus:outline-none px-4 py-2' placeholder='Category Name' required />

                        <button type="submit" className='bg-blue-400 py-2 px-7 border-blue-400 text-white hover:bg-blue-500 transition'> 
                            update
                        </button>
                        <button onClick={() => setModal(false)} type="submit" className='bg-red-700 py-2 px-7 border-blue-400 text-white hover:bg-blue-500 transition'> 
                            <i className="fas fa-times"></i>
                        </button>
                    </form>
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
  )
};

export default CategoryEditModal;

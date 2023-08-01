interface ITagsProps {
    categories: any;
    filterItems: (category: any) => any;
};

export const Tags = ({categories, filterItems}: ITagsProps) => {
    
    return (
        <section className='block w-4/5 text-right'>
            {categories.map((category: any)=> {
                return  (           
                    <button 
                        key={category} 
                        type="button" 
                        onClick={()=> filterItems(category)} 
                        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                            {category}
                    </button>
                )
            })}            
        </section>
    );
};

export default Tags;

import useContexts from '../../../context/useContexts';
import Category from "../Category/Category";

const allCats = [
    {name: "Beauti", count: 10},
    {name: "fashion", count: 10},
    {name: "technology", count: 10},
    {name: "programming", count: 10},
    {name: "govement", count: 10},
    {name: "sports", count: 10},
    {name: "people", count: 10},
    {name: "food", count: 10},
    {name: "nature", count: 10},
    {name: "buisness", count: 10}
]

const Categories = () => {
    const { categories } = useContexts();
    return (
        <div className="bg-white p-4 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Categories</h2>
            {
                categories.data?.categories.map((cat, key) => (
                    <Category name={cat.name} cat={cat} />
                ))
            }
        </div>
    )
}

export default Categories

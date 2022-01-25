import SidebarPostItem from "../SidebarPostItem/SidebarPostItem"

const SidebarPosts = ({title, posts}) => {
    return (
        <div className="bg-white p-4 shadow-sm mt-5">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">{title}</h2>   

            {
                posts ? (
                    posts.slice(0, 6).map((post, key) => (
                        <SidebarPostItem post={post} />
                    ))
                ) : `No ${title}`
            }
        </div>
    )
}

export default SidebarPosts

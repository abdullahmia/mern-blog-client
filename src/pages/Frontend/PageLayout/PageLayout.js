import {useQuery} from 'react-query';
import { letestPost } from '../../../api/post';
import Categories from "../../../components/Frontend/Categories/Categories"
import LeftSidebar from "../../../components/Frontend/LeftSidebar/LeftSidebar"
import RightSidebar from "../../../components/Frontend/RightSidebar/RightSidebar"
import SidebarPosts from "../../../components/Frontend/SidebarPosts/SidebarPosts"
import SocialPlugin from "../../../components/Frontend/SocialPlugin/SocialPlugin"
import Subcribe from "../../../components/Frontend/Subcibe/Subcribe"
import useContexts from "../../../context/useContexts"

const PageLayout = ({children}) => {
    const { posts, letestposts } = useContexts();
    const featuredPosts = posts.filter(post => post.isFeatured === true);

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto">
                <div className="flex pt-5">

                    <LeftSidebar>
                        <Categories />
                        <SidebarPosts title="Featured Post" posts={featuredPosts} />

                    </LeftSidebar>

                    {/* Main Post */}
                    {children}

                    {/* Right Sidebar */}
                    <RightSidebar>
                        <SocialPlugin />
                        <SidebarPosts title="Recent Posts" posts={letestposts} />
                        <Subcribe />
                    </RightSidebar>
                </div>

            </div>
        </div>
    )
}

export default PageLayout

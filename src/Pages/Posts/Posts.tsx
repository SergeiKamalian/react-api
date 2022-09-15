// import { getData } from "../../Api/Api"
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getPosts } from "../../Api/Api";
import { IPost } from "../../module";
import Post from "./Post";
const Posts = () => {
    const localStoragePosts = useMemo(() => localStorage.getItem('posts'), [])
    const [posts, setPosts] = useState<IPost[]>(localStoragePosts ? JSON.parse(localStoragePosts) : [])

    const getAllPosts = useCallback(async () => {
        try {
            const Posts = await getPosts()
            localStorage.setItem('posts', JSON.stringify(Posts))
            setPosts(Posts)
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        if (!localStoragePosts) {
            getAllPosts()
        }
    }, [localStoragePosts, getAllPosts])


    return (
        <div className="page">
            <div className="Posts">
                <h1>Posts</h1>
                <div className="Posts_div">
                    {posts.map((post) => (
                        <Post post={post} key={post.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Posts
import { FC } from "react"
import { IPostsProps } from "../../module"

const Post: FC<IPostsProps> = ({ post }) => {
    return (
        <div className="Post">
            <span className="title">{post.title}</span>
            <span className="Id">ID: {post.userId}</span>
            <span className="body">{post.body}</span>
        </div>
    )
}
export default Post
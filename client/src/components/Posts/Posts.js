import style from './Posts.module.css';
import PostItem from './PostItem';

const Posts = ({ posts }) => {
    return (
        <div className={style.mainContainer}>
            <h4>-- Numerous posts about films --</h4>
            <div className={style.postsWrapper}>
                {posts.map(p => 
                    <PostItem
                        key={p.id}
                        content={p.content}
                        author={p.author}
                    />
                )}
            </div>
        </div>
    )
}

export default Posts;
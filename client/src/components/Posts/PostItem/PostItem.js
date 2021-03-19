import style from './PostItem.module.css';

const PostItem = ({ content, author }) => {
    console.log('Here postItem');
    console.log(content);
    return (
        <div className={style.post}>
            <img src="/blue-origami-bird.png" alt="white-origami"></img>
            <p className={style.description}>
                <span>{content}</span>
            </p>
            <span>
                <small>Author: {author}</small>
            </span>
        </div>
    )
}

export default PostItem;
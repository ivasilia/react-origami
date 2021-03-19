export const getAll = () => {
    return fetch('http://localhost:5000/posts')
    .then(p => p.json())
    .catch(err => console.log(err));
}

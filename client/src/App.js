import { Component } from 'react';
import style from './App.css';
import Header from './components/Header'
import Menu from './components/Menu'
import Posts from './components/Posts'
import * as postsService from './services/PostsService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    postsService.getAll()
      .then(posts => {
        this.setState({ posts });
      })
  }

  render() {
    return (
      <div className={style.app}>
        <div className={style.container}>
          <Header />
          <Menu />
          <Posts posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;

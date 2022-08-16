import { Component } from "React";

const blogUrl = "the.correct.blog.API.url/posts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      activePost: -1,
    };
  }

  componentDidMount() {
    fetch(blogUrl)
      .then((res) => res.json())
      .then((posts) => this.setState({ posts: posts }))
      .catch((err) => console.error(err));
  }

  setActivePost(postIndex) {
    this.setState({ activePost: postIndex });
  }

  render() {
    let { posts } = this.state;
    return (
      <div className="App">
        <PostList
          posts={posts}
          setActivePost={this.setActivePost}
          activePost={activePost}
        />
      </div>
    );
  }
}

function PostList({ posts, setActivePost, activePost }) {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <Post
          index={index}
          post={post}
          setActivePost={setActivePost}
          isActivePost={activePost === index}
        />
      ))}
    </div>
  );
}

function Post({ index, setActivePost, isActivePost }) {
  let { title, text } = post;
  return (
    <div
      className="post"
      onClick={(event) => {
        setActivePost(index);
      }}
    >
      {isActivePost ? <h3>{title}</h3> : <h5>{title}</h5>}
      <p>{text}</p>
    </div>
  );
}
export default App;
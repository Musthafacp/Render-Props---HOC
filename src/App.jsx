import './App.css';
import LikeImage from './components/WithOutAnything/LikeImage';
import LikePost from './components/WithOutAnything/LikePost';
import LikeimageUsingHOC from './components/WithUsingHOC/LikeimageUsingHOC'
import LikePostUsingHOC from './components/WithUsingHOC/LikePostUsingHOC'
import LikeImageUsingProps from './components/WithUsingProps/LikeImageUsingProps';
import LikePostUsingProps from './components/WithUsingProps/LikePostUsingProps'


function App() {
  return (
    <div>
      <h1>Blog</h1>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <h1>Blog Using HOC</h1>
      <div className='buttons'>
        <LikePostUsingHOC/>
        <LikeimageUsingHOC/>
      </div>
      <h1>Blog Using Props</h1>
      <div className='buttons'>
        <LikeImageUsingProps/>
        <LikePostUsingProps/>
      </div>
    </div>
  );
}

export default App;

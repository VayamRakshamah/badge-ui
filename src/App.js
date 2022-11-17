import './App.css';
import MetaBadgeData from './records.json';
import PostForm from './PostForm';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>Find your Metabadges here !</h1>
      </header>
      <PostForm/>
      {
        MetaBadgeData && MetaBadgeData.map( record => {
            return(
              <div className="box" key={record.id}>
                <strong>{record.title}</strong><br/>
                {record.description}<br/>
                {record.group}<br/>
                {record.link}<br/><br/>
              </div>
            )
        } )
      }
    </div>
  );
}

export default App;

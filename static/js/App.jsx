
function Homepage() {

    return (
      <div>
        <h1>#tbTweet</h1>
        <h4>Go back in time and read your old tweets</h4>
        <Queries/>
      </div>
    );
  }

function Queries() {
    
    const [twitUsername, setTwitUsername] = React.useState()

    return (    
    
    )

}


  ReactDOM.render(<Homepage />, document.getElementById('root'));
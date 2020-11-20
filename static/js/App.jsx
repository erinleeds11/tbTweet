
function Homepage() {

    return (
      <div >
        <div className="title">
        <h1>#tbTweet<span><img className="logo" src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png"></img></span></h1>
        
        <h5>Go back in time and read your old tweets</h5>
        </div>
        <Queries/>
      </div>
    );
  }

function Queries() {
    
    const [twitUsername, setTwitUsername] = React.useState("");
    const [numberResults, setNumberResults] = React.useState("");
    const [minDate, setMinDate] = React.useState();
    const [maxDate, setMaxDate] = React.useState();
    const [keyword, setKeyword]=React.useState(); //postentially add more!!
    const [showResults, setShowResults] = React.useState(false);

    const setResults = () => {
        setShowResults(true);
    }
    return (
        <div>  
            <div className="queries" >
                {/* <div>
                    Max # results: 
                    <input className="col s2" id="num-results" type = "text"  value = {numberResults} onChange = {e => setNumberResults(e.target.value)}></input>
                </div> */}
                <div className="row center">
                <div className="col s3">
                    <h6>Twitter username @:</h6>
                    <input id="enter-username" type = "text"  value = {twitUsername} onChange = {e => setTwitUsername(e.target.value)}></input>
                    
                </div>
                <div className="col s3" id="keyword">
                    <h6>Search by Keyword:</h6>
                    <input type = "text"  value = {keyword} onChange = {e => setKeyword(e.target.value)}></input>
                </div>
                    <div className="col s2 min-date">
                    <h6>From:</h6>
                        <input type = "date"  value = {minDate} onChange = {e => setMinDate(e.target.value)}></input>
                    </div>
                    <div className="col s2 max-date">
                    <h6>Until:</h6>
                        <input type = "date"  value = {maxDate} onChange = {e => setMaxDate(e.target.value)}></input>
                        
                    </div>
                    <div className="col s2">
                        <h6>Max # results: </h6>
                        <input id="num-results" type = "text"  value = {numberResults} onChange = {e => setNumberResults(e.target.value)}></input>
                    </div>
                </div>
            </div>
            <button onClick={setResults}>Show Tweets</button>
            
            <Results numberResults = {numberResults} username = {twitUsername} showResults={showResults} minDate = {minDate} maxDate = {maxDate} keyword={keyword}/>

        </div>

    )

}

function Results(props) {
    console.log(props.username)

    if (props.showResults) {

        const twintInfo = {"username":props.username, "number_results": props.numberResults, "min_date":props.minDate, "max_date": props.maxDate, "keyword":props.keyword}

        fetch('/api/get-tweets', {
            method: 'POST', 
            body: JSON.stringify(twintInfo),
            headers: {
              'Content-Type': 'application/json'
            },
          })
        .then(response => response.json())
            .then(data => {
            if (data) {
                console.log(data);                 
        }})
    
        return (
            <div>
                {props.username}
            </div>
        )
} else {
    return <div></div>
}
}

ReactDOM.render(<Homepage />, document.getElementById('root'));
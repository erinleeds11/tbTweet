
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
    
    const [twitUsername, setTwitUsername] = React.useState("");
    const [numberResults, setNumberResults] = React.useState("");
    const [minYear, setMinYear] = React.useState();
    const [minMonth, setMinMonth] = React.useState();
    const [minDay, setMinDay] = React.useState();
    const [maxYear, setMaxYear] = React.useState();
    const [maxMonth, setMaxMonth] = React.useState();
    const [maxDay, setMaxDay] = React.useState();
    const [keyword, setKeyword]=React.useState(); //postentially add more!!


    return (    
        <div>
            
            Twitter username:
            <input id="enter-username" type = "text"  value = {twitUsername} onChange = {e => setTwitUsername(e.target.value)}></input>
            Max # results: 
            <input id="num-results" type = "text"  value = {numberResults} onChange = {e => setNumberResults(e.target.value)}></input>
            <div className="min-date">
            From:
                <input placeholder="year" type = "text"  value = {minYear} onChange = {e => setMinYear(e.target.value)}></input>
                <input placeholder="month" type = "text"  value = {minMonth} onChange = {e => setMinMonth(e.target.value)}></input>
                <input placeholder="day" type = "text"  value = {minDay} onChange = {e => setMinDay(e.target.value)}></input>
            </div>
            <div className="max-date">
            Until:
                <input placeholder="year" type = "text"  value = {maxYear} onChange = {e => setMaxYear(e.target.value)}></input>
                <input placeholder="month" type = "text"  value = {maxMonth} onChange = {e => setMaxMonth(e.target.value)}></input>
                <input placeholder="day" type = "text"  value = {maxDay} onChange = {e => setMaxDay(e.target.value)}></input>
            </div>
            <div id="keyword">
                Search by Keyword
                <input  type = "text"  value = {keyword} onChange = {e => setKeyword(e.target.value)}></input>
            </div>

        </div>
    )

}


  ReactDOM.render(<Homepage />, document.getElementById('root'));
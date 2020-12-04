import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AboutPage from './components/AboutPage';
import TopMenu from './components/layout/TopMenu';
import Movies from './components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "./App.css";
import Searching from './components/Searching';
import ReviewDetails from './components/ReviewDetails';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      movies:[],
      isLoading: true
    }
  }

  async componentDidMount(){
    const res = await axios.get('https://api.nytimes.com/svc/movies/v2/reviews/{all}.json?api-key=45BFRTrdKTVGFCOfhSUdmg972UelLKdD');
    this.setState({movies:res.data.results,isLoading: false})
    console.log(this.state.movies);
  }
  
  searchMovies= async (movieText) => {
    const res = await axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieText}&api-key=45BFRTrdKTVGFCOfhSUdmg972UelLKdD`);
    this.setState({movies:res.data.results})  
  }

    render(){
        if (this.state.isLoading===true){
          return <div>Loading</div>
        }
        else{
          return (
            <Router>
              <div>
                <TopMenu/>
                <Container>
                    <Switch>
                      <Route exact path ="/" render = {()=>(
                        <React.Fragment>
                          <h1 className="text-center">Reviews List</h1>
                          <Searching searchMovies={this.searchMovies}/>
                          <Movies movies={this.state.movies}/>
                        </React.Fragment>
                        
                      )} />
      
                      <Route exact path="/about" component={AboutPage}/>
                      <Route exact path="/ReviewDetails/:idx" render= {()=>(
                      <ReviewDetails movies={this.state.movies}/>
                      )}/>
                    </Switch>
                </Container>
              </div>
            </Router>
          );
        }
       
    }
}

export default App;

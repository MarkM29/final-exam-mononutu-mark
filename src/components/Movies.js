import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const Movies = ({movies}) =>{
    return(
        <div className="list-movies">
            {movies.map((movie,idx)=>(
                <MovieItem idx={idx} key={movie.display_title} film={movie}/>
            ))}
        </div>
    )
}

Movies.propTypes = {
    movies: PropTypes.array.isRequired
}

export default Movies;


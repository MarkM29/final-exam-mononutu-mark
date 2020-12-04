import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const MovieItem =({film:{display_title,multimedia},idx }) =>{
    return(
        <Card body className="text-center">
            <Image src={multimedia? multimedia.src: null}/>
            <h3>{display_title}</h3>
            
            <Button variant="dark" as={Link} to={`/ReviewDetails/${idx}`} >Review Detail</Button>
        </Card>

      
       
    )
}


export default MovieItem;
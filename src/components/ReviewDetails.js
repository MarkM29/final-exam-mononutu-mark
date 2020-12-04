import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

const ReviewDetails = ({movies})=>{

    const {idx} = useParams();
    const {
        display_title,
        date_updated,
        multimedia,
        link,
        summary_short,
        publication_date,
        opening_date,
        headline,
        byline 
        }= movies[idx];

    
     return(

        <Container className="mt-4">
             <Link to="/">
                <Button className="mb-4 grey">Back to Home</Button> <br/>
            </Link>
            <Row variant = "white" classnName="text-center">
                <h2>{headline}</h2>     
                <Image className=""  src={multimedia.src} style={{width : '500px'} }/>
                <br/>
                <Badge variant="primary">Publication Date : {publication_date}</Badge>{' '}
                <Badge variant="warning">Opening Date : {opening_date}</Badge>{' '}
                <Badge variant="success">Date Updated : {date_updated}</Badge>{' '}
            </Row>
            <h4> Movie Title   :    {display_title} </h4>
            <h4> Byline        :    {byline} </h4>

            <br/>
            <h4>Summary</h4>
            <p>{summary_short}</p>
            

                <Button className="grey mb-5 text-right" href={link.url}>Visit Full Review Page</Button>
               
            
        </Container>

    )   

}
ReviewDetails.propTypes = {
    movies: PropTypes.array.isRequired
}

export default ReviewDetails; 
import Container from 'react-bootstrap/Container';

const AboutPage=() =>{

    return(
        <Container className= "mt-4">
            <h1>About</h1>
            <br/>
            <p>Aplikasi ini menyediakan dafar review film yang diulas oleh New York Times. Pada halaman Home ditampilkan daftar film yang bisa dilihat detailnya dan juga bisa terhubung langsung ke halaman New York Times</p>
            <br/>
            <h5>Pembuat Aplikasi:</h5>
            <p>Nama     : Mononutu, Mark Jibril</p>
            <p>Kelas    : Front-end Web Development - Parallel A </p>
            <br/>
            <h5>End Point REST API yang digunakan:</h5>
            <p>Untuk mendapatkan data-datanya, digunakan: https://api.nytimes.com/svc/movies/v2/reviews/type.json?</p>
            <p>Untuk melakukan pencarian, digunakan : https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=</p>
           
            <p>Dalam halaman detai yang digunakan adalah : display_title, date_updated, multimedia, link, summary_short, publication_date, opening_date, headline, byline </p>
            
            
        </Container>

    );

}

export default AboutPage;
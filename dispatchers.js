import { Card,Button } from "react-bootstrap";
const Dispatchers = () => {

const cardInfo = [
 {image: require('./images/d1.jpg'),title:"Robert Smith",text:"Capabale of dispatching several trucks at a time "},
 {image: require('./images/d2.jpg'),title:"Michael Scott",text:"Capabale of dispatching several trucks at a time "},
 {image: require('./images/d3.jpg'),title:"Jack Daniel",text:"Capabale of dispatching several trucks at a time "},
 
];

const renderCard =(card, index) => {
    return(
        <div className="col-lg-4 col-md-6 col-sm-12">
            <Card style={{ width: '18rem' }} key={index} >
  <Card.Img variant="top"  src={card.image}/>
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>
    <Card.Text>
    {card.text}
    </Card.Text>
    <Button variant="info">Go somewhere</Button>
  </Card.Body>
</Card>

        </div>  
    )
}

    return (
    <div>
        <div className="row text-center m-5">
            {cardInfo.map(renderCard)}            
    
        </div>




    </div>
    );
}

export default Dispatchers;
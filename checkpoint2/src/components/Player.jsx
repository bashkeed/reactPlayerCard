import Card from "react-bootstrap/Card";
const Player = ({
  name,
  club,
  country,
  jersey,
  age,
  img,
}) => {
  return (
    <div>
      <Card style={{ width: "18rem",color:"torqois",marginTop:'5px', textAlign:"center", backgroundColor:"gold", display:"flex",flexDirection:'column' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Team: {club} <br />
            Country: {country} <br />
            Jersey Number: {jersey} <br />
            Age: {age} <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Player;

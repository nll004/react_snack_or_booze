import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const snackIntro = "Made daily with fresh, local ingredients!";
const drinkIntro = "Expertly mixed by our excellent cocktail servers!";


function FoodMenu({ foodItems, title }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            {({title} === 'Drinks') ? drinkIntro : snackIntro}
          </CardText>
          <ListGroup>
            {foodItems.map(item => (
              <Link to={`/${title.toLowerCase()}s/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;

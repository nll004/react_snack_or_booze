import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold" style={{fontSize: "1.75rem"}}>
              Welcome to Silicon Valley's premier dive cafe!
          </CardTitle>
          <CardText>
            {`We boast ${drinks.length} drink and ${snacks.length} snack options!`}
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;

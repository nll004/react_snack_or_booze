import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import SnackOrBoozeApi from "./Api";
import {
    Card,
    CardBody,
    CardTitle,
    ListGroup,
    ListGroupItem,
    Button
  } from "reactstrap";

function NewSnackForm({addSnack, addDrink}){
    const [formData, setFormData] = useState([]);
    const history = useHistory();

    async function handleSubmit(evt){
        evt.preventDefault();
        const itemType = formData["item-type"];

        await SnackOrBoozeApi.addSnack(itemType, formData);
        if(itemType === 'drinks') addDrink(drinks => ([...drinks, formData]));
        else addSnack(snacks => ([...snacks, formData]));

        history.push(`/${formData["item-type"]}`)
    }

    function handleChange(evt){
        const { name, value }= evt.target;
        setFormData(data => ({...data, [name] : value}));
    }

    return(
        <Card>
            <CardBody>
                <CardTitle className="font-weight-bold text-center"> Add Item </CardTitle>
                    <form onSubmit={handleSubmit}>
                        <ListGroup className="text-center">
                            <ListGroupItem>
                                <label> Snack
                                    <input  type="radio"
                                            name="item-type"
                                            value='snacks'
                                            required
                                            onChange={handleChange}/>
                                </label>
                                <label> Drink
                                    <input  type="radio"
                                            name="item-type"
                                            value="drinks"
                                            onChange={handleChange}/>
                                </label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <input  type="text"
                                        placeholder="Item ID"
                                        required
                                        name="id"
                                        onChange={handleChange}/>
                            </ListGroupItem>
                            <ListGroupItem>
                                <input  type="text"
                                        placeholder="Item name"
                                        required
                                        name="name"
                                        onChange={handleChange}/>
                            </ListGroupItem>
                            <ListGroupItem>
                                <input  type="text"
                                        placeholder="Item description"
                                        name="description"
                                        onChange={handleChange}/>
                            </ListGroupItem>
                            <ListGroupItem>
                                <input  type="text"
                                        placeholder="Recipe details"
                                        name="recipe"
                                        onChange={handleChange}/>
                            </ListGroupItem>
                            <ListGroupItem>
                                <input  type="text"
                                        placeholder="How should it be served?"
                                        name="serve"
                                        onChange={handleChange}/>
                            </ListGroupItem>
                            <Button> Save </Button>
                        </ListGroup>
                    </form>
            </CardBody>
        </Card>
    )
}

export default NewSnackForm;

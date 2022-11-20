import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/*
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks(){
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  /** Add a snack or drink to API database
   * @param {string} itemType Either "drink" or "snack" to complete url for POST request
   * @param {object} newItem Object with snack information. This is the body of the POST request
  */

  static async addSnack(itemType, newItem){
    try{
      await axios.post(`${BASE_API_URL}/${itemType}`, {
        id: newItem.id,
        name: newItem.name,
        description: newItem.description,
        recipe: newItem.recipe,
        serve: newItem.serve
      });
    } catch(err) {
        console.error(err);
    }
  }
}

export default SnackOrBoozeApi;

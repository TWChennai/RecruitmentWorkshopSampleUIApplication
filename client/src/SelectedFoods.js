import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function SelectedFoods(props) {
  const { foods } = props;

  const foodRows = foods.map((food, idx) => (
    <tr key={idx}>
      <td>{food.description}</td>
      <td className="right aligned">{food.kcal}</td>
      <td className="right aligned">{food.protein_g}</td>
      <td className="right aligned">{food.fat_g}</td>
      <td className="right aligned">{food.carbohydrate_g}</td>
      <td><a href={"https://www.google.com/search?q="+ food.description} target='_blank'>Google Me</a></td>
      <td  onClick={() => props.onFoodClick(0)} className="trash"><FontAwesomeIcon icon={faTrashAlt} /></td>
    </tr>
  ));

  return (
    <table className="ui selectable structured large table">
      <thead>
        <tr>
          <th colSpan="7">
            <h3>Selected foods</h3>
          </th>
        </tr>
        <tr>
          <th className="eight wide">Description</th>
          <th>Kcal</th>
          <th>Protein (g)</th>
          <th>Fat (g)</th>
          <th>Carbs (g)</th>
          <th>Details</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {foodRows}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th className="right aligned" id="total-kcal">
            {sum(foods, "kcal")}
          </th>
          <th className="right aligned" id="total-protein_g">
            {sum(foods, "protein_g")}
          </th>
          <th className="right aligned" id="total-fat_g">
            {sum(foods, "fat_g")}
          </th>
          <th className="right aligned" id="total-carbohydrate_g">
            {sum(foods, "carbohydrate_g")}
          </th>
          <th/>
          <th/> 
        </tr>
      </tfoot>
    </table>
  );
}

function sum(foods, prop) {
  return foods
    .reduce((memo, food) => parseInt(food[prop], 10) + memo, 0.0)
    .toFixed(2);
}

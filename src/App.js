import logo from "./logo.svg";
import { useState } from "react";

import "./App.css";

function App() {
  //custom hook to refer to list that can be appended and modified
  const useProductList = (items) => {
    const [selectedList, setSelectedList] = useState([]);

    const createList = () => {
      let temp;
      temp = items.filter((i) => i.selected === true);
      setSelectedList((prev) => [...prev, ...temp]);
      console.log(selectedList);
    };

    return [selectedList, setSelectedList, createList];
  };

  // initial product list

  let products = [
    {
      id: 1,
      brand: " Crackers barrel",
      product: "double cheddar",
      selected: false,
      level: null,
    },
    {
      id: 2,
      brand: "Selection",
      product: "mozzarella cheddar",
      selected: false,
      level: null,
    },

    {
      id: 3,
      brand: "Black diamond",
      product: "mozzarella cheddar",
      selected: false,
      level: null,
    },
    {
      id: 4,
      brand: "helluva good",
      product: "French onion",
      selected: false,
      level: null,
    },
    {
      id: 5,
      brand: "Philadelphia",
      product: "dips trumpeted pigeon",
      selected: false,
      level: null,
    },
    {
      id: 6,
      brand: "Philadelphia",
      product: "trumpeted herbs and garlic",
      selected: false,
      level: null,
    },
    {
      id: 7,
      brand: "Armstrong",
      product: "marble cheddar",
      selected: false,
      level: null,
    },
    {
      id: 8,
      brand: "Armstrong",
      product: "medium MI fort",
      selected: false,
      level: null,
    },
    /*
 Crackers barrel double cheddar, selection mozzarella cheddar, black diamond mozzarella cheddar, helluva good French onion, heluva good French onion, Philadelphia dips trumpeted pigeon, Philadelphia trumpeted herbs and garlic, Armstrong marble cheddar, Armstrong medium MI fort



 selection medium cheddar mi-fort, selection medium cheddar mi-fort,selection old marble cheddar marble fort,giant value oldcheddar, giant value medium mi fort


 black diamond cheese-strings marble, black diamond cheese-strings mozzarella, Armstrong snacks marblecheddar, 
Beatrice milk 3.25% 4l,  Beatrice milk  1% 4l, Beatrice milk  0% 4l,Beatrice chocolate 4% 4l
  */
    {
      id: 9,

      brand: "Armstrong",
      product: "oldfort",
      selected: false,
      level: null,
    },
    {
      id: 10,
      brand: "Armstrong",
      product: "pizzamorella",
      selected: false,
      level: null,
    },

    {
      id: 11,
      brand: "selection",
      product: "pizza Marella",
      selected: false,
      level: null,
    },

    {
      id: 12,
      brand: "selection",
      product: "montery jack",
      selected: false,
      level: null,
    },

    {
      id: 13,
      brand: "selection",
      product: "extra old cheddar extra fort",
      selected: false,
      level: null,
    },

    {
      id: 14,
      brand: "selection",
      product: "medium cheddar mi-fort",
      selected: false,
      level: null,
    },

    {
      id: 15,
      brand: "selection",
      product: "old marble cheddar marble fort",
      selected: false,
      level: null,
    },

    {
      id: 16,
      brand: "giant value",
      product: "oldcheddar",
      selected: false,
      level: null,
    },

    {
      id: 17,
      brand: "giant value",
      product: "medium mi fort",
      selected: false,
      level: null,
    },

    ,
    /*
 black diamond cheese-strings marble, black diamond cheese-strings mozzarella, Armstrong snacks marblecheddar, 
Beatrice milk 3.25% 4l,  Beatrice milk  1% 4l, Beatrice milk  0% 4l,Beatrice chocolate 4% 4l

    */

    {
      id: 18,
      brand: "black diamond",
      product: "cheese-strings marble",
      selected: false,
      level: null,
    },

    {
      id: 19,
      brand: "black diamond",
      product: "cheese-strings mozzarella",
      selected: false,
      level: null,
    },

    {
      id: 20,
      brand: "Armstrong snacks",
      product: "marblecheddar",
      selected: false,
      level: null,
    },

    {
      id: 21,
      brand: "Beatrice milk ",
      product: " 3.25% 4l",
      selected: false,
      level: null,
    },
    {
      id: 22,
      brand: "Beatrice milk ",
      product: " 1% 4l",
      selected: false,
      level: null,
    },
    {
      id: 23,
      brand: "Beatrice milk ",
      product: " 0% 4l",
      selected: false,
      level: null,
    },

    {
      id: 24,
      brand: "Beatrice milk ",
      product: " 2% 4l",
      selected: false,
      level: null,
    },
  ];

  const [selectedList, setSelectedList, createList] = useProductList(products);

  //create list based on checked items
  const createChecked = (e, item) => {
    console.log(e.target.checked);

    console.log(item);

    //get id , find then alter

    let newlist = products.map((i) => {
      if (i.id === item.id) {
        i.selected = e.target.checked;
        return i;
      } else return i;
    });

    products = newlist;
  };

  //set the remaining stock level for the final pull list
  const setStockingLevel = (e, item) => {
    let lvl = e.target.innerText;

    //set class name on function running

    e.target.className += " selected-lvl";

    let productsPicked = structuredClone(selectedList);

    let newlist = productsPicked.map((i) => {
      if (i.id === item.id) {
        i.level = lvl;
        return i;
      } else return i;
    });

    products = newlist;
    setSelectedList(products);
    console.log(products);
  };

  const [updatedlist, setUpdatedList] = useState([]);

  const updateList = () => {
    setUpdatedList(selectedList);
  };
  //updated list to show level of stockings required, this  is the final update of the list .

  let listWithStockingsLevel;

  return (
    <div className="App">
      {products.map((i, key) => {
        return (
          <>
            <li>
              <b> {i.brand} </b> {i.product}{" "}
              <input type="checkbox" onChange={(e) => createChecked(e, i)} />
            </li>
          </>
        );
      })}

      <button onClick={createList}> Create List</button>

      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Product</th>
            <th>Current Level</th>
          </tr>
        </thead>
        <tbody>
          {selectedList.map((i, key) => {
            return (
              <>
                <tr>
                  <td>
                    {" "}
                    <b> {i.brand} </b>
                  </td>

                  <td>{i.product} </td>

                  <td>
                    <div
                      className="box low"
                      onClick={(e) => setStockingLevel(e, i)}
                    >
                      {" "}
                      low
                    </div>
                  </td>
                  <td>
                    <div
                      className="box med"
                      onClick={(e) => setStockingLevel(e, i)}
                    >
                      medium
                    </div>{" "}
                  </td>
                  <td>
                    <div
                      className="box high"
                      onClick={(e) => setStockingLevel(e, i)}
                    >
                      high
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <button onClick={updateList}> Update List</button>

      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Product</th>
            <th>Current Level</th>
          </tr>
        </thead>
        <tbody>
          {updatedlist.map((i, key) => {
            return (
              <>
                {" "}
                <tr>
                  <td>
                    {" "}
                    <b> {i.brand} </b>
                  </td>
                  <td> {i.product}</td>
                  <td>
                    {" "}
                    <span className={"box " + i.level}>{i.level}</span>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

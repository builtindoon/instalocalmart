import React, { useState } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function Product() {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [chosenCategory, setChosenCategory] = useState("");
  const [chosenShop, setChosenShop] = useState("");
  const [category, setCategory] = useState([
    "Choose category...",
    "Convenience Goods",
    "Shopping Goods",
    "Speciality Goods",
    "Unsought Goods",
  ]);
  const Cat = category.map((Cat) => Cat);
  const handleCatTypeChange = (e) =>
    setChosenCategory(category[e.target.value]);
  const [shop, setShop] = useState([
    "Choose shop...",
    "Shop1",
    "Shop2",
    "Shop3",
    "Step4",
  ]);
  const Shop = category.map((Shop) => Shop);
  const handleShopTypeChange = (e) => {
    setChosenShop(shop[e.target.value]);
  };

  const [error, setError] = useState([]);
  function validate() {
    const errors = [];
    if (price == 0) errors.push("Price can't be zero");
    if (quantity == 0) errors.push("Quantity can't be zero");
    if (brand == "") errors.push("Brand can't be empty");
    if (name == "") errors.push("Name can't be empty");
    if (chosenCategory == "") errors.push("Please choose any category.");
    if (chosenShop == "") errors.push("Please choose any shop");
    return errors;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors.length > 0) {
      setError({ errors });
      return;
    }
    alert("Added product successfully");
  };
  return (
    <div>
      <div className="container" style={{ padding: "10px 10px" }}>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1> Add Product/Goods</h1>
            <Form className="form-horizontal" onSubmit={handleSubmit}>
              {error.map((error) => (
                <p key={error}>Error: {error}</p>
              ))}
              <Form.Group className="mb-1" style={{ display: "flex" }}>
                <Form.Label className="control-label col-sm-4">
                  Product Category&nbsp;&nbsp;:
                </Form.Label>
                <div className="col-sm-8">
                  <Form.Select
                    defaultValue="State..."
                    onChange={(e) => handleCatTypeChange(e)}
                  >
                    {Cat.map((category, key) => (
                      <option value={key}>{category}</option>
                    ))}
                  </Form.Select>
                </div>
              </Form.Group>
              <Form.Group className="mb-1" style={{ display: "flex" }}>
                <Form.Label className="control-label col-sm-4">
                  Shop Name&nbsp;&nbsp;:
                </Form.Label>
                <div className="col-sm-8">
                  <Form.Select
                    defaultValue="State..."
                    onChange={(e) => handleShopTypeChange(e)}
                  >
                    {Shop.map((shop, key) => (
                      <option value={key}>{shop}</option>
                    ))}
                  </Form.Select>
                </div>
              </Form.Group>
              <Form.Group className="mb-1" style={{ display: "flex" }}>
                <Form.Label className="control-label col-sm-4">
                  Product Name&nbsp;&nbsp;:
                </Form.Label>
                <div className="col-sm-8">
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-1" style={{ display: "flex" }}>
                <Form.Label className="control-label col-sm-4">
                  Product Brand&nbsp;&nbsp;:
                </Form.Label>
                <div className="col-sm-8">
                  <Form.Control
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-1" style={{ display: "flex" }}>
                <Form.Label className="control-label col-sm-4">
                  Product Qunatity&nbsp;&nbsp;:
                </Form.Label>
                <div className="col-sm-8">
                  <Form.Control
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-1" style={{ display: "flex" }}>
                <Form.Label className="control-label col-sm-4">
                  Product Price&nbsp;&nbsp;:
                </Form.Label>
                <div className="col-sm-8">
                  <Form.Control
                    type="number"
                    step="any"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </Form.Group>
              <br></br>
              <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-7 center">
                  <Button
                    style={{ margin: "30px" }}
                    color="primary"
                    type="submit"
                  >
                    Submit
                  </Button>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button
                    style={{ margin: "30px" }}
                    color="primary"
                    type="submit"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}
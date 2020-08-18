import React, { Component } from "react";

class Shops extends Component {
  constructor() {
    super();
  }
  state = {
    shops: []
  }
  componentDidMount() {
    fetch('https://groc-api.herokuapp.com/shops')
    .then(res => res.json())
    .then((data) => {
      this.setState({ shops: data })
      console.log(this.state.shops)
    })
    .catch("shops",console.log)
  }

  render() {
    
    var bill =localStorage.getItem("cart1");
    
    
    return (<div className="container">
    <div className="col-xs-12">
  
  
    <h1>My shops</h1>
    {this.state.shops.map((shop) => (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{shop.shop_name}</h5>
         
          <button onClick={() => {
            var xhr = new XMLHttpRequest();
            var url = "https://groc-api.herokuapp.com/orders";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText);
                    console.log(json);
                }
            };
            var orders_payload={
              "order_status": "Pending",
              "user_id": "p_007",
              "shop_id": shop.id,
              "ordered_items": [ {
                  "product": "potato",
                  "price": 200,
                  "quantity": 100
                }
              ]
            }
            var data = JSON.stringify(orders_payload);
            xhr.send(data);
              
            }}>
            Choose this shop
          </button>
        </div>
      </div>
    ))}
     

    </div>
   </div>);
  }
}

export default Shops;
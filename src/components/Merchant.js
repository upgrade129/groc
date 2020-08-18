import React, { Component } from "react";

class Shops extends Component {
  constructor() {
    super();
  }
  state = {
    todos: []
  }
  componentDidMount() {
    fetch('https://groc-api.herokuapp.com/shops')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch("shops",console.log)

    
  }

  
  
 
  render() {
    
    var bill =localStorage.getItem("cart1");
    
    
    return (<div className="container">
    <div className="col-xs-12">
  
  
    <h1>My Todos</h1>
    {this.state.todos.map((todo) => (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{todo.shop_name}</h5>
         
          <button onClick={() => {
              // localStorage.setItem("shop_id",todo._id);
              // console.log(todo._id);
              // var bill =localStorage.getItem("cart1");
              // var json = {}
              // json.push({"bill":bill});
              // console.log("kk");
              // json.push(shopid);
              // console.log(json);
              // let xhr = new XMLHttpRequest(); 
              // let url = "https://groc-api.herokuapp.com/orders";
              // xhr.open("POST", url, true);
              // xhr.setRequestHeader("Content-Type", "application/json");  
              // var shopid = todo._id;
              
              // xhr.send(json); 
              console.log("kk");
              
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
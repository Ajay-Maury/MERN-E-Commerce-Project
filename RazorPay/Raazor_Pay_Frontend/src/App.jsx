import { useState, useEffect } from "react";
import logo from './logo.svg'
import './App.css'
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false)
  const [orderAmount,setOrderAmount] = useState(false)
  const [orders, setOrders] = useState([])
  async function fetchOrders() {
    const { data } = await axios.get('/list-orders')
    setOrders(data)
  }

  useEffect(() => {
    fetchOrders()
  },[])
  function loadRazorpay() {
    let script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
  }
  script.onerror = async () => {
    alert("Razorpay SDK failed to load. Are you online?")
  };
  script.onload = async () => {
    try {
      setLoading(true);
      const result = await axios.post("/create-order", {
        amount: orderAmount + "00"
      });
      const { amount, id, order_id, currency } = result.data
      const {
        data: { key: razorpay },
      } = axios.get(`get-razor-key`);
      const options = {
        key: razorpayKey,
        amount: amount.toString(),
        currency: currency,
        name: "example name",
        description: "example description ",
        order_id: order_id,
        handler: async function (res) {
          const result = await axios.post("/pay-order", {
            amount: amount,
            razorpayPaymentId: res.razorpay_payment_id,
            razorpayOrderId: res.razorpay_order_id,
            razorpaySignature: res.razorpay_signature,
          });
          alert(result.data.msg);
          fetchOrders();
        },
        prefill: {
          name: "Ajay",
          email: "ajay@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      setLoading(false)
      const paymentObject = new window.Razorpay(options)
    } catch (error) {
      alert(err);
      setLoading(false)
    }
    document.body.appendChild(script)
  }
  return (
    <div className="App">
      <h1>Razorpay Implimantation Demo</h1>
      <hr />
      <h3>Demo Order</h3>
      <label htmlFor="">
        Amount : { }
        <input type="number" placeholder="INR" value={orderAmount}
          onChange={(e)=>setOrderAmount(e.target.value)}
        />
      </label>
        <button disabled={loading} onClick={loadRazorpay}>Razorpay</button>
      {loading && <div>Loading...</div>}
      <div className="list-orders">
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>AMOUNT</th>
              <th>ISPAID</th>
              <th>RAZORPAY</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(elem => {
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elemamount/100}</td>
                  <td>{elem.isPaid}</td>
                  <td>{elem.razorpay.paymentId}</td>
                </tr>;
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App

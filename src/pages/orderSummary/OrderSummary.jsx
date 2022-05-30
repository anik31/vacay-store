import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context";
import "./orderSummary.css";

export function OrderSummary() {
  const {order: { amount, paymentId, orderId, delivery, products }} = useCart();

  return (
    <>
      {paymentId ? (
        <>
          <h2 className="page-title">Order Summary</h2>
          <div className="summary-container card card-horizontal">
              <div className="summary-left">
                <h3>Order Confirmed</h3>
                <h4>
                  Order Id : <span>{orderId}</span>
                </h4>
                <h4>
                  Payment Id : <span>{paymentId}</span>
                </h4>
                <h4>
                  Amount Paid : <span>Rs. {amount}</span>
                </h4>
                <h4>Order will be delivered to :</h4>
                <div>
                  <span className="text-sm">{delivery.name}</span>
                  <div className="text-sm text-gray">
                    <p>{delivery.street}, {delivery.city}</p>
                    <p>{delivery.state} - {delivery.pincode}</p>
                  </div>
                </div>
              </div>
              <div className="summary-right">
                {products.map(({ _id,image, title, price, qty }) => (
                    <div className="card card-horizontal" key={_id}>
                      <img className="img-responsive" src={image.src} alt={image.alt} />
                      <div className="summary-product-content">
                        <h4>{title}</h4>
                        <div>
                          <p>Total Quantity : {qty}</p>
                          <p>Price : Rs. {price}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
        </>
      ) : (
        <>
          <h3 className="page-title">You haven't placed any order.</h3>
          <Link to="/products" className="btn btn-primary btn-order">Shop Now</Link>
        </>
      )}
    </>
  );
}
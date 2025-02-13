import React, { FC } from 'react';
import './orders.scss';
import {  useGetOrders } from '../../utils/api';



const Orders:FC = () => {

  const user =  localStorage.getItem('currentUser')


  const currentUser = user ?  JSON.parse(user) : null;

  const { data } = useGetOrders();
  


  return (
    <div className='orders'>
        <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th>Contact</th>
          </tr>

         {data?.map((d: any) => (
          <tr key={d._id}>
              <td>
                <img
                  className="image"
                  src={d.img || '/img//noavatar.jpg'}
                  alt=""
                />
              </td>
              <td style={{ textTransform: 'capitalize' }}>{d?.title}</td>
              <td>{d?.price}<sup>99</sup></td>
              <td>Maria Anders</td>
              <td>
                <img className="message" src="./img/message.png" alt="" />
              </td>
            </tr>
         )) 
          }
        </table>
      </div>
    </div>
  )
}

export default Orders

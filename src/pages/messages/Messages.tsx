import React from 'react';
import { Link } from "react-router-dom";
import './messages.scss';
import { useGetConversation, useReadConversation } from '../../utils/api';
import moment from 'moment';



const Messages = () => {

  const currentUser = localStorage.getItem('currentUser')

  const user = currentUser ?  JSON.parse(currentUser) : null;

  const { data } = useGetConversation();

  const mutation = useReadConversation();

  const handleRead = (id: string) => {
    mutation.mutate(id)
  }


  return (
    <div className='messages'>
        <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{user?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          { data?.map((d: any) => (
            <tr className={`${(user.isSeller && !d.readBySeller) || (!user.isSeller && !d.readByBuyer)}` && 'active'} key={d.id}>
              <td>{user.isSeller ? d.buyerId : d.sellerId}
              </td>
              
              <td>
                <Link to={`/message/${d.id}`} className="link">
                  {d?.lastMessage?.substring(0, 100)}...
                </Link>
              </td>
              <td>{moment(d.updatedAt).fromNow()}</td>
              <td>
                {((user.isSeller && !d.readBySeller) || (!user.isSeller && !d.readByBuyer)) && (
                  <button onClick={() => handleRead(d.id)}>Mark as Read</button>
                )}
              </td>
            </tr>
          ))
          }
        </table>
      </div>
    </div>
  )
}

export default Messages;

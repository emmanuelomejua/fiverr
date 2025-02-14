import React, { FC } from 'react';
import { Link } from "react-router-dom";
import './messages.scss';
import { useGetConversation } from '../../utils/api';
import moment from 'moment';



const Messages: FC = () => {

  const currentUser = localStorage.getItem('currentUser')

  const user = currentUser ?  JSON.parse(currentUser) : null;

  const { data } = useGetConversation();


  return (
    <div className='messages'>
        <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{user.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          { data?.map((d: any) => (
            <tr className="active">
              <td>Charley Sharp</td>
              <td>
                <Link to="/message/123" className="link">
                  {d?.lastMessage?.substring(0, 100)}...
                </Link>
              </td>
              <td>{moment(d.updatedAt).fromNow()}</td>
              <td>
                <button>Mark as Read</button>
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

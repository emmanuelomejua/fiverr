import React, { FormEvent } from 'react';
import './message.scss';
import { Link, useParams } from "react-router-dom";
import { useGetMsg, useMsgMutation } from '../../utils/api';



const Message = () => {

  const { id } = useParams();

  const { data, isPending, error } = useGetMsg(id)

  const mutation = useMsgMutation();


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement;
    const message = target[0] as HTMLTextAreaElement

    if (!id) return; 

    mutation.mutate({
      conversationId: id,
      desc:  message?.value,
    })
  }


  return (
    <div className='message'>
            <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> 
        </span>
        <div className="messages">

        { isPending ? 'Loading...': error ? 'Something went wrong' :
        data.map((d: any) => (
          <div className="item" key={d._id}>
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>{d.desc}</p>
          </div>
        ))}

        </div>
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea typeof='text' placeholder='write a message' />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Message;

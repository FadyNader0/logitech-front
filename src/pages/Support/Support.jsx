import { useEffect, useState } from "react";
import "./Support.css";
import { useSelector , useDispatch} from 'react-redux'
import {getAllMessages} from "../../utilitas/getMessagesFunction";
import {editNumberMessagesInDb} from "../../utilitas/editNumberMessagesInDb";
import {setIsNew} from "../../features/Messages";

export default function Support() {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const userData = useSelector(state => state.userSlice.info);
  const userID = userData?.id;



  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), sender: "user", text: newMessage },
    ]);
    setNewMessage("");
    console.log("Message sent:", messages);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // يمنع السطر الجديد
      sendMessage();
    }
  };



  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const msgs = await getAllMessages(userID);
        setMessages(msgs || []);
        const newDataUser={
            field_5553917: msgs.length, 
        }
        await editNumberMessagesInDb(userID , newDataUser);
        dispatch(setIsNew(false));
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    const interval = setInterval(fetchMessages, 5000); 

    return () => clearInterval(interval); 
  }, []);



  return (
    <div className="chat-wrapper">
      <div className="chat-container" data-aos="zoom-in">
        {/* Header */}
        <div className="chat-header" data-aos="fade-down" data-aos-delay="1000">
          <h2>Support</h2>
          <span className="status text-xxlg">Online</span>
        </div>

        {/* Messages */}
        <div className="chat-messages">
       {messages.length === 0 ? (
          <p className="no-messages">No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={msg.id}
              className={`message-bubble ${
                msg?.sender?.value === "user" ? "user" : "admin"
              }`}
              // data-aos={msg?.sender?.value ? "fade-left" : "fade-right"}
              data-aos-delay={index * 200}
            >
              {msg.message}
            </div>
          ))
        )}
        </div>

        {/* Input */}
        <div className="chat-input">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import "./Support.css";
import { useSelector , useDispatch} from 'react-redux'
import {getAllMessages} from "../../utilitas/getMessagesFunction";
import {editNumberMessagesInDb} from "../../utilitas/editNumberMessagesInDb";
import {setIsNew} from "../../features/Messages";
import Loader from "../../components/LoaderLogin/LoaderLogin";
import NavInAnotherPage from '../../components/NavInAnotherPage/NavInAnotherPage';
import {addMessage} from "../../utilitas/addMessage";

export default function Support() {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const userData = useSelector(state => state.userSlice.info);
  const userID = userData?.id;



  const sendMessage =async () => {
    if (!newMessage.trim()) return;
    const newMessageUSer = {
            ID: 1,
            customer: [userID],
            sender: "user",
            message: newMessage,
    };
    await addMessage(newMessageUSer);
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
      }finally{
        setLoading(false);
        
      }
    };

    fetchMessages();

    const interval = setInterval(fetchMessages, 5000); 

    return () => clearInterval(interval); 
  }, [userID, dispatch , newMessage]);


  useEffect(() => {
    const sendWelcomeMessage = async () => {
      const msgs = await getAllMessages(userID);
      if (!msgs || msgs.length === 0) {
          const welcomeMessage = {
            ID: 1,
            customer: [userID],
            sender: "admin",
            message: "Hello 👋 How can I help you?",
          };
          await addMessage(welcomeMessage);
          setMessages([welcomeMessage]);
      }
    };
    sendWelcomeMessage();
  }, []);  




  return (
    <>
      <NavInAnotherPage />
      <div className="chat-wrapper">
        <div className="chat-container" data-aos="zoom-in">
          {/* Header */}
          <div className="chat-header" data-aos="fade-down" data-aos-delay="1000">
            <h2>Support</h2>
            <span className="status text-xxlg">Online</span>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {loading === true ? (
              <>
                <Loader />
              </>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.order}
                    className={`message-bubble ${
                      msg?.sender?.value === "user" ? "user" : "admin"
                    }`}
                    data-aos={msg?.sender?.value=== "user" ? "fade-left" : "fade-right"}
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
    </>
  );
}

import {ChatEngine} from 'react-chat-engine'


const ChatsPage = (props) => {
  return (
    <div className="background">
      <ChatEngine
        publicKey={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        userName={props.user.username}
        userSecret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;
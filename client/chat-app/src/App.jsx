import ChatInput from './components/ChatInput';
import MessageContainer from './components/MessageContainer';
import Sidebar from './components/Sidebar';
import UserHeader from './components/UserHeader';
import './index.css';

function App() {
    return (
        <>
            <main>
              <div className="user_sidebar">
                <Sidebar />
              </div>
              <div className="chat_box">
                <MessageContainer />
              </div>
            </main>
        </>
    );
}

export default App;

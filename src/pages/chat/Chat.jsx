import Search from "../../components/home/search/search";
import "./chat.css";
import chatpic from "../chat/chatpic.png";
import chatpro from "../chat/chatpropic.png";

export default function Chat() {
  return (
    <div className="chat">
      <Search />

      <span style={{ color: "#7A7A7A" }} className="pl-1">
        Chat
      </span>

      <div className="card card-outline-secondary">
        {/* body */}
        <div>
          {/* channel list */}
          <h4 className="pt-3 pl-3 border-bottom">Chat with Customer</h4>
          <div className="row">
            <div className="col-4">
              <div className="channel-list rounded ">
                <span className="chat-new-conservation-btn">
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>
                  <span>New Conservation</span>
                </span>
                <br />
                <br />

                {/* channel list item 1 */}
                <div className="channel-list-item  ">
                  <div className="channel-list-sub-item">
                    <img src={chatpic} alt="" />
                    <div>
                      <h5>john Doe</h5>
                      <p>johndoe@gmail.com</p>
                    </div>
                  </div>
                  <span>1 minute ago</span>
                </div>

                {/* channel list item 2 */}
                <div className="channel-list-item pt-2 ">
                  <div className="channel-list-sub-item">
                    <img src={chatpic} alt="" />
                    <div>
                      <h5>john Doe</h5>
                      <p>johndoe@gmail.com</p>
                    </div>
                  </div>
                  <span>1 minute ago</span>
                </div>

                {/* channel list item 3 */}
                <div className="channel-list-item pt-2 ">
                  <div className="channel-list-sub-item">
                    <img src={chatpic} alt="" />
                    <div>
                      <h5>john Doe</h5>
                      <p>johndoe@gmail.com</p>
                    </div>
                  </div>
                  <span>1 minute ago</span>
                </div>
                {/* channel list item 4 */}
                <div className="channel-list-item pt-2 ">
                  <div className="channel-list-sub-item">
                    <img src={chatpic} alt="" />
                    <div>
                      <h5>john Doe</h5>
                      <p>johndoe@gmail.com</p>
                    </div>
                  </div>
                  <span>1 minute ago</span>
                </div>
              </div>
            </div>
            {/* channel content */}
            <div className="col-8">
              <div className="channel-content-area">
                <div className="channel-content-header">
                  <div className="channel-content-header-left">
                    <img src={chatpro} alt="" />
                    <div>
                      {" "}
                      <h5>Shailnay Cordon</h5>
                      <p>typing...</p>
                    </div>
                  </div>
                  <div>
                    <i class="fa fa-phone " aria-hidden="true"></i>
                    <i
                      class="fa fa-ellipsis-v pl-3 pr-3"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* chat between customer and artist */}
          <h4 className="pt-3 pl-3 ">chat between customer and artist</h4>
        </div>
      </div>
    </div>
  );
}

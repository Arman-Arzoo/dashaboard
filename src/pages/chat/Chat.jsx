import Search from "../../components/home/search/search";
import "./chat.css";
import chatpic from "../chat/chatpic.png";

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
          <div className="row">
            <div className="col-5">
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
            <div>channel content</div>
          </div>
        </div>
      </div>
    </div>
  );
}

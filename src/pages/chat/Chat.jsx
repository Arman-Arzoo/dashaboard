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
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  <span>New Conservation</span>
                </span>
                <br />
                <br />

                {/* channel list item 1 */}
                <div className="channel-list-item bg-light ">
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
                    <i className="fa fa-phone " aria-hidden="true"></i>
                    <i
                      className="fa fa-ellipsis-v pl-3 pr-3"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                {/* chatting start  user */}
                <div className="chatting-text-with-profile">
                  <img src={chatpro} alt="" />
                  <div>
                    <h6>Wow, this is really epic</h6>
                    <p>1 minute ago</p>
                  </div>
                </div>
                {/* chatting start communicator */}
                <div className="chatting-text-with-profile cummunicator-chatting">
                  <div>
                    <h6>I went there yesterday</h6>
                    <p>1 minute ago</p>
                  </div>
                  <img src={chatpro} alt="" />
                </div>

                {/* chatting start  user */}
                <div className="chatting-text-with-profile">
                  <img src={chatpro} alt="" />
                  <div>
                    <h6>I hope it goes well.</h6>
                    <p>1 minute ago</p>
                  </div>
                </div>

                {/* typing box */}
                <div>
                  <div className="input-group">
                    <div className="input-group-append">
                      <span className="input-group-text attach_btn">
                        <i className="fa fa-paperclip" aria-hidden="true"></i>
                      </span>
                    </div>
                    <textarea
                      name=""
                      className="form-control type_msg"
                      placeholder="Type your message..."
                    ></textarea>
                    <div className="input-group-append">
                      <span className="input-group-text send_btn">
                        <i
                          className="fa fa-location-arrow"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div>{/* serach box and write message goes here */}</div>
              </div>
            </div>
          </div>
          {/* chat between customer and artist */}
          <h4 className="pt-3 pl-3 ">chat between customer and artist</h4>
          <div className="row">
            <div className="col-5">
              {/* chat b/w cus to art div */}
              <div className="cus-to-art p-3">
                {/* chatting item */}
                <div>
                  {/* chating item 1 */}
                  <div className="chatting-between-cus-art">
                    <img src={chatpro} alt="" />
                    <div>
                      <h6>Artist : Shailny Cordon</h6>
                      <p>Lorem ipsum set amit</p>
                    </div>
                  </div>
                  {/* line between cus to art */}
                  <div className="line-cus-to-art"></div>
                  {/* chatting item 2 */}
                  <div className="chatting-between-cus-art chat-item-2">
                    <img src={chatpro} alt="" />
                    <div>
                      <h6>Artist : Shailny Cordon</h6>
                      <p>Lorem ipsum set amit</p>
                    </div>
                  </div>
                </div>
                <p className="cus-to-art-time">1 minute ago</p>
              </div>

              {/* chat b/w cus to art div */}
              <div className="cus-to-art p-3">
                {/* chatting item */}
                <div>
                  {/* chating item 1 */}
                  <div className="chatting-between-cus-art">
                    <img src={chatpro} alt="" />
                    <div>
                      <h6>Artist : Shailny Cordon</h6>
                      <p>Lorem ipsum set amit</p>
                    </div>
                  </div>
                  {/* line between cus to art */}
                  <div className="line-cus-to-art"></div>
                  {/* chatting item 2 */}
                  <div className="chatting-between-cus-art chat-item-2">
                    <img src={chatpro} alt="" />
                    <div>
                      <h6>Artist : Shailny Cordon</h6>
                      <p>Lorem ipsum set amit</p>
                    </div>
                  </div>
                </div>
                <p className="cus-to-art-time">Yesterday</p>
              </div>

              {/* chat b/w cus to art div */}
              <div className="cus-to-art p-3">
                {/* chatting item */}
                <div>
                  {/* chating item 1 */}
                  <div className="chatting-between-cus-art">
                    <img src={chatpro} alt="" />
                    <div>
                      <h6>Artist : Shailny Cordon</h6>
                      <p>Lorem ipsum set amit</p>
                    </div>
                  </div>
                  {/* line between cus to art */}
                  <div className="line-cus-to-art"></div>
                  {/* chatting item 2 */}
                  <div className="chatting-between-cus-art chat-item-2">
                    <img src={chatpro} alt="" />
                    <div>
                      <h6>Artist : Shailny Cordon</h6>
                      <p>Lorem ipsum set amit</p>
                    </div>
                  </div>
                </div>
                <p className="cus-to-art-time">Yesterday</p>
              </div>
            </div>
            <div className="col-7">
              <div>
                <div className="cus-to-art-chat-detail pr-4">
                  <div className="cus-to-art-chat-detail-profile">
                    <div className="cus-to-art-chat-detail-data">
                      <img src={chatpro} alt="" />
                      <h6>shailnay</h6>
                    </div>
                    <div className="line-cus-to-art-detail"></div>
                    <div className="cus-to-art-chat-detail-data  cus-to-art-adject ">
                      <img src={chatpro} alt="" />
                      <h6>shailnay</h6>
                    </div>
                  </div>
                  <p>1 minute ago</p>
                </div>
                {/* chatting user */}
                <div className="chatting-text-with-profile">
                  <img src={chatpro} alt="" />
                  <div>
                    <h6>Lorem ipsum set amit consectetur adipiscing elit</h6>
                    <p>1 minute ago</p>
                  </div>
                </div>
                {/* chatting communicator */}
                <div className="chatting-text-with-profile cummunicator-detail-chatting">
                  <div>
                    <h6>Lorem ipsum set amit</h6>
                    <p>1 minute ago</p>
                  </div>
                  <img src={chatpro} alt="" />
                </div>

                {/* chatting user */}
                <div className="chatting-text-with-profile">
                  <img src={chatpro} alt="" />
                  <div>
                    <h6>I hope it goes well.</h6>
                    <p>1 minute ago</p>
                  </div>
                </div>
                {/* chatting communicator */}
                <div className="chatting-text-with-profile cummunicator-detail-chatting">
                  <div>
                    <h6>I went there yesterday</h6>
                    <p>1 minute ago</p>
                  </div>
                  <img src={chatpro} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

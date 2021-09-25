import React, { Component } from "react";

class CloneApp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      //header start
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <>
        <>
          <div className="header">
            <div className="header_left">
              <span className="material-icons">menu</span>
              <img
                src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                alt="!"
              />
            </div>
            <div className="header_middle">
              <span className="material-icons">search</span>
              <input type="text" placeholder="Search Mail" />
              <span className="material-icons">manage_search</span>
            </div>
            <div className="header_right">
              <span className="material-icons">help_outline</span>
              <span className="material-icons">settings</span>
              <span className="material-icons">apps</span>
              <img
                src="https://lh3.googleusercontent.com/ogw/ADea4I6ojrPHTuygzbeOMGR4TD-nD8mizT9Ds38BHRAm=s32-c-mo"
                alt="!"
              />
            </div>
          </div>
        </>

        <div className="main_body">
          {/* side bar starts */}
          <div className="sidebar">
            <button className="sidebar_compose">
              <img
                src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
                alt="!"
              />{" "}
              Compose
            </button>
            <div className="sidebaroption sidebaroption_active">
              <span className="material-icons">inbox</span>Inbox
            </div>
            <div className="sidebaroption">
              <span className="material-icons">star</span>Starred
            </div>
            <div className="sidebaroption">
              <span className="material-icons">timer</span>Snoozed
            </div>
            <div className="sidebaroption">
              <span className="material-icons">send</span>Sent
            </div>
            <div className="sidebaroption">
              <span className="material-icons">insert_drive_file</span>Drafts
            </div>
            <div className="sidebaroption">
              <span className="material-icons">label</span>Shan
            </div>
            <div className="sidebaroption">
              <span className="material-icons">expand_more</span>More
            </div>
            <div className="underlineoption">__________________________</div>
            <div className="sidebaroption">
              <span class="material-icons">g_translate</span>Meet
            </div>
            <div className="sidebaroption">
              <span class="material-icons">videocam</span>New meeting
            </div>
            <div className="sidebaroption">
              <span className="material-icons">keyboard</span>Join a Meeting
            </div>
            <div className="underlineoption_2">__________________________</div>
          </div>

          <div className="emailList">
            <div className="emailList__settings">
              <div className="emailList__settingsLeft">
                <input type="checkbox" />
                <span className="material-icons">arrow_drop_down</span>
                <span className="material-icons">refresh</span>
                <span className="material-icons">more_vert</span>
              </div>
              <div className="emailList__settingsRight">
                <span className="material-icons_p"> 1 - 50 of 1380 </span>
                <span className="material-icons"> chevron_left </span>
                <span className="material-icons"> chevron_right </span>
              </div>
            </div>

            <div className="emailList_sections">
              <div className="section">
                <span className="material-icons section_selected"> inbox </span>
                <h4>Primary</h4>
              </div>

              <div className="section">
                <span className="material-icons"> people </span>
                <h4>Updates</h4>
              </div>

              <div className="section">
                <span className="material-icons"> local_offer </span>
                <h4>Promotions</h4>
              </div>
            </div>

            <div className="emailList_row_unread">
              <div className="emailList_row_options">
                <input type="checkbox" />
                <span className="material-icons"> star_border </span>
                <span className="material-icons"> label_important </span>
              </div>
              <h3 className="emailList_row_title">Divya s</h3>
              <div className="emailList_row_message">
                <h4>
                  {" "}
                  System Design session on Monday (20/09/2021) & Tuesday
                  (21/09/2021) - B241 WD
                  <span className="emailList_row_description">
                    - Dear Zen Students, Tomorrow (27/09/2021) & Tuesday
                    (28/09/2021) you will have our last topic System Design from
                    3 PM - 5 PM
                  </span>
                </h4>
              </div>
              <p className="emailList_row_time">SEP 24</p>
            </div>

            <div className="emailList_list">
              <div className="emailList_row_unread">
                <div className="emailList_row_options">
                  <input type="checkbox" />
                  <span className="material-icons"> star_border </span>
                  <span className="material-icons"> label_important </span>
                </div>
                <h3 className="emailList_row_title">Quora Digest</h3>
                <div className="emailList_row_message">
                  <h4>
                    Rahul Dravid also played slow in test cricket like Pujara.
                    Why is Pujara only critici...?
                    <span className="emailList_row_description">
                      - there is a lot of smimilarities between dravid and
                      Pujara and both of them played a similar cricket
                    </span>
                  </h4>
                </div>
                <p className="emailList_row_time">SEP 24</p>
              </div>

              <div className="emailList_row_unread">
                <div className="emailList_row_options">
                  <input type="checkbox" />
                  <span className="material-icons"> star_border </span>
                  <span className="material-icons"> label_important </span>
                </div>
                <h3 className="emailList_row_title">LinkedIn</h3>
                <div className="emailList_row_message">
                  <h4>
                    2 new jobs for 'user experience designer'
                    <span className="emailList_row_description">
                      - 2 new jobs in Chennai, Tamil Nadu, India match your
                      preferences.
                    </span>
                  </h4>
                </div>
                <p className="emailList_row_time">SEP 24</p>
              </div>

              <div class="Unread">
                <div className="emailList_row">
                  <div className="emailList_row_options">
                    <input type="checkbox" />
                    <span className="material-icons"> star_border </span>
                    <span className="material-icons"> label_important </span>
                  </div>
                  <h3 className="emailList_row_title">GUVI GEEKS</h3>
                  <div className="emailList_row_message">
                    <h4>
                      Freedom to pick Python IIT-M Course in English/தமிழ்!.
                      <span className="emailList_row_description">
                        - GUVI's vernacular approach enables you to opt for the
                        ‘medium of instructions’ in Tamil, Telugu, Hindi, and
                        English.
                      </span>
                    </h4>
                  </div>
                  <p className="emailList_row_time">SEP 23</p>
                </div>

                <div className="emailList_row">
                  <div className="emailList_row_options">
                    <input type="checkbox" />
                    <span className="material-icons"> star_border </span>
                    <span className="material-icons"> label_important </span>
                  </div>
                  <h3 className="emailList_row_title">Quora </h3>
                  <div className="emailList_row_message">
                    <h4>
                      More related to "What are some ways to add a URL to an
                      image?"
                      <span className="emailList_row_description">
                        - You probably mean you have a local JPG file and you
                        want to create it into a universal URL.
                      </span>
                    </h4>
                  </div>
                  <p className="emailList_row_time">SEP 23</p>
                </div>

                <div className="emailList_row">
                  <div className="emailList_row_options">
                    <input type="checkbox" />
                    <span className="material-icons"> star_border </span>
                    <span className="material-icons"> label_important </span>
                  </div>
                  <h3 className="emailList_row_title">CodePen </h3>
                  <div className="emailList_row_message">
                    <h4>
                      Glowing Text, Flying Messages, and a CSS Luxury Car
                      <span className="emailList_row_description">
                        - This week, the CodePen community crafts beautiful
                        backlit text, takes flight with a customizable sky
                        banner, and takes a ride in a slick CSS Audi A7.
                      </span>
                    </h4>
                  </div>
                  <p className="emailList_row_time">SEP 23</p>
                </div>

                <div className="emailList_row">
                  <div className="emailList_row_options">
                    <input type="checkbox" />
                    <span className="material-icons"> star_border </span>
                    <span className="material-icons"> label_important </span>
                  </div>
                  <h3 className="emailList_row_title">Grammarly </h3>
                  <div className="emailList_row_message">
                    <h4>
                      Are You in Love with Grammarly on Chrome? Please Let Us
                      Know!
                      <span className="emailList_row_description">
                        - We hope that Grammarly on Chrome has rocked your world
                        (grammatically speaking).
                      </span>
                    </h4>
                  </div>
                  <p className="emailList_row_time">SEP 23</p>
                </div>

                <div className="emailList_row">
                  <div className="emailList_row_options">
                    <input type="checkbox" />
                    <span className="material-icons"> star_border </span>
                    <span className="material-icons"> label_important </span>
                  </div>
                  <h3 className="emailList_row_title">The Bublup Team</h3>
                  <div className="emailList_row_message">
                    <h4>
                      Help us make Bublup even better
                      <span className="emailList_row_description">
                        - Do you have a few minutes to spare for a brief survey
                        to help make Bublup better? Your opinion matters; we
                        want to hear what you love, your wishlist, or what you
                        think needs improvement.
                      </span>
                    </h4>
                  </div>
                  <p className="emailList_row_time">SEP 22</p>
                </div>

                <div className="emailList_row">
                  <div className="emailList_row_options">
                    <input type="checkbox" />
                    <span className="material-icons"> star_border </span>
                    <span className="material-icons"> label_important </span>
                  </div>
                  <h3 className="emailList_row_title">lavanya.srinivas</h3>
                  <div className="emailList_row_message">
                    <h4>
                      Interview Call Letter - Thinksynq
                      <span className="emailList_row_description">
                        - Dear Candidate, Congratulations!!! Your Profile has
                        been shortlisted for role of Executive - Customer
                        Support, We appreciate your interest in Thinksynq
                        solutions Pvt Ltd and this mail is in continuation to
                        our telephonic discussion regarding a suitable
                        opportunity.
                      </span>
                    </h4>
                  </div>
                  <p className="emailList_row_time">SEP 21</p>
                </div>

                <div className="emailList_row">
                  <div className="emailList_row_options">
                    <input type="checkbox" />
                    <span className="material-icons"> star_border </span>
                    <span className="material-icons"> label_important </span>
                  </div>
                  <h3 className="emailList_row_title">Imgur </h3>
                  <div className="emailList_row_message">
                    <h4>
                      Imgur Community 101: Class is in session, Shanjayvarun!
                      <span className="emailList_row_description">
                        - This email was sent by Imgur, Inc, 268 Bush St. #3133,
                        San Francisco, CA 94104
                      </span>
                    </h4>
                  </div>
                  <p className="emailList_row_time">SEP 20</p>
                </div>

                <div className="emailList_row">
                  <div className="emailList_row_options">
                    <input type="checkbox" />
                    <span className="material-icons"> star_border </span>
                    <span className="material-icons"> label_important </span>
                  </div>
                  <h3 className="emailList_row_title">Naukri </h3>
                  <div className="emailList_row_message">
                    <h4>
                      20K+ jobseekers are shining before recruiters, see how!
                      <span className="emailList_row_description">
                        - Top companies prefer candidates with a Video
                        Profile,Explore Video Profile,Exclusively on Naukri app
                      </span>
                    </h4>
                  </div>
                  <p className="emailList_row_time">SEP 20</p>
                </div>

                <div className="emailList_row">
                  <div className="emailList_row_options">
                    <input type="checkbox" />
                    <span className="material-icons"> star_border </span>
                    <span className="material-icons"> label_important </span>
                  </div>
                  <h3 className="emailList_row_title">Naukri </h3>
                  <div className="emailList_row_message">
                    <h4>
                      20K+ jobseekers are shining before recruiters, see how!
                      <span className="emailList_row_description">
                        - Top companies prefer candidates with a Video
                        Profile,Explore Video Profile,Exclusively on Naukri app
                      </span>
                    </h4>
                  </div>
                  <p className="emailList_row_time">SEP 20</p>
                </div>

                <div className="emailList_row">
                  <div className="emailList_row_options">
                    <input type="checkbox" />
                    <span className="material-icons"> star_border </span>
                    <span className="material-icons"> label_important </span>
                  </div>
                  <h3 className="emailList_row_title">Naukri </h3>
                  <div className="emailList_row_message">
                    <h4>
                      20K+ jobseekers are shining before recruiters, see how!
                      <span className="emailList_row_description">
                        - Top companies prefer candidates with a Video
                        Profile,Explore Video Profile,Exclusively on Naukri app
                      </span>
                    </h4>
                  </div>
                  <p className="emailList_row_time">SEP 20</p>
                </div>

                <div className="emailList_row">
                  <div className="emailList_row_options">
                    <input type="checkbox" />
                    <span className="material-icons"> star_border </span>
                    <span className="material-icons"> label_important </span>
                  </div>
                  <h3 className="emailList_row_title">Naukri </h3>
                  <div className="emailList_row_message">
                    <h4>
                      20K+ jobseekers are shining before recruiters, see how!
                      <span className="emailList_row_description">
                        - Top companies prefer candidates with a Video
                        Profile,Explore Video Profile,Exclusively on Naukri app
                      </span>
                    </h4>
                  </div>
                  <p className="emailList_row_time">SEP 20</p>
                </div>
              </div>
            </div>
          </div>

          <div className="header_down">
            <div className="header_icons">
              <img
                src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
                alt="!"
              />
            </div>

            <div className="header_icons">
              <img
                src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
                alt="!"
              />
            </div>

            <div className="header_icons">
              <img
                src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png"
                alt="!"
              />
            </div>
            <div className="header_icons">
              <img
                src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png"
                alt="!"
              />
            </div>
          </div>
        </div>
      </>

      //main body ends
    );
  }
}

export default CloneApp;

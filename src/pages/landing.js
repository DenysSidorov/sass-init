import React, {Fragment} from 'react';

const Landing = () => {
  return (
    <Fragment>
      <section className="rd_head" style={{backgroundImage: "url('static-img/welcome.jpg')"}}>
        <div className="rd_head__content">
          <h3 className="rd_head__content_title">

            <div className="rd_head__content_title_sub1">Amazing social media platform</div>
            <div className="rd_head__content_title_sub2">Publish + Engage + Measure</div>
          </h3>
          <div className="rd_head__content_desc">
            <h2 className="rd_head__content_desc_sub1">Facebook, Customer Chat, Instagram & Twitter</h2>
            <h2 className="rd_head__content_desc_sub2">ONE platform for everything</h2>
          </div>
          <div className="rd_head__content_buttonWrapper">
            <div className="rd_head__content_button">
              BOOK DEMO
            </div>
          </div>
        </div>
      </section>
      <section className="rd_allInOne">
        <div className="rd_allInOne_title">
          All social media in ONE place
        </div>
        <div className="rd_allInOne_blocks">

          <div className="rd_allInOne_block">
            <div className="rd_allInOne_block_img" style={{backgroundImage: "url('static-img/fb.png')"}}>
            </div>
            <div className="rd_allInOne_block_desc">
              See all your posts, comments, messenger messages & ads.
            </div>
          </div>

          <div className="rd_allInOne_block">
            <div className="rd_allInOne_block_img" style={{backgroundImage: "url('static-img/chat.png')"}}>
            </div>
            <div className="rd_allInOne_block_desc">
              Add a chat to your company's website. Facebook integrated.
            </div>
          </div>

          <div className="rd_allInOne_block">
            <div className="rd_allInOne_block_img" style={{backgroundImage: "url('static-img/inst.png')"}}>
            </div>
            <div className="rd_allInOne_block_desc">
              See all your instagram posts and comments.
            </div>
          </div>

          <div className="rd_allInOne_block">
            <div className="rd_allInOne_block_img" style={{backgroundImage: "url('static-img/tw.png')"}}>
            </div>
            <div className="rd_allInOne_block_desc">
              See all your tweets, mentions & direct messages.
            </div>
          </div>


        </div>
      </section>

      <section className="rd_tools">
        <div className="rd_tools_title">
          Publish > Engage > Measure
        </div>
        <div className="rd_tools_blocks">

          <div className="rd_tools_block">
            <div className="rd_tools_block_img">
              <img src="static-img/target.png"/>
            </div>
            <div className="rd_tools_blockTitle">1. PUBLISH</div>
            <div className="rd_tools_block_desc">Marketing</div>
            <div className="rd_tools_listTitle">- Complete social media calendar</div>
            <div className="rd_tools_listItem">- Create, schedule & publish content</div>
            <div className="rd_tools_listItem">- Approve content from agencies</div>
            <span className="rd_tools_listLink">Read about Publish -></span>
          </div>

          <div className="rd_tools_block">
            <div className="rd_tools_block_img">
              <img src="static-img/conversation.png"/>
            </div>
            <div className="rd_tools_blockTitle">2. ENGAGE</div>
            <div className="rd_tools_block_desc">Customer Service</div>
            <div className="rd_tools_listTitle">- All messages in one inbox</div>
            <div className="rd_tools_listItem">- Assign tickets to team members</div>
            <div className="rd_tools_listItem">- Add notes, tags and search everything</div>
            <span className="rd_tools_listLink">Read about Engage -></span>
          </div>

          <div className="rd_tools_block">
            <div className="rd_tools_block_img">
              <img src="static-img/measure.png"/>
            </div>
            <div className="rd_tools_blockTitle">3. MEASURE</div>
            <div className="rd_tools_block_desc">Statistics</div>
            <div className="rd_tools_listTitle">- Performance statistics in detail</div>
            <div className="rd_tools_listItem">- Measure each team member</div>
            <div className="rd_tools_listItem">- Measure KPI goals & always improve</div>
            <span className="rd_tools_listLink">Read about Measure -></span>
          </div>

        </div>
      </section>

      <section className="rd_about">
        <p className="rd_about_based">Based in Sweden</p>
        <p className="rd_about_link"><a href="d">About RelationDesk</a></p>
        <p className="rd_about_gdpr">GDPR compliance</p>
        <p className="rd_about_contact">Contact RelationDesk to request all information about GDPR compliance</p>
      </section>
      <section className="rd_companies" style={{backgroundImage: "url('static-img/inst.png')"}}>

      </section>
    </Fragment>
  )
}

export default Landing;

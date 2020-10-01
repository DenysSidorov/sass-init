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
      <section className="rd_companies" style={{backgroundImage: "url('static-img/bg2.jpg')"}}>
        <div className="rd_companies_cont">
          <div className="rd_companies_title">We use RelationDesk!</div>
          <div className="rd_companies_img">
            <img src="static-img/companies.png"/>
          </div>
        </div>
      </section>
      <section className="rd_demoBtn">
        <div className="rd_head__content_button">
          BOOK DEMO
        </div>
      </section>
      <section className="rd_productDesc">
        <div className="rd_productDesc_wrapper">
          <div className="rd_productDesc_blockImage">
            <img src="static-img/all.png"/>
          </div>
          <div className="rd_productDesc_blockText">
            <h2 className="rd_productDesc_blockText_title leftPadding18p">ALL YOUR MESSAGES</h2>
            <p className="rd_productDesc_blockText_desc leftPadding18p">All messages from Facebook pages, Twitter
              accounts and
              Instagram
              accounts. Messages instantly shows up in RelationDesk.</p>
            <p className="rd_productDesc_blockText_desc2 leftPadding18p">Manage them all in one place.</p>
          </div>
        </div>
      </section>

      <section className="rd_productDesc">
        <div className="rd_productDesc_wrapper">
          <div className="rd_productDesc_blockText">
            <h2 className="rd_productDesc_blockText_title rightPadding18p">ALL YOUR CUSTOMERS</h2>
            <p className="rd_productDesc_blockText_desc rightPadding18p">Answer all your customers from RelationDesk.
              Work alone or in
              large teams.</p>
            <p className="rd_productDesc_blockText_desc2 rightPadding18p">And easily invite experts to help compose
              great answers.</p>
          </div>
          <div className="rd_productDesc_blockImage">
            <img src="static-img/rd.png"/>
          </div>
        </div>
      </section>


      <section className="rd_productDesc bottomPadding40">
        <div className="rd_productDesc_wrapper">
          <div className="rd_productDesc_blockImage">
            <img src="static-img/measure-all.png"/>
          </div>
          <div className="rd_productDesc_blockText">
            <h2 className="rd_productDesc_blockText_title leftPadding18p">GREAT ANALYTICS</h2>
            <p className="rd_productDesc_blockText_desc leftPadding18p">Know why your team is winning in social media –
              and how to always improve.</p>
          </div>
        </div>
      </section>


      <section className="rd_replies" style={{backgroundImage: "url('static-img/bg3.jpg')"}}>
        <div className="rd_replies_container">
          <h2 className="rd_replies_title">
            We use RelationDesk!
          </h2>
          <div className="rd_replies_content">
            <div className="rd_replies_content_block">
              <div className="rd_replies_content_block_img" style={{backgroundImage: "url('static-img/airlines.png')"}}>
              </div>
              <div className="rd_replies_content_block_title">
                ”RELATIONDESK IS EXACTLY WHAT WE NEED TO MANAGE ALL OUR CUSTOMERS ON FACEBOOK”
              </div>
              <div className="rd_replies_content_block_text">Johan Kristiansson</div>
              <div className="rd_replies_content_block_text">Head of Digital Marketing</div>
              <div className="rd_replies_content_block_comp">SAS Scandinavian Airlines</div>
            </div>

            <div className="rd_replies_content_block">
              <div className="rd_replies_content_block_img" style={{backgroundImage: "url('static-img/swedbank.png')"}}>
              </div>
              <div className="rd_replies_content_block_title">
                ”RELATIONDESK ENABLES US TO DELIVER

                THE FINANCIAL WORLD'S TOP SOCIAL MEDIA CUSTOMER SERVICES.”
              </div>
              <div className="rd_replies_content_block_text">Thomas Brink</div>
              <div className="rd_replies_content_block_text">Social Media Manager</div>
              <div className="rd_replies_content_block_comp">Swedbank</div>
            </div>

          </div>
        </div>

      </section>

      <section className="rd_footer">
        <div className="rd_footer_cont">
          <div className="rd_footer_phone">(+46) 010-1515 051</div>
          <div className="rd_footer_email">Hi@RelationDesk.com</div>
          <div className="rd_footer_buttonWrapper">
            <div className="rd_footer_button">
              BOOK DEMO
            </div>
          </div>
        </div>
      </section>

    </Fragment>
  )
}

export default Landing;

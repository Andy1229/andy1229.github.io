// import React, { Fragment } from "react";
// import { Timeline, Event } from "react-timeline-scribble";

import React, { Fragment } from "react";
import { render } from "react-dom";

import { Timeline, Event } from "react-timeline-scribble";

function Work() {
    return (
        <Fragment>
            <h3>CORE COMPETENCIES</h3>
            <ui className="Text">
                <li> Introducing, demonstrating, selling, and promoting all current and new TeamViewer products
                    to customers and prospects over the phone, live chat, and email.</li>
            </ui>
            <h3>Work Experience</h3>
            <Timeline className="Timeline">
                <Event className="Event" interval={"2021 May – Present"} title={"TeamViewer"} subtitle={"Inside Sales Rep & Korean Translator"}>
                    <ui className="Text">
                        <li> Introducing, demonstrating, selling, and promoting all current and new TeamViewer products
                            to customers and prospects over the phone, live chat, and email.</li>
                        <li> Following up all existing and new customers within expected timeframes to convert enquiries
                            into sales opportunities.</li>
                        <li>Answering user questions related to setup & product functionality in various operating
                            systems (Windows, macOS, Linux, iOS and Android).</li>
                        <li>Promoting and maintaining a high quality, professional, service-oriented company image
                            among customers.</li>
                        <li>Processing any written request from the company’s prospects and customers using our
                            proprietary systems (Ticket system, CRM, ERP, License Tool).</li>
                        <li>Discussing with Team Manager about possible ways to improve our process and system.</li>
                        <li>Updating information and activities into various systems as advised by the Senior or Manager.</li>
                        <li>Translating all TeamViewer Contents in Korean (Website, Brochures, Manuals, Campaigns,
                            Promotions etc.).</li>
                    </ui>
                </Event>
                <Event interval={"2019 June – 2021 May"} title={"Choi’s butcher"} subtitle={"Team Lead Supervisor & Production Associate"}>
                    <ui className="Text">
                        <li>Provided & implemented an annual plan to improve the company.</li>
                        <li>Contributed to build & maintain new or existing customers for B2C & B2B sales.</li>
                        <li>Training existing and new staff for the site safety and machine operation.</li>
                        <li>Training existing and new staff for the site safety and machine operation.</li>
                        <li>Meat quality check & managed the production line for retail sales & wholesale orders.</li>
                        <li>Contributed to develop the social media strategy & implementation for attracting more retail
                            customers.</li>
                        <li>Covered all positions as an all-rounder (serving customers, meat producer by machine,
                            delivery, paper works, office works etc.)</li>
                    </ui>
                </Event>
                <Event interval={"2016 Oct – 2021 May"} title={"Withus Australia"} subtitle={"Developer & Senior Sales Rep"}>
                    <ui className="Text">
                        <li>Researched and compared the bast way of developing company website including E-commerce function.</li>
                        <li>Built, maintained, and updated the company website in a limited budget.</li>
                        <li>Maintained and updated Xero database.</li>
                        <li>Researched the best way of developing the order program used by staff.</li>
                        <li>Researched the suitable marketing strategies and created the implementable plan.</li>
                        <li>Contributed the improvements of internal and external factors.</li>
                        <li>Proactively offered and improved the workflow to save working time and money.</li>
                        <li>Maintained & Built a strong relationship with new or existing customers.</li>
                        <li>Back up different positions (Delivery, stock taking, picker & packer, meeting with new or existing customers for B2B sales, IT operator, warehouse assistant etc).</li>
                    </ui>
                </Event>
                <Event interval={"2020 Apr – 2021 May"} title={"Local Sunday Market"} subtitle={"Casual Seller"}>
                    <ui className="Text">
                        <li>Organizing all fresh items to sell in the market.</li>
                        <li>Building a great relationship with new or regular customers.</li>
                        <li>Interlinking farmers with wholesale companies.</li>
                    </ui>
                </Event>
                <Event interval={"2020 June – 2020 Sep"} title={"AHTS Training & Education "} subtitle={"Network Administrator"}>
                    <ui className="Text">
                        <li>Assisted students to connect to utilities within the campus.</li>
                        <li>Improved the company’s website SEO in Korean.</li>
                        <li>Provided troubleshooting to students and staff.</li>
                        <li>Allocated and archived students from units within eLearning system (Moodle).</li>
                        <li>Participated in Quality Assurance within the student management system (VETtrak).</li>
                        <li>Participated in student documentation management.</li>
                        <li>Provided the orientation to new users (new students or new staff) of Moodle.</li>
                        <li>Participated the software update (Moodle & VETtrak integration plugin).</li>
                        <li>Digitalized the paper version of LLN (Language literacy and numeracy) Test.</li>
                        <li>Created new student database (MS Access).</li>
                        <li>Trained trainers about the zoom meeting software.</li>
                        <li>Supported the student support team to solve the student complaints.</li>
                    </ui>
                </Event>
                <Event interval={"2017 Nov – 2019 June"} title={"Tongil Trading (Gruin Pty Ltd)"} subtitle={"Warehouse Assistant"}>
                    <ui className="Text">
                        <li>Provided customer centered service.</li>
                        <li>Built & Maintained a strong relationship with new and existing customers.</li>
                        <li>Participated to upgrade and maintain in-house computer systems, applications and websites by carrying out a diagnosis, testing, upgrades, repairs, installation of new equipment and maintenance.</li>
                    </ui>
                </Event>
            </Timeline>
        </Fragment>

        // <div class="main-timeline">

        //     {/* <!-- start experience section--> */}
        //     <div class="timeline">
        //         <div class="icon"></div>
        //         <div class="date-content">
        //             <div class="date-outer">
        //                 <span class="date">
        //                     <span class="month">aa</span>
        //                     <span class="year">2021</span>
        //                 </span>
        //             </div>
        //         </div>
        //         <div class="timeline-content">
        //             <h5 class="title">Visual Art &amp; Design</h5>
        //             <p class="description">
        //                 Lorem ipsum dolor sitfinibus efficitur. Praesent dapibus dolor felis, eua ultrices elit molestie.aaaaa     s
        //             </p>
        //         </div>
        //     </div>
        //     {/* <!-- end experience section--> */}

        //     {/* <!-- start experience section--> */}
        //     <div class="timeline">
        //         <div class="icon"></div>
        //         <div class="date-content">
        //             <div class="date-outer">
        //                 <span class="date">
        //                     <span class="month">May</span>
        //                     <span class="year">2021</span>
        //                 </span>
        //             </div>
        //         </div>
        //         <div class="timeline-content">
        //             <h5 class="title">Product Designer</h5>
        //             <p class="description">
        //                 dolor sit amet, consectetur adipiscing elit. Spat. Aem finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
        //             </p>
        //         </div>
        //     </div>
        //     {/* <!-- end experience section--> */}

        // </div>
    )
}

export default Work;

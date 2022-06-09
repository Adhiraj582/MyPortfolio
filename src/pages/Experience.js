import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2023-2026 (future)'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>
            I won't tell my High School, Haven't made there yet, Wait just 1 year 😆
          </h3>
          <p>As of now, no diploma</p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2010 - 2014'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>
            I won't tell my University, Haven't gotten one yet
          </h3>
          <p>Planning For Computer Science</p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

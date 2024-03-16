import "./TimelineItem.scss";

const TimelineItem = ({ project }) => {
  return (
    <div className="timelineItem">
      <div>
        <p className="timelineDate">17 Aug 2024</p>
      </div>
      <div className="timelineBar">
        <div className="timelineCircle"></div>
      </div>
      <div className="timelineContent">
        <h4 className="timelineHeader">Pocobun</h4>
        <p className="timelineDetails">
          Pocobun is an online store that sells all sorts of items for small
          businesses.
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;

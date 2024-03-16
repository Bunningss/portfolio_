import "./Container.scss";

const Container = ({ children }) => {
  return (
    <div className="container default">
      <div className="container_content">{children}</div>
    </div>
  );
};

export default Container;

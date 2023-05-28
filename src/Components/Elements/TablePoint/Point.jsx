const Point = (props) => {
  const { value } = props;
  return <p className="bg-primary py-1 px-3 rounded-sm">{value}</p>;
};

export default Point;

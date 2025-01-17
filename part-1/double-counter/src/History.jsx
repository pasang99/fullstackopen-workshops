const History = ({ history }) => {
  return (
    <div>
      <h3>Click History:</h3>
      <div>{history.length > 0 ? history.join(", ") : "No clicks yet!"}</div>
    </div>
  );
};

export default History;

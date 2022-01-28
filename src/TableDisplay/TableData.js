const tableData = (props) => {
  console.log(props.data);

  const rows = props.data.map((eachData, index) => {
    return (
      <tr key={index}>
        <td>{eachData.name}</td>
        <td>{eachData.job}</td>
        <td>
          <button onClick={() => {props.onDelete(index)}}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default tableData;

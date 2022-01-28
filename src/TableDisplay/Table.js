import TableData from "./TableData";
import './Table.css'

const tableJob = (props) => {
  return (
    <table >
      <thead><tr>
            <th scope="col">Name</th>
            <th scope="col">Job</th>
        </tr></thead>
    

      <TableData data={props.data} onDelete={props.onDelete} />
    </table>
  );
};

export default tableJob;

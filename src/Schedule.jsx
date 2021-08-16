import PropTypes from "prop-types";
import { Fragment } from "react";

function Schedule({ customer, petName, kindOfPet, schedule }) {
  return (
    <Fragment>
      <tr>
        <td>{customer.name}</td>
        <td>{customer.phone}</td>
        <td>{petName}</td>
        <td>{kindOfPet}</td>
        <td>{schedule}</td>
      </tr>
    </Fragment>
  );
}

Schedule.defaultProps = {
  petName: 'Não informado'
}

Schedule.propTypes = {
  customer: PropTypes.object.isRequired,
  petName: PropTypes.string,
  kindOfPet: PropTypes.oneOf(['cat', 'dog']).isRequired,
  schedule: PropTypes.string.isRequired,
};

export default Schedule;
import React from 'react';

const History = () => {
  return (
    <div className="orders">
      <div className="orders__details">
        <div>
          <h4>History</h4>
        </div>
        <div>
          <h6>Transaction of last months</h6>
        </div>
      </div>
      <div className="orders__table">
        <table>
          <tbody>
            <tr>
              <td><img src="" alt="" /></td>
              <td>Car Insurance</td>
              <td>14:10:32 AM</td>
              <td>$350.00</td>
              <td>Complete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;

import { format } from 'date-fns';
import { th } from 'date-fns/locale';

import { getNumberFormat } from '../../utils/stringConvertor';

const BenefitXd = ({ xdList }) => {
  return (
    <div>
      <h3>เงินปันผล</h3>
      {xdList.length > 0 ? (
        <table className="sse-table">
          <thead>
            <tr>
              <th>วันที่ขึ้นเครื่องหมาย</th>
              <th>วันกำหนดรายชื่อผู้ถือหุ้น</th>
              <th>วันจ่ายปันผล</th>
              <th>ประเภท</th>
              <th className="sse-align-right">เงินปันผล(บาท/หุ้น)</th>
              <th>เงินปันผลจาก</th>
            </tr>
          </thead>
          <tbody>
            {xdList.map((item, index) => {
              return (
                <tr key={`${item.xdate}-${index}`}>
                  <td>{format(new Date(item.xdate), 'dd MMM yyyy', { locale: th })}</td>
                  <td>{format(new Date(item.recordDate), 'dd MMM yyyy', { locale: th })}</td>
                  <td>{format(new Date(item.paymentDate), 'dd MMM yyyy', { locale: th })}</td>
                  <td>{item.dividendType}</td>
                  <td className="sse-align-right">{getNumberFormat(item.dividend)}</td>
                  <td>{item.sourceOfDividend}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>
          <h4>ไม่มีข้อมูล</h4>
        </div>
      )}
    </div>
  );
};

export default BenefitXd;

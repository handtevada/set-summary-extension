import { format } from 'date-fns';
import { th } from 'date-fns/locale';

import useData from '../../hooks/useData';
import { SET_BENEFIT } from '../../constants/url';
import { getNumberFormat } from '../../utils/stringConvertor';

const Benefit = ({ symbol }) => {
  const { data } = useData(SET_BENEFIT(symbol));

  if (!data) return 'loading';

  return (
    <div className="sse-section-container">
      <div className="sse-stack">
        <h2>เงินปันผล</h2>
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
            {data
              .filter((item) => item.caType === 'XD')
              .map((item, index) => {
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
      </div>
    </div>
  );
};

export default Benefit;

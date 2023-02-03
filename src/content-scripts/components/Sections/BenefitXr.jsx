import { format } from 'date-fns';
import { th } from 'date-fns/locale';

import { getNumberFormat } from '../../utils/stringConvertor';

const BenefitXr = ({ xrList }) => {
  return (
    <div>
      <h3>เพิ่มทุน</h3>
      {xrList.length > 0 ? (
        <table className="sse-table">
          <thead>
            <tr>
              <th>วันที่ขึ้นเครื่องหมาย</th>
              <th>วันกำหนดรายชื่อผู้ถือหุ้น</th>
              <th>หลักทรัพย์ที่ได้สิทธิ</th>
              <th>ช่วงระยะเวลาจองซื้อ</th>
              <th>อัตราส่วน (เดิม:ใหม่)</th>
              <th>เงื่อนไข</th>
            </tr>
          </thead>
          <tbody>
            {xrList.map((item, index) => {
              return (
                <tr key={`${item.xdate}-${index}`}>
                  <td>{format(new Date(item.xdate), 'dd MMM yyyy', { locale: th })}</td>
                  <td>{format(new Date(item.recordDate), 'dd MMM yyyy', { locale: th })}</td>
                  <td>{item.rightsFor}</td>
                  <td>{`${format(new Date(item.beginSubscription), 'dd MMM yyyy', {
                    locale: th,
                  })} - ${format(new Date(item.endSubscription), 'dd MMM yyyy', {
                    locale: th,
                  })}`}</td>
                  <td>{`${item.ratio} ณ ${getNumberFormat(item.price)}`}</td>
                  <td>{item.condition}</td>
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

export default BenefitXr;

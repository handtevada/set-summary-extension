import useData from '../../hooks/useData';
import { SET_SHARE_HOLDER } from '../../constants/url';
import { getNumberFormat } from '../../utils/stringConvertor';

import Loading from '../Loading';

const ShareHolder = ({ symbol }) => {
  const { data } = useData(SET_SHARE_HOLDER(symbol));

  if (!data) return <Loading />;

  return (
    <div className="sse-section-container">
      <div className="sse-stack">
        <h2>ข้อมูลผู้ถือหุ้น</h2>
        <div className="sse-info-content-grid">
          <div>
            <p className="sse-info-sub-title">จำนวนผู้ถือหุ้นทั้งหมด</p>
            <p>{getNumberFormat(data?.totalShareholder)}</p>
          </div>
          <div>
            <p className="sse-info-sub-title">จำนวนผู้ถือหุ้นรายย่อย (Free Float)</p>
            <p>{getNumberFormat(data?.freeFloat?.numberOfHolder)}</p>
          </div>
          <div>
            <p className="sse-info-sub-title">%การถือหุ้นแบบไร้ใบหุ้น</p>
            <p>{getNumberFormat(data?.percentScriptless)}</p>
          </div>
          <div>
            <p className="sse-info-sub-title">%การถือหุ้นของผู้ถือหุ้นรายย่อย (%Free Float)</p>
            <p>{getNumberFormat(data?.freeFloat?.percentFreeFloat)}</p>
          </div>
        </div>

        <table className="sse-table">
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ผู้ถือหุ้น</th>
              <th className="sse-align-right">จำนวนหุ้น (หุ้น)</th>
              <th className="sse-align-right">%หุ้น</th>
            </tr>
          </thead>
          <tbody>
            {data?.majorShareholders.map((item) => {
              return (
                <tr key={item.sequence}>
                  <td>{item.sequence}</td>
                  <td>{item.name}</td>
                  <td className="sse-align-right">{getNumberFormat(item.numberOfShare)}</td>
                  <td className="sse-align-right">{item.percentOfShare}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShareHolder;

import useData from '../../hooks/useData';
import { SET_FINANCE } from '../../constants/url';
import { getNumberFormat } from '../../utils/stringConvertor';

const FinanceAccount = ({ symbol }) => {
  const { data } = useData(SET_FINANCE(symbol));

  if (!data) return 'loading';

  const dataSwap = {
    thead: data.map((item) => {
      return { year: item.year + 543, endDate: item.endDate, quarter: item.quarter };
    }),
    totalAsset: data.map((item) => {
      return item.totalAsset;
    }),
    totalLiability: data.map((item) => {
      return item.totalLiability;
    }),
    equity: data.map((item) => {
      return item.equity;
    }),
    paidupCapital: data.map((item) => {
      return item.paidupCapital;
    }),
    totalRevenue: data.map((item) => {
      return item.totalRevenue;
    }),
    profitFromOtherActivity: data.map((item) => {
      return item.profitFromOtherActivity;
    }),
    netProfit: data.map((item) => {
      return item.netProfit;
    }),
    eps: data.map((item) => {
      return item.eps;
    }),
    roa: data.map((item) => {
      return item.roa;
    }),
    roe: data.map((item) => {
      return item.roe;
    }),
    netProfitMargin: data.map((item) => {
      return item.netProfitMargin;
    }),
  };

  return (
    <table id="finance" className="sse-table">
      <thead>
        <tr>
          <th>งวดงบการเงิน ณ วันที่</th>
          {dataSwap.thead.map((item, index) => {
            let prefixYear = 'งบปี';
            if (item.quarter === '3M') {
              prefixYear = 'งบ 3 เดือน';
            }
            if (item.quarter === '6M') {
              prefixYear = 'งบ 6 เดือน';
            }
            if (item.quarter === '9M') {
              prefixYear = 'งบ 9 เดือน';
            }
            return (
              <th
                key={`${item}-${index}`}
                className="sse-align-right"
              >{`${prefixYear} ${item.year}`}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>สินทรัพย์รวม</td>
          {dataSwap.totalAsset.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item / 1000)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>หนี้สินรวม</td>
          {dataSwap.totalLiability.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item / 1000)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>ส่วนของผู้ถือหุ้น</td>
          {dataSwap.equity.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item / 1000)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>มูลค่าหุ้นที่เรียกชำระแล้ว</td>
          {dataSwap.paidupCapital.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item / 1000)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>รายได้รวม</td>
          {dataSwap.totalRevenue.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item / 1000)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>กำไร (ขาดทุน) จากกิจกรรมอื่น</td>
          {dataSwap.profitFromOtherActivity.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item / 1000)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>กำไรสุทธิ</td>
          {dataSwap.netProfit.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item / 1000)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>กำไรต่อหุ้น (บาท)</td>
          {dataSwap.eps.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>ROA (%)</td>
          {dataSwap.roa.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>ROE (%)</td>
          {dataSwap.roe.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>อัตรากำไรสุทธิ (%)</td>
          {dataSwap.netProfitMargin.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item)}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default FinanceAccount;

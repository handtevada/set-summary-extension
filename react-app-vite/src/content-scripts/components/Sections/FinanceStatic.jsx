import { format } from 'date-fns';
import { th } from 'date-fns/locale';

import useData from '../../hooks/useData';
import { SET_FINANCE_STATIC } from '../../constants/url';
import { getNumberFormat } from '../../utils/stringConvertor';

const FinanceStatic = ({ symbol }) => {
  const { data } = useData(SET_FINANCE_STATIC(symbol));

  if (!data) return 'loading';

  const dataSwap = {
    thead: data.map((item) => {
      return item.date;
    }),
    close: data.map((item) => {
      return item.close;
    }),
    marketCap: data.map((item) => {
      return item.marketCap;
    }),
    financialDate: data.map((item) => {
      return item.financialDate;
    }),
    pe: data.map((item) => {
      return item.pe;
    }),
    pbv: data.map((item) => {
      return item.pbv;
    }),
    bookValuePerShare: data.map((item) => {
      return item.bookValuePerShare;
    }),
    dividendYield: data.map((item) => {
      return item.dividendYield;
    }),
  };

  return (
    <table id="finance" className="sse-table">
      <thead>
        <tr>
          <th>ค่าสถิติสำคัญ ณ วันที่</th>
          {dataSwap.thead.map((item, index) => {
            return (
              <th key={`${item}-${index}`} className="sse-align-right">
                {format(new Date(item), 'dd MMM yyyy', { locale: th })}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ราคาล่าสุด (บาท)</td>
          {dataSwap.close.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>มูลค่าหลักทรัพย์ตามราคาตลาด (ล้านบาท)</td>
          {dataSwap.marketCap.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item / 1000)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>วันที่ของงบการเงินที่ใช้คำนวณค่าสถิติ</td>
          {dataSwap.financialDate.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {format(new Date(item), 'dd MMM yyyy', { locale: th })}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>P/E (เท่า)</td>
          {dataSwap.pe.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>P/BV (เท่า)</td>
          {dataSwap.pbv.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>มูลค่าหุ้นทางบัญชีต่อหุ้น (บาท)</td>
          {dataSwap.bookValuePerShare.map((item, index) => {
            return (
              <td key={`${item}-${index}`} className="sse-align-right">
                {getNumberFormat(item)}
              </td>
            );
          })}
        </tr>
        <tr>
          <td>อัตราส่วนเงินปันผลตอบแทน (%)</td>
          {dataSwap.dividendYield.map((item, index) => {
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

export default FinanceStatic;

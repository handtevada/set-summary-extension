import FinanceAccount from './FinanceAccount';
import FinanceStatic from './FinanceStatic';

const Finance = ({ symbol }) => {
  return (
    <div className="sse-section-container sse-finance-container">
      <div className="sse-stack">
        <h2>งบการเงิน</h2>
        <FinanceAccount symbol={symbol} />
        <FinanceStatic symbol={symbol} />
      </div>
    </div>
  );
};

export default Finance;

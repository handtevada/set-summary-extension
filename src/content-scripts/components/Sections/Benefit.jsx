import useData from '../../hooks/useData';
import { SET_BENEFIT } from '../../constants/url';

import Loading from '../Loading';
import BenefitXd from './BenefitXd';
import BenefitXr from './BenefitXr';

const Benefit = ({ symbol }) => {
  const { data } = useData(SET_BENEFIT(symbol));

  if (!data) return <Loading />;

  const xdList = data.filter((item) => item.caType === 'XD');
  const xrList = data.filter((item) => item.caType === 'XR');

  return (
    <div className="sse-section-container">
      <div className="sse-stack">
        <h2>สิทธิประโยชน์</h2>
        <BenefitXd xdList={xdList} />
        <BenefitXr xrList={xrList} />
      </div>
    </div>
  );
};

export default Benefit;

import { format, addYears } from 'date-fns';
import { th } from 'date-fns/locale';

import useData from '../../hooks/useData';
import { SET_NEWS } from '../../constants/url';

import Loading from '../Loading';

const NewsItem = ({ list }) => {
  return list?.slice(0, 5).map((item) => {
    return (
      <div key={item.id} className="sse-news-items" onClick={() => window.open(item.url, '_blank')}>
        <p>{format(new Date(item.datetime), 'dd MMM yyyy HH:mm', { locale: th })}</p>
        <p>{item.headline}</p>
      </div>
    );
  });
};

const News = ({ symbol }) => {
  const today = new Date();
  const fromDate = addYears(today, -2);
  const { data } = useData(
    SET_NEWS(symbol, format(fromDate, 'dd/MM/yyyy'), format(today, 'dd/MM/yyyy')),
  );

  if (!data) return <Loading />;

  return (
    <div className="sse-section-container">
      <div className="sse-stack">
        <h2>ข่าวหลักทรัพย์</h2>
        <NewsItem list={data?.newsInfoList} />
        <h2>ข่าวงบการเงิน</h2>
        <NewsItem list={data?.newsInfoList.filter((item) => item.tag === 'financial-statement')} />
      </div>
    </div>
  );
};

export default News;

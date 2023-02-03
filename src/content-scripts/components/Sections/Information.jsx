import useData from '../../hooks/useData';
import { SET_PROFILE } from '../../constants/url';

const Information = ({ symbol }) => {
  const { data } = useData(SET_PROFILE(symbol));

  if (!data) return 'loading';

  const handleImageError = (event) => {
    event.currentTarget.style = 'display: none';
  };

  return (
    <div className="sse-section-container">
      <div className="sse-info-title-container">
        <h2>{data?.name}</h2>
        <img src={data?.logoUrl} width={100} height={100} onError={handleImageError} />
      </div>
      <div className="sse-info-content-container">
        <h3>ลักษณะธุรกิจ : {data?.sectorName}</h3>
        <p>{data?.businessType}</p>
        <div className="sse-info-content-grid">
          <div>
            <p className="sse-info-sub-title">ที่อยู่</p>
            <p>{data?.address}</p>
          </div>
          <div>
            <p className="sse-info-sub-title">เบอร์โทรศัพท์</p>
            <p>{data?.telephone}</p>
          </div>
          <div>
            <p className="sse-info-sub-title">เว็บไซต์</p>
            <a href={data?.url} target="_blank">
              {data?.url}
            </a>
          </div>
          <div>
            <p className="sse-info-sub-title">เบอร์โทรสาร</p>
            <p>{data?.fax}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;

import PlaceholderLoading from 'react-placeholder-loading';
// import './style.css';
import { PlaceholderContainer } from './style';

function PlaceholderDetail() {
  return (
    <PlaceholderContainer>
      {/* <PlaceholderLoading shape="rect" width={315} height={240} /> */}
      <PlaceholderLoading shape="rect" width={400} height={285} />
    </PlaceholderContainer>
  );
}

export default PlaceholderDetail;

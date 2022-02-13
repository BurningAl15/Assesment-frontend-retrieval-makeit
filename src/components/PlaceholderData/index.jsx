import PlaceholderLoading from 'react-placeholder-loading';
import { PlaceholderContainer } from './style';

function PlaceholderData() {
  return (
    <PlaceholderContainer>
      <PlaceholderLoading shape="rect" width={680} height={680} />;
    </PlaceholderContainer>
  );
}

export default PlaceholderData;

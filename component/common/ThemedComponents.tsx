import {useIsFocused} from '@react-navigation/native';
import SpinnerOverlay from 'react-native-loading-spinner-overlay';

export const Spinner = ({loading}) => {
  const focused = useIsFocused();
  if (loading) {
    return (
      <SpinnerOverlay
        animation="slide"
        visible={loading && focused}
        textContent={'Loading...'}
        color={'#00FFBB'}
      />
    );
  } else return null;
};

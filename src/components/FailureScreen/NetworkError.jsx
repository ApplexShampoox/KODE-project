import FailureScreen from "./FailureScreen";
import NetworkErrorImg from '../../images/ufo.png';


const NetworkError = () => {
  return (
    <FailureScreen
      src={NetworkErrorImg}
      description='Какой-то сверхразум все сломал'
      advice='Постараемся быстро починить'
      error={true} />
  );
}

export default NetworkError;

import FailureScreen from "./FailureScreen";
import SearchErrorImg from '../../images/magnifier.png';

const SearchError = () => {
  return (
    <FailureScreen
      src={SearchErrorImg}
      description='Мы никого не нашли'
      advice='Попробуй скорректировать запрос'
      error={false} />);
}

export default SearchError;
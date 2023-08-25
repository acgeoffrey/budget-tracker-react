import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function Sort({ options, action }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get(action) || '';

  function handleChange(e) {
    searchParams.set(action, e.target.value);
    setSearchParams(searchParams);
  }

  return <Select options={options} value={sortBy} onChange={handleChange} />;
}

export default Sort;

import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function Sort({ options, action }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get(action) || '';

  function handleChange(data) {
    searchParams.set(action, data);
    if (action === 'category' && searchParams.get('page'))
      searchParams.set('page', 1);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      action={action}
      value={sort}
      onChange={handleChange}
    />
  );
}

export default Sort;

import { useTags } from '../features/records/useTags';
import Loader from '../ui/Loader';

function Tags() {
  const { isLoading, tags } = useTags();

  if (isLoading) return <Loader />;
  console.log(tags);
  return <div>Tags</div>;
}

export default Tags;

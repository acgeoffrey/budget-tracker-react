import { BiLoaderAlt } from 'react-icons/bi';

function LoaderMini({ color = 'white' }) {
  return (
    <BiLoaderAlt className={`h-6 w-6 animate-spin text-${color} mx-auto`} />
  );
}

export default LoaderMini;

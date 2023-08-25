import { createContext, useContext } from 'react';

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role='table'
        className=' rounded-md border-[1px] border-solid border-gray-200 bg-white text-base'
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <header
      role='row'
      className={`grid ${columns} items-center gap-x-8 border-b bg-gray-50 px-5 py-3 font-medium 
      uppercase tracking-wide text-gray-600 transition-none `}
    >
      {children}
    </header>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      role='row'
      className={`grid ${columns} items-center gap-x-6 border-b px-5 py-3 transition-none last:border-none`}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data || !data.length)
    return (
      <p className='py-3 text-center text-gray-700'>
        No data to show at the moment
      </p>
    );

  return <section className='my-1'>{data.map(render)}</section>;
}

function Footer({ children }) {
  return (
    <footer className='flex justify-center bg-gray-50 p-3 [&>:not(*)]:hidden'>
      {children}
    </footer>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;

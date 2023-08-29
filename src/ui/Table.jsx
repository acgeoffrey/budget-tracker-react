import { createContext, useContext } from 'react';

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role='table'
        className=' border-gray-muted rounded-md border-[1px] border-solid bg-white text-base'
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
      className={`grid ${columns} bg-gray-extraLight text-gray-default items-center gap-x-8 border-b px-5 py-3 
      font-medium uppercase tracking-wide transition-none `}
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
      <p className='text-gray-mildDark py-3 text-center'>
        No data to show at the moment
      </p>
    );

  return <section className=''>{data.map(render)}</section>;
}

function Footer({ children }) {
  return (
    <footer className='bg-gray-extraLight flex justify-center p-3 [&>:not(*)]:hidden'>
      {children}
    </footer>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;

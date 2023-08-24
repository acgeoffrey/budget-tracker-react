import { createContext, useContext } from 'react';

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role='table'
        className='overflow-hidden rounded-md border-[1px] border-solid border-gray-200 bg-white text-base'
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
      className={`grid grid-cols-[${columns}] items-center gap-x-6 border-b-[1px] bg-gray-50 px-5 py-3 font-medium 
      uppercase tracking-wide text-gray-600 transition-none`}
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
      className={`grid grid-cols-[${columns}] items-center gap-x-6 px-5 py-2 transition-none `}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length) return <p>No data to show at the moment</p>;

  return <section className='my-1'>{data.map(render)}</section>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;

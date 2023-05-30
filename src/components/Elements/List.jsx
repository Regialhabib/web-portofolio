/* eslint-disable react/prop-types */
const List = (props) => {
    const {children} = props;
  return (
    <li className="border-gray-500 border-b py-1 md:px-4 md:rounded-md cursor-pointer md:border-none md:hover:backdrop-blur-sm  md:hover:bg-slate-200 md:dark:hover:bg-zinc-800 ">
      {children}
    </li>
  );
};


export default List
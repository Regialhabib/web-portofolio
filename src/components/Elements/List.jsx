/* eslint-disable react/prop-types */
const List = (props) => {
    const {children} = props;
  return (
    <li className="border-gray-500 border-b py-2 md:py-0 md:border-none hover:backdrop-blur-sm  hover:text-blue-600 ">
      {children}
    </li>
  );
};


export default List
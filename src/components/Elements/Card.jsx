/* eslint-disable react/prop-types */
const Card = (props) => {
    const {children} = props;
    return (
        <div className="shadow  h-32  w-48  rounded-xl dark:bg-zinc-900 hover:-translate-y-4 transition-all flex justify-center items-center ">
            {children}
          </div>
    )
}

export default Card
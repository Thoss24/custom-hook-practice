import useCounter from "../hooks/use-counter";

const Increment = () => {
    const counter = useCounter()

    return (
        <div>{counter}</div>
    )
};

export default Increment
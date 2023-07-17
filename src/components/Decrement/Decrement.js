import useCounter from "../hooks/use-counter";

const Decrement = () => {
    const counter = useCounter(false)

    return (
        <div>{counter}</div>
    )
};

export default Decrement;
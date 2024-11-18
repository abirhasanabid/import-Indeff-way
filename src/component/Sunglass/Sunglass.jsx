import { multiply, sum,divided } from "../../Utils/math";

const Sunglass = () => {
    const first = 20;
    const second = 20;
    const add = sum(first,second);
    const multi = multiply(first,second);
    const div = divided(first,second);
    return (
        <div>
            <h1>This is sunglass component</h1>
            <h2>sum sunglass needed : {add}</h2>
            <h2>multiply sunglass number: {multi}</h2>
            <h2>divided sunglass number: {div}</h2>
        </div>
    );
};

export default Sunglass;
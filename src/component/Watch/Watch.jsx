import PropTypes from 'prop-types';

const Watch = ({watch}) => {
    const {name,brand,price}=watch;
    
    return (
        <div>
            <h2>watch : {name}</h2>         
            <h3>Brand : {brand}</h3>   
            <p>Price : {price + ' $'}</p>
        </div>
    );
};

Watch.propTypes ={
    watch: PropTypes.object
}

export default Watch;

import PropTypes from 'prop-types';

function List(props) {

    const category = props.category;
    const itemList = props.items;
    
    itemList.sort((a, b) => a.name.localeCompare(b.name));

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

    return(
        <div>
            <h3 className='list-category'>{category}</h3>
            <ol className='list-items'>{listItems}</ol>
        </div>
    );
}

List.proptypes = {
    category: PropTypes.string,
    itemList: PropTypes.arrayOf(PropTypes.shape(    {id: PropTypes.number,
                                                    name: PropTypes.string,
                                                    calories: PropTypes.number}))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;
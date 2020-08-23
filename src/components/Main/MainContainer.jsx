import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = (state) => ({
  foodsData: state.foodsBlock.catFoods,
})

export default connect(mapStateToProps, {})(Main);

import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {

    
  render() {
    console.log('Props', this.props)
    return (
      <div>
       Hello
      </div>
    )
  }
}

const mapStateToProps = (calendar) => {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return {
    calendar: dayOrder.map((day) => {
      return {
        day: day,
        meals:  Object.keys(calendar[day]).reduce((meals, meal) => {
          meals[meal] = calendar[day][meal] ? calendar[day][meal] : null;
          return meals	
        }, {})
      }
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectRecipe: (data) => {
      dispatch(addRecipe(data))
    },
    remove: (data) => {
      dispatch(removeFromCalendar(data))
    }
  }
}

export default connect(mapStateToProps)(App);

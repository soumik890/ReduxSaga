// Imports: Dependencies
import React, {Component} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {addition, substraction} from '../store/action';
import {useDispatch, useSelector} from 'react-redux';

// Screen Dimensions
const {height, width} = Dimensions.get('window');

// Screen: Counter
const Counter = props => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.counter);
  const data1 = useSelector(state => state.counter);

  // console.log(data1);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counterTitle}>Counter</Text>
      <View style={styles.counterContainer}>
        {/* <TouchableOpacity onPress={props.reduxIncreaseCounter}> */}
        <TouchableOpacity onPress={() => dispatch(addition())}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        {/* <Text style={styles.counterText}>{props.counter}</Text> */}
        <Text style={styles.counterText}>{data}</Text>
        {/* <TouchableOpacity onPress={props.reduxDecreaseCounter}> */}
        <TouchableOpacity onPress={() => dispatch(substraction())}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

// Map State To Props (Redux Store Passes State To Component)
// const mapStateToProps = state => {
//   console.log(state);
//   // Redux Store --> Component
//   return {
//     // counter: state.counterReducer.counter,
//     counter: state.counter.counter,
//   };
// };

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
// const mapDispatchToProps = dispatch => {
//   // Action
//   return {
//     // Increase Counter
//     reduxIncreaseCounter: () =>
//       dispatch({
//         type: 'INCREASE_COUNTER',
//         value: 1,
//       }),
//     // Decrease Counter
//     reduxDecreaseCounter: () =>
//       dispatch({
//         type: 'DECREASE_COUNTER',
//         value: 1,
//       }),
//   };
// };

// Exports
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(mapStateToProps)(Counter);
export default Counter;

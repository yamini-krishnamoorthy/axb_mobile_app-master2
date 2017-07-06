import { StyleSheet} from 'react-native';

module.exports = StyleSheet.create({

  /*====| Screens |====*/

  /*DashboardScreen*/
  bottomContainer: {
    backgroundColor: '#CED7DD'
  },
  bottomBadge: {
    backgroundColor: '#E7EBEE',
    height: 75
  },
  /*==*/

  /*====| Screens END |====*/

  /*====| Component |====*/

  /*NLIComponent*/
  responseContainer: {
    bottom: 0,
    position: 'absolute'
  },
  leftResponse: {
    bottom: 0
  },
  rightResponse: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  /*==*/

  /*PainIndexComponent*/
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  top: {
    position: 'absolute',
    top: 5
  },
  item: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  },
  left: {
    position: 'absolute',
    left: 0
  },
  right: {
    position: 'absolute',
    right: 0
  },
  root: {
    backgroundColor: '#FFCC00'
  },
  /*==*/

  /*ActivityListComponent*/
  nonActive: {
    borderColor: '#D3DBE1',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  active: {
    backgroundColor: '#FB8023'
  },
  text: {
    color: 'black'
  }
  /*==*/

  /*====| Component END |====*/

});

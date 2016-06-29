var React = require('react');

function ConfirmBattle (props) {
  return props.isLoading === false
  ? <p> LOADING! </p>
  : <p> Confirm Battle! </p>
}

module.exports = ConfirmBattle;

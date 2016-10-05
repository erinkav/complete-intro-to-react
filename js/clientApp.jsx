var React = require('react')
var ReactDOM = require('react-dom')
var myTitle = require('./myTitle')


var myFirstComponent = function () {
  return  (
     <div>
      <myTitle title='whatevs' color="peru" />
      <input />
    </div>
    )
  )
}

ReactDOM.render(<myFirstComponent />, document.getElementById('app'))
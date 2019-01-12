import React from 'react'
import {getFunName} from '../helpers'
class StorePicker extends React.Component {

  constructor() {
    super()
    this.goToStore = this.goToStore.bind(this)
  }

  myInput = React.createRef()

  goToStore(e) {
    e.preventDefault();
    const store = this.myInput.current.value
    this.props.history.push(`/store/${store}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          placeholder="Store Name"
          required
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker

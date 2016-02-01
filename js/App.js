import React from 'react'
import DatePicker from 'material-ui/lib/date-picker/date-picker'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DatePicker hintText="Event date"  />
  }
}

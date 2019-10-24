import React from 'react';
import { connect } from 'react-redux';
import NmapTable from './NmapTable.js'
import { simpleAction, fetchNmapResults } from './actions/actions.js'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ipAddress: ''};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    console.log(event)
    this.setState({ipAddress: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Hello World Redux</h1>
        <h1>Hello World Redux11</h1>
        <p>{this.props.simpleReducer.test}</p>
        <label>
          IP Address:
          <input type="text" value={this.state.ipAddress} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search IP" onClick={() => {this.props.fetchNmapResults(this.state.ipAddress)}}/>

    { this.props.simpleReducer.nmapData.length > 0 && <NmapTable/> }


      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  fetchNmapResults: (ipAddress) => dispatch(fetchNmapResults(ipAddress))
 })

const mapStateToProps = state => ({
  ...state
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);

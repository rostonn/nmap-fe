import React from 'react';
import { connect } from 'react-redux';
import NmapTable from './NmapTable.js'
import { fetchNmapResults, clearNmapResults } from './actions/actions.js'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ipAddress: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ ipAddress: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>NMAP Results Viewer</h1>
        <p>Enter IP Address and click Search IP to view results</p>
        <p>Try 189.129.7.43</p>
        <label>
          IP Address:
          <input type="text" value={this.state.ipAddress} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search IP" onClick={() => { this.props.fetchNmapResults(this.state.ipAddress) }} />
        <button value="Clear Results" onClick={() => this.props.clearNmapResults()}>Clear</button>

        {this.props.nmapReducer.nmapData.length > 0 &&
          <NmapTable data={this.props.nmapReducer.nmapData}/>
        }
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  fetchNmapResults: (ipAddress) => dispatch(fetchNmapResults(ipAddress)),
  clearNmapResults: () => dispatch(clearNmapResults())
})

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

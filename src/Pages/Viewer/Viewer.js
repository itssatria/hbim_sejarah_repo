import React, { Component } from 'react'
import launchViewer from './ViewerFunctions'

export default class Viewer extends Component {

  componentDidMount(){

    var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGlzYnVkLWhiaW0tYnVja2V0L0ZhdGFoaWxsYWgucnZ0';
    launchViewer('viewerDiv', documentId);
  }

  render() {
    return (
      <div style={{position: "absolute", width: "100%", height: "100%"}} id="viewerDiv" />
    )
  }
}

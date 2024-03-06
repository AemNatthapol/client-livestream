import React, { Fragment, Component } from 'react';
import axios from 'axios';

export default class Camera extends Component {

  constructor(props) {
    super(props);

    this.state = {cameraData: []};
  }

  componentDidMount() {
    this.Camera();
  }

  async Camera() {
    const response = await axios.get("http://localhost:3696/camera/allCam");
    this.setState({ cameraData: response.data });
    //console.log(response.data);
  }
  
  
    render() {

      const cameraData = this.state.cameraData.map((item, i) => (
        <tbody>
          <tr>
            <td>{item.camID}</td>
            <td>{item.ip}</td>
            <td>{item.user}</td>
            <td>{item.password}</td>
            <td>ลบ</td>
          </tr>
        </tbody>
      ));

      return(

        <>
          <h2>Camera Data</h2>  
          <button>Add Camera</button>
          <table border="1" width="100%" >
            <thead>
              <tr>
                <th>Camera ID</th>
                <th>IP</th>
                <th>USER</th>
                <th>PASSWORD</th>
                <th></th>
              </tr>
            </thead>
            { cameraData }
          </table>
          
        </>
          
      );
    }
}
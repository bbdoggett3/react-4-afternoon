import React, { Component } from 'react';
import axios from 'axios'
// import ClassList from '../ClassList/ClassList';

export default class Student extends Component {

  constructor() {
    super()

    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then( results => {
      this.setState({
        studentInfo: results.data
      })
    }).catch(error => console.log(error))
  }

  render() {
    const studentInfo = this.state.studentInfo;
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{studentInfo.first_name} {studentInfo.last_name}</h1>
        <h3>{studentInfo.grade}</h3>
        <h3>{studentInfo.email}</h3>
        <button className='back-btn' onClick={() => this.props.history.goBack()}>Back</button>
      </div>
    )
  }
}
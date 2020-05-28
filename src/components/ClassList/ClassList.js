import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }
    
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      this.setState({
        students: res.data
      })
    }).catch(error => console.log(error, 'this is not working'))
  }

  render() {
    const mappedClass = this.state.students.map((student, id) => (
      <Link key={id} to= {`/student/${student.id}`} >
        <h3> {student.first_name} {student.last_name}</h3>
      </Link>
    ));

    console.log(this.props)
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedClass}
        <button className='back-btn' onClick={() => this.props.history.goBack()} />
      </div>
    )
  }
}


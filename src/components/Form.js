import React from 'react';

class Form extends React.Component {

  // All below now handled in ParentComponent

  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: []
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // handleFirstNameChange = (e) => {
  //   this.setState({
  //     firstName: e.target.value
  //   })
  // }

  // handleLastNameChange = (e) => {
  //   this.setState({
  //     lastName: e.target.value
  //   })
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  render() {
    // Step 1

    // return (
    //   <form>
    //     <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
    //     <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
    //   </form>
    // )
    // Controlled Form

    // Step 2 - Controlled Form (Sibling Element)
    // return(
    //   <div>
    //     <form onSubmit={this.handleSubmit}>
    //       <input type="text" name="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName} />
    //       <input type="text" name="lastName" onChange={this.handleLastNameChange} value={this.state.lastName} />
    //       <input type="submit"/>
    //     </form>
    //     {this.listOfSubmissions()}
    //   </div>
    // )
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}

export default Form;
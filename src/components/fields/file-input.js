import React, { Component } from 'react'

class FileInput extends Component {
  constructor () {
    super()

    this.state = {
      file: null
    }
  }

  handleChange = (e) => {
    this.setState({ file: e.target.files[0] }, () => {
      this.props.input.onChange(this.state.file)
    })
  }

  render() {
    const { file } = this.state
    return (
      <div>
        {file ? 'loaded!' : 'please upload file'}
        <div>
          <input type="file" onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

export default FileInput;

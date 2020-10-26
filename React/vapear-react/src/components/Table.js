import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetch: this.props.fetch,
      data: [],
      meta: {},
    }
  }

  componentDidMount () {
    fetch(this.state.fetch)
    .then( result => result.json())
    .then( data => {
      this.setState({
        data: data.data.list,
        meta: data.meta,
      });
    })
    .catch( err => console.log(err))
  }

  render() {
    return(
      <React.Fragment>
        <table className="table table-dark">
          <thead>
            <tr>
              {
                this.props.heads.map( (head, i) =>
                  <th key={head.title + i} scope="col">{head.title}</th>
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(this.state.data).map( (value, i) =>
                <tr key={`row${i}`}>
                    {
                      this.props.heads.map( (head, i) => 
                        i === 0 ? <th key={i} scope="row">{this.state.data[value][head.prop]}</th>
                        : <td key={i}>{this.state.data[value][head.prop]}</td>
                      )
                    }
                </tr>
              )
            }
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default Table
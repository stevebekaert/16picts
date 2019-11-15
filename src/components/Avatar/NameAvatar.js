import React, { Component } from 'react'   

    
    class NameAvatar extends Component{
        constructor(props) {
            super(props)
                this.state = { pseudo: '' };
            }
            myChangeName = (event) => {
              this.setState({pseudo: event.target.value});
              console.log(this.state.pseudo)
            }
            render() {
              return (
                <form>
                <h1>Hello {this.state.pseudo}</h1>
                <p>Enter pseudo:</p>
                <input type='text' onChange={this.myChangeName} />
                </form>
                
              );
            }
          }

export default NameAvatar;
import React, { Component } from 'react'   

    
    class NameAvatar extends Component{
        constructor(props) {
            super(props)
                this.state = { pseudo: '' };
            }
            // myChangeName = (event) => {
            //   this.setState({pseudo: event.target.value});
            //   console.log(this.state.pseudo)
            // }

            render() {
              return (
                <form>
                <p>Choisis ton pseudo :</p>
                <input type='text' onChange={(event) => this.props.fctNameAvatar(event)} />
                </form>
                
              );
            }
          }

export default NameAvatar;
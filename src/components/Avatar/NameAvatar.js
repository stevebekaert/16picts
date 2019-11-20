import React, { Component } from 'react'   

    
    class NameAvatar extends Component{
        constructor(props) {
            super(props)
                this.state = {};
            }


            render() {
              return (
                <div className="nameAvatarDisign">
                <p>Choisis ton pseudo :</p>
                <input className="nameAvatarInput" type='text' maxlength="8" onChange={(event) => this.props.fctNameAvatar(event)} />
                </div>
                
              );
            }
          }

export default NameAvatar;
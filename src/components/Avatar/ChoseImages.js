import React, { Component } from 'react'
import './Avatar.css'

const images = ['http://emiconf.ens-lyon.fr/images/avatar.png/image',
'https://www.sccpre.cat/mypng/full/24-244898_profile-man-male-photo-face-portrait-illustration-male.png',
'https://pngimage.net/wp-content/uploads/2018/06/profil-png-5.png',
'https://assets0.uniksapp.com/placeholders/users/profile/avatar/male/640/male_1473167824.png',
'https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png',
'https://www.shareicon.net/data/256x256/2016/09/15/829459_man_512x512.png',
'https://dimelo-users-production.s3-eu-west-1.amazonaws.com/identity_avatars/78b76e06b01107e0/avatar_x-large.png?9fe7361',
'https://dimelo-users-production.s3-eu-west-1.amazonaws.com/identity_avatars/16668887b804d022/avatar_x-large.png?82cfea1',
'http://mesuthazen.com/wp-content/themes/privado/img/avatar.png',
'https://dimelo-users-production.s3-eu-west-1.amazonaws.com/identity_avatars/dd3f48284c9ee96c/avatar_x-large.png?9fe7361',
'https://pngimage.net/wp-content/uploads/2018/06/profil-png-5.png',
];

class ChoseImages extends Component{
    constructor(props) {
        super(props)
        this.state= {
            avatar : '',
        }   
    } 

        // handleClick = (image) => {
        //     this.setState({avatar : image});
        //     // console.log(key);
        //    }


    render(){
        return(
            <div className="choseImageDisign">
                <p> Choisis ton avatar :</p>
                <div className="imagesDisign">
                    {
                        images.map((image) => 
                        <div className="imageDisignBloc">
                            <img onClick={() => this.props.fctChoseImage(image)} 
                                className='imageDisign'
                                src={image}
                                alt="Disign, really?" /></div> )
                    }
                </div>
            </div>
        )
}
}

export default ChoseImages;
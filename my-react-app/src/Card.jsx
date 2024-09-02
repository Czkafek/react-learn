import profilePic from './assets/profilePicture.jpg';

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile_picture" />
            <h2 className='card-title'>Czkafek</h2>
            <p className='card-text'>I learn programming and electricity</p>
        </div> 
    );
}

export default Card;
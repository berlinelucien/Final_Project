import { useAuth0} from '@auth0/auth0-react';


const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
   
<div class="box">
<div class="card">
  <div class="card-image">
    <figure class="is-64x64">
      <img src={picture} alt="profile" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
              <p class="title is-4">{ name}</p>
              <p class="subtitle is-6">{email }</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
     
    </div>
  </div>
      </div>
      </div>

  );
};

export default Profile


{/* <div className="row align-items-center profile-header">
<div className="col-md-2 mb-3">
  <img
    src={picture}
    alt="Profile"
    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
  />
</div>
<div className="col-md text-center text-md-left">
  <h2>{name}</h2>
  <p className="lead text-muted">{email}</p>
</div>
</div> */}
{/* <div className="row">
<pre className="col-12 text-light bg-dark p-4">
  {JSON.stringify(user, null, 2)}
</pre>
</div>  */}
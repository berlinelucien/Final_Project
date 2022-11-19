import { useAuth0 } from "@auth0/auth0-react";
import SubHeading from "../ReferenceCard/SubHeading";
import NavBar from "../NavBar/NavBar";


const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <NavBar />
      <div className="container_profile">
        <div class="card" style={{ width: "18rem" , height:"22rem"}}>
          <div class="media">
            <div class="media-content">
              <img class="card-img-top" src={picture} alt="profile" />
              <span class="p__cormorant" style={{marginLeft:"3rem"}}>{name}</span>

              {/* <p class="subtitle is-6">{email}</p> */}
              <button class="button is-primary is-rounded are-medium">
                {" "}
                <a href="/Notes"> Add Notes </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

{
  /* <div className="row align-items-center profile-header">
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
</div> */
}
{
  /* <div className="row">
<pre className="col-12 text-light bg-dark p-4">
  {JSON.stringify(user, null, 2)}
</pre>
</div>  */
}

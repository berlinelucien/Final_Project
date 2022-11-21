import { useAuth0 } from "@auth0/auth0-react";

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

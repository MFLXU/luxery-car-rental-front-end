import { useState } from "react";

function Application() {
  const [user, setUser] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit() {
    setSubmitted(true);
  }
  function handleUser(input) {
    if (input === "") {
      setUser("Sir");
    } else {
      setUser(input.target.value);
    }
  }
  return (
    <div>
      <div className="backdrop"></div>
      <div className="application-con container">
        {submitted ? (
          <>
            <h1>Thank You {user} For Your Application</h1>
            <p>
              Your application was sent and we will contact you when we're done
              analysing it.
            </p>
          </>
        ) : (
          <>
            <h1>Apply for membership</h1>
            <div className="application-form">
              <p>Name :</p>
              <input onChange={handleUser} type="text" placeholder="Name" />
              <p>E-mail :</p>
              <input type="text" placeholder="E-mail" />
              <p>Phone Number :</p>
              <input type="text" placeholder="Phone Number" />
              <p>Why would you apply to this ?</p>
              <textarea placeholder="Why would you apply for this membership" />
            </div>
          </>
        )}
        {!submitted ? (
          <button onClick={handleSubmit} className="btn-ghost-reverse mt-8">
            Apply
          </button>
        ) : null}
      </div>
    </div>
  );
}
export default Application;

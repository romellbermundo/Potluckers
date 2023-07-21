import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getexistingPotluck } from "../api/potluckAPI";
import FullFeaturedCrudGrid from "../components/datatable";
import ParticipantsPopup from "../components/ParticipantsPopup";

function ExistingEvents() {
  const [potluck, setPotluck] = useState();
  const [participantPopup, setParticipantPopup] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchPotluck = async () => {
      const fetchedPotluck = await getexistingPotluck(id);
      setPotluck(fetchedPotluck);
    };
    fetchPotluck();

    return () => {};
  }, []);

  if (!id) {
    return <p>No Id Provided</p>;
  }
  if (!potluck) {
    return <p>Loading</p>;
  }
  return (
    <>
      <div id="SuperWrap">
        <div className="container">
          <div className="one">
            <h3 className="title flex-title">
              <h1>{potluck.title}</h1>

              <p>Organized by: {potluck.owner && potluck.owner.name}</p>
              <p>Event Date: {Date(potluck.eventDate).toString()}</p>
              <p>
                <p>Event Theme: {potluck.theme}</p>

                <b>Location: </b>
                {potluck.location && potluck.location.name}
              </p>
              <p>{potluck.location && potluck.location.address}</p>
              <p>
                {potluck.location && potluck.location.city},{" "}
                {potluck.location && potluck.location.province}
              </p>
              <p>{potluck.location && potluck.location.postalcode}</p>
              <p>Anticipated Attendees: {potluck.numberExpected}</p>
              <p>Confirmed Attendees: {potluck.numberAttending}</p>
              <p>
                Share this link to access potluck:
                <a
                  href={`https://www.potlucker.ca/home/ExistingEvents/${potluck._id}`}
                  target="_blank"
                >
                  www.potlucker.ca/home/ExistingEvents/{potluck._id}
                </a>
              </p>
              <a
                onClick={() => setParticipantPopup(true)}
                className="btn btn--green"
                style={{ padding: "7px", margin: "5px" }}
              >
                Let them know you are coming
              </a>
              <FullFeaturedCrudGrid
                setPotluck={setPotluck}
                potluck={potluck}
                type="appetizer"
              />
              <FullFeaturedCrudGrid
                setPotluck={setPotluck}
                potluck={potluck}
                type="main"
              />
              <FullFeaturedCrudGrid
                setPotluck={setPotluck}
                potluck={potluck}
                type="sidedish"
              />
              <FullFeaturedCrudGrid
                setPotluck={setPotluck}
                potluck={potluck}
                type="dessert"
              />
              <FullFeaturedCrudGrid
                setPotluck={setPotluck}
                potluck={potluck}
                type="beverage"
              />
              <FullFeaturedCrudGrid
                setPotluck={setPotluck}
                potluck={potluck}
                type="extra"
              />
            </h3>
          </div>
        </div>
      </div>
      <ParticipantsPopup
        trigger={participantPopup}
        setTrigger={setParticipantPopup}
        potluck={potluck}
        setPotluck={setPotluck}
      />
    </>
  );
}

export default ExistingEvents;

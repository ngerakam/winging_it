function Card() {
  return (
    <>
      <div className="container fit-indiv row ">
        <div className="card fit-content col-s-12  col-4 m-auto text-bg-dark">
          <div className="card-body">
            <p>Location :</p>
            <p>Summit House Mezzanine Plaza.</p>
            <p>3rd Floor Room 301</p>
          </div>
        </div>
        <div className="card fit-content col-4 col-s-12 m-auto text-bg-dark">
          <div className="card-body">
            <p>P.O.BOX 12542 – 00400 NAIROBI</p>
            <p>Email : info@nextdecs.com</p>
            <p>Phone : 0772 517833 </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

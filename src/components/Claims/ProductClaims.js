import React from "react";
import { useSelector } from "react-redux";
import { selectClaims } from "../../redux/slices/claimSlice";
import { formatDate } from "../../helpers/dateConvert";

const ProductClaims = () => {
  const [claims, err] = useSelector(selectClaims);

  return (
    <>
      <section className="collection section-b-space ratio_square ">
        <h3>Your Products Claims ..</h3>
        <br></br>
        <div className="container">
          <div className="row partition-collection">
            {claims?.map((claim, index) => (
              <div className="col-lg-3 col-md-6">
                <div className="collection-block">
                  <div
                    className="bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage: 'url("https://picsum.photos/200")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  >
                    <img
                      src="https://picsum.photos/200"
                      className="img-fluid blur-up lazyload bg-img"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="collection-content">
                    <h4>Added In : {formatDate(claim.date_claim)}</h4>
                    {(() => {
                      if (claim.state === 1) {
                        return (
                          <span className="badge badge-primary">
                            Not Treated Yet
                          </span>
                        );
                      } else if (claim.state === 2) {
                        return (
                          <span className="badge badge-warning">
                            Processing
                          </span>
                        );
                      } else {
                        return (
                          <span className="badge badge-success">Treated</span>
                        );
                      }
                    })()}

                    <p>{claim.description}</p>
                    <a href="category-page.html" className="btn btn-outline">
                      Modify Claim !
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductClaims;

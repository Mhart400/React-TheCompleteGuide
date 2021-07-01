import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VotingRecord.css";

class VotingRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="record_card card m-2">
        <div className="row card-body">
          <div className="voterLeft col-4">
            <div className="voterInfo pt-1">
              <div className="name mb-2">John Doe</div>
              <div className="address mb-1">
                  <span>123 Main Street</span>
                  <span className="badge badge-primary baddge-pill ml-2">Ward 2</span>
              </div>
              <div className="ward">&#10003;Count on Vote</div>
            </div>
            <div className="voterTags mb-1">
              <span className="tag badge badge-info badge-sm badge-pill m-1">
                Tag 1
              </span>
              <span className="badge badge-info badge-sm badge-pill m-1">
                Tag 2
              </span>
              <span className="badge badge-info badge-sm badge-pill m-1">
                Tag 3
              </span>
            </div>
          </div>
          <div className="voterMiddle col">
            <div className="elections row justify-content-center">
              <div className="election col text-sm-center">
                <div className="electionYear">2020</div>
                <div className="voteYN">Voted Yes/No</div>
              </div>
            </div>
          </div>
          <div className="col-3 voterRight text-center">
            <Button className="btn btn-sm btn-block btn-primary mb-1 ">
              Voter Details
            </Button>
            <Button className="btn btn-sm btn-block btn-success mb-1 ">
              Count on Vote
            </Button>
            <Button className="btn btn-sm btn-block btn-warning mb-1 ">
              Disregard Vote
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default VotingRecord;

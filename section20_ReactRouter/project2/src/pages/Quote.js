import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Quote = () => {
  
  const params = useParams();
  const match = useRouteMatch();
  
  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  
  useEffect(()=> {
    sendRequest(quoteId)
  },[quoteId, sendRequest])

  if (status === 'pending' ) {
    return <div className='centered' ><LoadingSpinner/></div>
  }

  if (error) {
    return <p className='centered'>{error}</p>
  }

  if (!loadedQuote.text) {
    return <p> no quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} exact />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} exact >
        <Comments />
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}`}>
            Hide Comments
          </Link>
        </div>
      </Route>

      <p>
        <Link to="/quotes">Back</Link>
      </p>
    </>
  );
};

export default Quote;

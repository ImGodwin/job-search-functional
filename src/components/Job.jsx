import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToFavorites, removeFromFavorites } from '../redux/actions';

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}{' '}
        </a>
      </Col>
      <Col xs={3}>
        <Button
          className="ms-3"
          variant={favorites.some((el) => el.company_name === data.company_name) ? 'danger' : 'success'}
          onClick={() => {
            favorites.some((el) => el.company_name === data.company_name)
              ? dispatch(removeFromFavorites(data.company_name))
              : dispatch(addToFavorites(data));
          }}
        >
          {favorites.some((el) => el.company_name === data.company_name) ? 'Remove from favorites' : 'Add to favorites'}
        </Button>
      </Col>
    </Row>
  );
};
export default Job;

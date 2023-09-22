import { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';
import Job from './Job';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GET_JOB_LOADING_OFF, GET_JOB_LOADING_ON, HAS_ERROR } from '../redux/actions';

const MainSearch = () => {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const dispatch = useDispatch();
  const hasError = useSelector((state) => state.jobs.hasError);
  const errorMsg = useSelector((state) => state.jobs.errorMsg);

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/obs?search=';

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: GET_JOB_LOADING_ON });
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20');
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
        dispatch({ type: GET_JOB_LOADING_OFF });
      } else {
        switch (response.status) {
          case 404:
            throw new Error("there's a problem 404");

          case 400:
            throw new Error("there's a problem 400");

          default:
            throw new Error("there's a problem");
        }
      }
    } catch (error) {
      console.log('ciao');
      dispatch({ type: HAS_ERROR, payload: error.message });
    } finally {
      dispatch({ type: GET_JOB_LOADING_OFF });
    }
  };

  return (
    <Container>
      {hasError && <Alert variant="danger">{errorMsg}</Alert>}
      {console.log(hasError)}
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex">
          <h1 className="display-1">Remote Jobs Search {isLoading && '...'}</h1>
          <Link to="/favorites" className="mx-auto">
            <Button>Favorites</Button>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
              required
            />
          </Form>
        </Col>
        {isLoading ? (
          <Spinner animation="border" role="status" variant="danger">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Col xs={10} className="mx-auto mb-5">
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;

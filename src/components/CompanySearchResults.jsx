import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsAction } from '../redux/actions';

const CompanySearchResults = () => {
  const params = useParams();
  const jobs = useSelector((state) => state.jobs.content);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsAction(params.company));
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

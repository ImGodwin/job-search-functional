import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Job from './Job';

const FavoriteJobs = () => {
  const dispatch = useDispatch();
  const companyList = useSelector((state) => state.favorites.content);
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto mb-5">
          {companyList.map((jobData, i) => (
            <Job key={i} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteJobs;

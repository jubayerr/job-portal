import React from 'react';
import './job.css'
import { Card } from 'react-bootstrap';

const Job = ({ job }) => {

    const { title, company, salary, meta, location, url } = job

    return (
        <Card style={{ width: '32rem' }} className="mb-5">
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted"><small>{location}, US</small></Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted"><b>Salary</b>: {salary}</Card.Subtitle>
                <Card.Text>
                    <b className="text-muted">Details</b>: {meta}
                </Card.Text>
                <Card.Link target="blank" href={`${url}`}>Apply Now</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Job;
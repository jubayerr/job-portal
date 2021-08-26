import React from 'react';
import './jobs.css';
import employerData from '../../employerData/employerData.json'
import Job from './Job/Job'
import { Container } from 'react-bootstrap';


const jobs = employerData.slice(0, 9)

const Jobs = () => {

    return (
        <Container>
            <div className="jobs-area">
                {

                    jobs.map(job => <Job key={job.email} job={job} />)
                }
            </div>
        </Container>
    );
};

export default Jobs;
import React from 'react';
import { useState } from 'react';
import Jobs from './Jobs';


const JobOffers = () => {

    const [datas, setDatas] = useState([
        {
            "id": 1,
            "company": "Accenture",
            "logo": "./images/photosnap.svg",
            "new": true,
            "featured": true,
            "position": "Senior Frontend Developer",
            "role": "Frontend",
            "level": "Senior",
            "postedAt": "1d ago",
            "contract": "Full Time",
            "location": "Brussels",
            "languages": ["HTML", "CSS", "JavaScript"],
            "tools": []
        },
        {
            "id": 2,
            "company": "IBM",
            "logo": "./images/manage.svg",
            "new": true,
            "featured": true,
            "position": "front end Developer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1d ago",
            "contract": "Part Time",
            "location": "Brussels",
            "languages": ["Python"],
            "tools": ["React"]
        },
        {
            "id": 3,
            "company": "Belfius",
            "logo": "./images/account.svg",
            "new": true,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2d ago",
            "contract": "Part Time",
            "location": "Brussels",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
        },
        {
            "id": 4,
            "company": "Microsoft",
            "logo": "./images/myhome.svg",
            "new": false,
            "featured": false,
            "position": "Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "5d ago",
            "contract": "Contract",
            "location": "Brussels",
            "languages": ["CSS", "JavaScript"],
            "tools": []
        },
        {
            "id": 5,
            "company": "Axa",
            "logo": "./images/loop-studios.svg",
            "new": false,
            "featured": false,
            "position": "frontend developer",
            "role": "FullStack",
            "level": "Midweight",
            "postedAt": "1w ago",
            "contract": "Full Time",
            "location": "Brussels",
            "languages": ["JavaScript"],
            "tools": ["Ruby", "Sass"]
        },
        {
            "id": 6,
            "company": "VDAB",
            "logo": "./images/faceit.svg",
            "new": false,
            "featured": false,
            "position": "Junior Developer",
            "role": "Backend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "Brussels",
            "languages": ["Ruby"],
            "tools": ["RoR"]
        },
        {
            "id": 7,
            "company": "Actiris",
            "logo": "./images/shortly.svg",
            "new": false,
            "featured": false,
            "position": "Web Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "Brussels",
            "languages": ["HTML", "JavaScript"],
            "tools": ["Sass"]
        },
        {
            "id": 8,
            "company": "VeePee",
            "logo": "./images/insure.svg",
            "new": false,
            "featured": false,
            "position": "Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "Brussels",
            "languages": ["JavaScript"],
            "tools": ["Vue", "Sass"]
        },
        {
            "id": 9,
            "company": "Samsung",
            "logo": "./images/eyecam-co.svg",
            "new": false,
            "featured": false,
            "position": "Full Stack Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "3w ago",
            "contract": "Full Time",
            "location": "Brussels",
            "languages": ["JavaScript", "Python"],
            "tools": ["Django"]
        },
        {
            "id": 10,
            "company": "Google",
            "logo": "./images/the-air-filter-company.svg",
            "new": false,
            "featured": false,
            "position": "Front-end Dev",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "1mo ago",
            "contract": "Part Time",
            "location": "Brussels",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
        }
    ])
    return (
        <Jobs datas={datas} />
    )
}

export default JobOffers;

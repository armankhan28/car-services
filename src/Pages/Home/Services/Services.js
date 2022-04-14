import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, SetServices] =useState([])

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => SetServices(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='title m-5'>Our Services</h1>
            <div className='service-container'>
              {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
              }
            </div>
        </div>
    );
};

export default Services;
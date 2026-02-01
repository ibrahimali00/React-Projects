import React from 'react';
import Title from './Title';
import Service from './Service';
import { services } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="Services" />

      <div className="section-center services-center">
        {services.map((serv) => {
          const { id, title, text, icon } = serv;
          return <Service key={id} title={title} text={text} icon={icon} />;
        })}
      </div>
    </section>
  );
};

export default Services;

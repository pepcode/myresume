import React, { Component } from 'react';
import config from './config.json';
import Description from './Description.js';

const name = React.createElement('h1',  {}, config.name);
const email = React.createElement('h2', {}, "Email: " + config.email);
const phone = React.createElement('h2', {}, "Phone: " + config.phone);


class Resume extends Component {
  render() {
    return (
      <div>
        <div className="header">
          {name} {email} {phone}
        </div>

        <div>
          <ul>
            {config.intro.map(descritpion => (
              <li>{descritpion}</li>
            ))}
          </ul>
        </div>

        <div>
          <br/>
          <h3>EDUCATION</h3>
          <ul>
            {config.education.map(edu => (
              <li >{edu}</li>
            ))}
          </ul>
        </div>

        <div>
          <br/>
          <h3>PROFESSIONAL EXPERIENCE</h3>
          <div>
            {config.experience.map(exp => (
                <div>
                  <h4>{exp.title} - {exp.project} ({exp.companyName} - {exp.startdate} to {exp.enddate})</h4>
                  <div>
                    <ul>
                      {exp.snapshot.map(desc => (
                        <li>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
            ))}
          </div>
        </div>
            
        <br/>
        <div>
          {Object.keys(config.others).map( (key, value) => (
              <h3>{key} : {config.others[key]}</h3>
          ))}
        </div>

      </div>
    );
  }
}

export default Resume;

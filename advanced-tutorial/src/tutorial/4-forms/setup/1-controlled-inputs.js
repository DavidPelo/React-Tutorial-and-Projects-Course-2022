import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if(name && email) {
      const newPerson = {
        id: new Date().getTime().toString(),
        name,
        email
      };
  
      setPeople((people) => {
        return [...people, newPerson]
      })

      setName('');
      setEmail('');
    } else {
      console.log('validated')
    }
  }

  function nameHandler(e) {
    setName(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input type="text" id="firstName" name="firstName" value={name} onChange={nameHandler}/>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input type="text" id="email" name="email" value={email} onChange={emailHandler}/>
          </div>
          <button type="submit">add person</button>
        </form>
        {
          people.map(person => {
            const {id, name, email} = person;
            return <div key={id} className='item'>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          })
        }
      </article>
    </>
  )
};

export default ControlledInputs;

import React, { useState } from 'react'
import './Profile.css'

const Profile = ({ isProfileOpen, toggleModal, user, loadUser }) => {
  const { name, entries, joined, age, pet, id } = user
  const [nameInput, setNameInput] = useState(name)
  const [ageInput, setAgeInput] = useState(age)
  const [petInput, setPetInput] = useState(pet)

  const onFormChange = ({ target }) => {
    switch (target.name) {
      case 'user-name':
        setNameInput(target.value)
        break
      case 'user-age':
        setAgeInput(target.value)
        break
      case 'user-pet':
        setPetInput(target.value)
        break
      default:
        return
    }
  }

  const onProfileUpdate = data => {
    fetch(`https://intelbrain-api.herokuapp.com/profile/${id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({ formInput: data })
    })
      .then(res => {
        if (res.status === 200 || res.status === 304) {
          toggleModal()
          loadUser({ ...user, ...data })
        }
      })
      .catch(console.log)
  }

  return (
    <div className='profile-modal'>
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white'>
        <main className='pa4 black-80 w-80'>
          <img
            src='http://tachyons.io/img/logo.jpg'
            className='h3 w3 dib'
            alt='avatar'
          />
          <h1>{nameInput}</h1>
          <h4>{`Images submitted: ${entries}`}</h4>
          <p>{`Member since: ${new Date(joined).toLocaleDateString()}`}</p>
          <hr />
          <label className='mt2 fw6' htmlFor='user-name'>
            Name
          </label>
          <input
            className='pa2 ba w-100'
            placeholder={name}
            type='text'
            name='user-name'
            id='name'
            onChange={onFormChange}
          />
          <label className='mt2 fw6' htmlFor='user-age'>
            Age
          </label>
          <input
            className='pa2 ba w-100'
            placeholder={age}
            type='text'
            name='user-age'
            id='name'
            onChange={onFormChange}
          />
          <label className='mt2 fw6' htmlFor='user-pet'>
            Pet
          </label>
          <input
            className='pa2 ba w-100'
            placeholder={pet}
            type='text'
            name='user-pet'
            id='name'
            onChange={onFormChange}
          />
          <div
            className='mt4'
            style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <button
              onClick={() =>
                onProfileUpdate({
                  name: nameInput,
                  age: ageInput,
                  pet: petInput
                })
              }
              className='b pa2 grow pointer hover-white w-40 bg-light-green b--black-20'>
              Save
            </button>
            <button
              onClick={toggleModal}
              className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'>
              Cancel
            </button>
          </div>
        </main>
        <div className='modal-close' onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  )
}

export default Profile

import React from 'react'

function CreatePost() {
  return (
    
  <section className='create-post-section' >
    <h1>Create Post</h1>
    
    <form>
        <input type='file' name='image' accept="image/png, image/jpeg" />
        <input type='text' name='caption' placeholder='Enter Caption' required />
        <button> submit </button>
    </form>

  </section>

  )
}

export default CreatePost
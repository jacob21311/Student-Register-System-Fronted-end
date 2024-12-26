import React from 'react'

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:`url('https://www.cornell.edu/about/locations/ithaca/assets/images/0981_06_090_select-campus-aerial.jpg')`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        minHeight:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        textShadow:'2px 2px 4px rgba(0,0,0,0.7)'
      }}
    
     
    
    >
       <h1 style={{fontSize:'3rem',fontWeight:'bold'}}>
        Welcome to the Student Management System
       </h1>
      <p style = {{fontSize: '1.5rem', margin :'20px 0'}}>
        Manage student data efficiently and effectively with our system.
      </p>

    </div>
  )
}

export default Home

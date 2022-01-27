import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
          
            <th>Name</th>
            <th>E-mail</th>
            <th>Mobile no.</th>
            <th>Experience</th>
            <th>Company Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map((post, index) => (
              <tr key={index}>
                
                <td>{post.name}</td>
                <td>{post.email}</td>
                <td>{post.number}</td>
                <td>{post.experience}</td>
                <td>{post.company}</td>
                <td>{post.duration}</td>
              </tr>
            ))
        }
        </tbody>
      </table>
     
    </div>
  );
};

export default Posts;

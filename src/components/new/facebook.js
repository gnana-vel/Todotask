import './facebook.css';
import { useState } from 'react';
function Facebook() {

  const [name, setname] = useState('');
  const [list, setlist] = useState([]);
  const [show,setShow]=useState(true)
  const [count,setCount]=useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    const variable = [...list]
    variable.unshift(name)
    if (name) {
      setlist(variable)
    }
    
    setname('')

  } 


  const handleDelete=(lists)=>{
    console.log(lists)
       const newlist = list.filter((item) => (item !== lists));
       setlist(newlist)
  }

  const handleUpdate=(lists,len) =>{
    setname(lists)
    setCount(len)
    setShow(!show)
  }

  const Update = () => {
    const clone=[...list]
    clone.splice(count,1,name)
    setlist(clone)
    setname('')
    setShow(!show)

  }



  return (
    <div>
      <div className='input-container'>
        <form onSubmit={handleSubmit}>
          <input type='text' className='input-box' placeholder='Enter values' value={name} onChange={(e) => setname(e.target.value)} />
          {show?<button className='btn'>ADD</button>:<button onClick={()=>Update()} type='button' className='btn'>UPDATE</button>}
        </form>
      </div>
      <hr/>
      <div className='todo-container'>
        {
          list.map((lists,len) => {
            return (
              <div>
                <div className='todo-content'>
                  <div> {lists} </div>
                  <div><button className='del-btn'  onClick={()=>handleDelete(lists)}>Delete</button></div>
                  <div><button className='update-btn' onClick={()=>handleUpdate(lists,len)}>edit</button></div>
                </div>

              </div>
            )

          })
        }
      </div>

    </div>
  );
}

export default Facebook;
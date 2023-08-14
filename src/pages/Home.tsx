import React from 'react'
import "./Home.css"

const Home = () => {
    const posts = [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
        ];

  return (
    <div className='post_container'>
       {posts.map((item)=>(
        <div className="post_main">
            <div className="text_div">
                <div className="text_title">{item.title}</div>
                <div className="text_desc">{item.desc}</div>
                <button>Read More</button>
            </div>
            <div className="image_div">
                <img src={item.img} alt={item.title} />
            </div>
            
        </div>
       ))}
    </div>
  )
}

export default Home
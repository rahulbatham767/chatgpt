import React, { useEffect, useState } from 'react'
import { RiTelegramLine } from 'react-icons/ri'
import axios from 'axios'
import img from './195.jpg'
import img1 from './7309681.jpg'
const Display = () => {

    const [value, setValue] = useState([])
    const [answer, setAnswer] = useState([])
    const [update, setUpdate] = useState([])

    const onchange = (e) => {
        console.log(e);
        setValue(e);


    }
    const handlekey = (event) => {
        if (event.key === 'Enter') {
            setUpdate(update);
            if (update !== '') {

                search();
            }
            console.log(value);
        }
    }

    useEffect(() => {

    }, [value], [answer], [update])


    const search = async () => {
        const msg = await axios.get(`https://kora-api.vercel.app/chatbot/message=${value}`).then(response => {
            return response.data.reply;
        }).catch(err => { console.log(err); })
        console.log(msg);
        setAnswer([...answer, msg])
        setUpdate([...update, { message: msg, check: true, user: value }])

    }

    return (


        < div className="container"  >
            {
                <div className="card my-5 bg-transparent relative m-auto shadow overflow-auto" style={{ width: "70% ", height: "100vh", }}>

                    <div className=" my-2 " style={{ height: "5rem", margin: 'auto', width: "90%", }}>
                        {
                            update.map((Element, index) => {
                                console.log(Element);
                                return (
                                    <div key={index}>
                                        <div className='card my-2 p-2 flex flex-row text-white' style={{ alignItems: "center", height: '5rem', backgroundColor: '#0000003b' }}>
                                            <div style={{}}>
                                                <img src={img1} alt="" className='img-fluid' width="34px" />
                                            </div>
                                            {Element.user}</div>
                                        <div className='card p-2 text-end text-white' style={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: " row",
                                            justifyContent: "end",
                                            height: '5rem',
                                            backgroundColor: '#0000003b'
                                        }}>
                                            <div style={{}}><img src={img} alt="" className='img-fluid' width="64px" /></div>
                                            {Element.message}</div>
                                    </div>
                                )
                            })
                        }


                    </div>

                    <div className="card text-white" style={{ position: "absolute", backgroundColor: '#0000003b', bottom: "10px", left: "20px", width: "90%" }}>
                        <div className='flex justify-end' >
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: "100%", display: 'flex' }}>  <input type="search" name="search" id="search" style={{ width: "100%", outline: 'none', border: "none" }} onKeyPress={handlekey} onChange={(e) => { onchange(e.target.value) }} />
                                </div>
                                <div>
                                    <RiTelegramLine style={{ fontSize: "32px", margin: "auto", cursor: 'pointer' }} onClick={search} />
                                </div>
                            </div>


                        </div>
                    </div>
                </div >

            }
        </div >
    )

}

export default Display
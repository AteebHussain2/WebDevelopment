import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid';
import React, { useRef, useState, useEffect } from 'react'

const Manager = () => {
    const InputRef = useRef()
    const [ShowPassword, setShowPassword] = useState(true)
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [PasswordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem('passwords')
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const TogglePassword = () => {
        setShowPassword(!ShowPassword)
        if (ShowPassword) {
            InputRef.current.type = 'text'
        }
        else {
            InputRef.current.type = 'password'
        }
    }

    const SavePassword = () => {
        setPasswordArray([...PasswordArray, { ...form, id: uuidv4() }]);
        localStorage.setItem("passwords", JSON.stringify([...PasswordArray, { ...form, id: uuidv4() }]));
        setForm({ site: "", username: "", password: "" })
    }

    const DeletePassword = (id) => {
        setPasswordArray(PasswordArray.filter(item => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(PasswordArray.filter(item => item.id !== id)));
    }

    const EditPassword = (id) => {
        setForm(PasswordArray.filter(item => item.id === id)[0])
        DeletePassword(id)
    }

    const HandleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const CopyText = (username, password) => {
        toast('Copied to Clipboard', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        const text = `${username}\n${password}`
        navigator.clipboard.writeText(text)
    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className='flex flex-col items-center gap-8 m-auto w-full sm:px-0 px-4 sm:w-[600px] md:w-[700px] lg:w-[920px] mt-16 sm:mt-32 mb-3 text-white'>
                <div className='flex flex-col items-center gap-0 text-center text-pretty'>
                    <span className='font-semibold text-3xl sm:text-3xl'>
                        <span className='text-[#63e]'>&lt;</span>
                        PassKey
                        <span className='text-[#63e]'>&nbsp;/&gt;</span>
                    </span>
                    <span>Your own Password Manager</span>
                </div>
                <div className='w-full flex flex-col gap-8'>
                    <div className='flex flex-col gap-1 relative'>
                        <label htmlFor="site" className='absolute text-[0.8rem] text-[#757575] bg-[#000] px-4 top-[-10px] left-[40px]'>Enter Site Link</label>
                        <input onChange={HandleChange} value={form.site} minLength={4} name="site" id='site' type="link" className='w-full rounded-full outline-none focus-visible:outline-none bg-transparent border-2 border-[#151515] shadow-md focus:border-[#63e] transition-all px-6 py-2 text-sm' />
                    </div>
                    <div className='w-full flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between'>
                        <div className='flex flex-col gap-1 relative'>
                            <label htmlFor="username" className='absolute text-[0.8rem] text-[#757575] bg-[#000] px-4 top-[-10px] left-[40px]'>Enter Username or Email</label>
                            <input onChange={HandleChange} value={form.username} minLength={4} name="username" id='username' type="text" className='w-full md:min-w-[450px] rounded-full outline-none focus-visible:outline-none bg-transparent border-2 border-[#151515] shadow-md focus:border-[#63e] transition-all px-6 py-2 text-sm' />
                        </div>
                        <div className='flex flex-col gap-1 relative'>
                            <label htmlFor="password" className='absolute text-[0.8rem] text-[#757575] bg-[#000] px-4 top-[-10px] left-[40px]'>Enter Password</label>
                            <input onChange={HandleChange} value={form.password} minLength={8} ref={InputRef} name="password" id='password' type="password" className='w-full md:min-w-[450px] rounded-full outline-none focus-visible:outline-none bg-transparent border-2 border-[#151515] shadow-md focus:border-[#63e] transition-all px-6 py-2 text-sm' />
                            <span onClick={TogglePassword} className="text-[#63e] w-9 flex items-center justify-center absolute top-2 right-4 pl-3 border-[#151515] border-l-2 cursor-pointer">
                                {ShowPassword ? <IoMdEye className="w-full h-full" /> : <IoMdEyeOff className="w-full h-full" />}
                            </span>
                        </div>
                    </div>
                    <button className='border-[#63e] border-2 hover:bg-[#63e] bg-transparent transition-all rounded-full text-center flex items-center justify-center gap-2 py-2 px-8 m-auto'>
                        <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover" colors="primary:#fff,secondary:#000"></lord-icon>
                        <span onClick={SavePassword} className='text-white font-semibold pb-[0.15rem]'>Add Password</span>
                    </button>
                </div>
                <div className="flex flex-col items-center gap-4 w-full pt-10 border-t-2 border-opacity-10 border-white">
                    {PasswordArray == 0 && <div className="text-white text-sm">No Passwords to Show Here</div>}
                    {PasswordArray && PasswordArray != 0 && PasswordArray?.map((item, index) => {
                        return (<div key={index} className="group flex flex-row items-center gap-4 w-full h-36 sm:h-44 px-5 py-4 backdrop-blur-sm backdrop-filter bg-[#101010] bg-gradient-to-br bg-opacity-50 border border-opacity-5 border-white rounded-xl">
                            <div className="h-full aspect-square rounded-lg flex items-center justify-center">
                                <img src="https://www.youtube.com/" alt="Site Logo" className="w-full h-full aspect-square bg-slate-950 rounded-lg flex items-center justify-center" />
                            </div>
                            <div className="h-full w-full flex flex-col items-start py-4 gap-1">
                                <div className="flex flex-row items-start justify-between w-full">
                                    <a href={item.site} className="text-xl sm:text-2xl font-semibold sm:pb-2 transition-all">{item.site}</a>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-md w-full">
                                    <span className="">{item.username}</span>
                                    <span className="">{item.password}</span>
                                </div>
                            </div>
                            <div className="cursor-pointer flex flex-col items-end h-full justify-between gap-4 relative -top-0">
                                <span onClick={() => { CopyText(item.username, item.password) }} className="flex items-center justify-center">
                                    <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" colors="primary:#63e,secondary:#000"></lord-icon>
                                </span>
                                <span className={`flex flex-col gap-4 items-end transition-all opacity-0 group-hover:opacity-100`}>
                                    <span onClick={() => { DeletePassword(item.id) }} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-all bg-transparent sm:hover:bg-[#63e] p-1 rounded-full">
                                        <lord-icon src="https://cdn.lordicon.com/skkahier.json" trigger="hover" colors="primary:#fff,secondary:#000" style={{ width: "1.5rem", height: "1.5rem" }}></lord-icon>
                                    </span>
                                    <span onClick={() => { EditPassword(item.id) }} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-all bg-transparent sm:hover:bg-[#63e] p-1 rounded-full">
                                        <lord-icon src="https://cdn.lordicon.com/gwlusjdu.json" trigger="hover" colors="primary:#fff,secondary:#000" style={{ width: "1.5rem", height: "1.5rem" }}></lord-icon>
                                    </span>
                                </span>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Manager

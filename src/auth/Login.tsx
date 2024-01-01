import React from 'react'

type Props = {
  setUser: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = (props: Props) => {
  const { setUser } = props

  const handleLogin = () => {
    setUser(true)
  }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,.7)] opacity-80 flex justify-center items-center'>
      <div className='bg-white w-[450px] h-[450px] p-[20px] rounded-lg flex '>
        <form className='w-full rounded-lg flex flex-col gap-[25px]'>
          <div className='flex flex-col gap-[20px]'>
            <label htmlFor='username' className='font-mediun uppercase text-lg'>
              Username
            </label>
            <input
              type='text'
              id='username'
              className='p-[15px] border-[rgba(93,87,198,0.56)] focus:border-[rgb(26,82,204)]  focus:shadow-md border-[2px] rounded-lg outline-none'
              placeholder='Nhập username....'
            />
          </div>

          <div className='flex flex-col gap-[20px]'>
            <label htmlFor='password' className='font-mediun uppercase text-lg'>
              Mật khẩu
            </label>
            <input
              type='password'
              id='password'
              className='p-[15px] border-[rgba(93,87,198,0.56)] focus:border-[rgb(26,82,204)] focus:shadow-md border-[2px] rounded-lg outline-none'
              placeholder='Nhập password'
            />
          </div>
          <span>Bạn chưa có tài khoản ?</span>
          <button
            onClick={handleLogin}
            className='bg-[rgba(93,87,198,0.56)] hover:bg-blue-900 transition-all duration-700 p-[15px] w-[40%] flex items-center justify-center text-white rounded-lg'
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

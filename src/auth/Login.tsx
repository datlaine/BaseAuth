import React from 'react'
import { useForm } from 'react-hook-form'

type IDefaultValues = {
  email: string
  password: string
}

const intialValue: IDefaultValues = { email: '', password: '' }

type Props = {
  setMode?: React.Dispatch<React.SetStateAction<string>>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Login = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setMode } = props
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IDefaultValues>({ defaultValues: intialValue })
  console.log('re-render')
  const handleLogin = () => {
    // setUser(true)
  }

  const navigateHandle = () => {
    if (setMode) {
      setMode('Register')
    }
  }

  const onSubmit1 = (data: IDefaultValues) => {
    console.log(data)
  }

  return (
    <form className='w-full rounded-lg flex flex-col gap-[25px]' onSubmit={handleSubmit(onSubmit1)}>
      <div className='flex flex-col gap-[8px]'>
        <label htmlFor='email' className='font-mediun uppercase text-lg'>
          Email
        </label>
        <input
          {...register('email', {
            required: { value: true, message: 'Email is required' },
            // eslint-disable-next-line no-useless-escape
            pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Email không đúng định dạng' },
            shouldUnregister: true
          })}
          type='text'
          id='email'
          className='p-[15px] border-[rgba(93,87,198,0.56)] focus:border-[rgb(26,82,204)]  focus:shadow-md border-[2px] rounded-lg outline-none'
          placeholder='Nhập email....'
        />
        {errors.email && <span className='errors'>{errors.email.message}</span>}
      </div>

      <div className='flex flex-col gap-[8px]'>
        <label htmlFor='password' className='font-mediun uppercase text-lg'>
          Mật khẩu
        </label>
        <input
          {...register('password', {
            required: { value: true, message: 'Password is required' },
            minLength: { value: 5, message: 'Password min 5 word' },
            maxLength: { value: 50, message: 'Password max 50 word' },
            shouldUnregister: true
          })}
          type='password'
          id='password'
          className='p-[15px] border-[rgba(93,87,198,0.56)] focus:border-[rgb(26,82,204)] focus:shadow-md border-[2px] rounded-lg outline-none'
          placeholder='Nhập password'
        />

        {errors.password && <span className='errors'>{errors.password.message}</span>}
      </div>
      <p>
        Bạn chưa có tài khoản ?{' '}
        <span onClick={navigateHandle} className='btn'>
          Đăng kí
        </span>
      </p>
      <button
        type='submit'
        onClick={handleLogin}
        className='bg-[rgba(93,87,198,0.56)] hover:bg-blue-900 transition-all duration-700 p-[15px] w-[40%] flex items-center justify-center text-white rounded-lg'
      >
        Đăng nhập
      </button>
    </form>
  )
}

export default Login

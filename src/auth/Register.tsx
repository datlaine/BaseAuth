import React from 'react'
import { useForm } from 'react-hook-form'

type Props = {
  setMode?: React.Dispatch<React.SetStateAction<string>>
}

type IDefaultValue = {
  email: string
  password: string
  confirm_password: string
}

const initialValue: IDefaultValue = {
  email: '',
  password: '',
  confirm_password: ''
}

const Register = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setMode } = props

  const {
    register,
    //     getValues,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<IDefaultValue>({ defaultValues: initialValue })
  console.log(errors)
  const navigateLogin = () => {
    if (setMode) setMode('login')
  }

  //   const handleRegister = () => {
  //     alert('Register...')
  //   }

  const onSubmit = (data: IDefaultValue) => {
    console.log(errors, data)
    let clear: NodeJS.Timeout
    const a = new Promise((res) => {
      clear = setTimeout(() => {
        reset(), res('Ok submit')
      }, 2000)
    })
    a.then((b) => {
      alert(b)
      clearTimeout(clear as NodeJS.Timeout)
    })
  }

  return (
    <form
      className={`w-full rounded-lg flex flex-col ${Object.keys(errors).length === 0 ? 'gap-[35px]' : 'gap-[25px]'}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`flex flex-col  ${Object.keys(errors).length === 0 ? 'gap-[12px]' : 'gap-[8px]'} `}>
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
      <div className={`flex flex-col ${Object.keys(errors).length === 0 ? 'gap-[12px]' : 'gap-[8px]'}  `}>
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
      <div className={`flex flex-col ${Object.keys(errors).length === 0 ? 'gap-[12px]' : 'gap-[8px]'} `}>
        <label htmlFor='confirm_password' className='font-mediun uppercase text-lg'>
          Xác nhận mật khẩu
        </label>
        <input
          {...register('confirm_password', {
            required: { value: true, message: 'Confirm password is required' },
            minLength: { value: 5, message: 'Confirm password min 5 word' },
            maxLength: { value: 50, message: 'Confirm password max 50 word' },
            validate: {
              matchPassword: (confirmPassword) => {
                const pass = watch('password')
                console.log(pass)
                return pass === confirmPassword || 'Not mactch'
              }
            },
            shouldUnregister: true
          })}
          type='password'
          id='confirm_password'
          className='p-[15px] border-[rgba(93,87,198,0.56)] focus:border-[rgb(26,82,204)] focus:shadow-md border-[2px] rounded-lg outline-none'
          placeholder='Nhập password'
        />
        {errors.confirm_password && <span className='errors'>{errors.confirm_password.message}</span>}
      </div>
      <p>
        Bạn đã có tài khoản ?{' '}
        <span onClick={navigateLogin} className='btn'>
          Đăng nhập
        </span>
      </p>
      <button
        type='submit'
        //   onClick={handleRegister}
        className='bg-[rgba(93,87,198,0.56)] hover:bg-blue-900 transition-all duration-700 p-[15px] w-[40%] flex items-center justify-center text-white rounded-lg'
      >
        Đăng kí
      </button>
    </form>
  )
}

export default Register

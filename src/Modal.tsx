import React, { useEffect, useRef, useState } from 'react'

type TProps = {
  setShowModel: React.Dispatch<React.SetStateAction<boolean>>
  id: number
}

const Modal = (props: TProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isActiveId, setIsActiveId] = useState(props.id || 0)

  const handleClickItem = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event.target)
    const bg = event.currentTarget.getAttribute('data-bg')
    const id = Number(event.currentTarget.getAttribute('data-id'))
    console.log(id)
    if (divRef.current) {
      divRef.current.style.backgroundColor = `${bg}`
      divRef.current.style.transition = 'background 1s'
    }
    setIsActiveId(id)
  }

  useEffect(() => {
    const target = document.querySelectorAll('.item')[props.id].getAttribute('data-bg')
    console.log(document.querySelectorAll('.item'), props.id, target)
    if (divRef.current) {
      divRef.current.style.backgroundColor = `${target}`
      divRef.current.style.transition = 'background 1s'
    }
  }, [props.id])

  return (
    <div className='w-full h-full bg-[rgba(0,0,0,.9)] fixed left-0 bottom-0'>
      <div className='wrapper relative flex items-center justify-center w-full h-full'>
        <button
          className='absolute right-4 top-4 w-[65px] h-[35px] rounded-md z-10 bg-white'
          onClick={() => props.setShowModel(false)}
        >
          Close X
        </button>

        <div className='pl-[50px] pt-[50px] flex flex-col gap-[40px]'>
          <div className={`$bg-red-500 w-[850px] h-[450px]`} ref={divRef}></div>
          <div className='wrapper flex gap-[20px] w-full justify-center'>
            <div
              onClick={handleClickItem}
              data-bg={'rgb(34, 197, 94)'}
              data-id={0}
              className={`item bg-green-500 w-[50px] h-[50px] ${isActiveId === 0 ? 'isActive' : ''}`}
            ></div>
            <div
              onClick={handleClickItem}
              data-bg={'rgb(234, 179,8)'}
              data-id={1}
              className={`item bg-yellow-500 w-[50px] h-[50px] ${isActiveId === 1 ? 'isActive' : ''}`}
            ></div>
            <div
              onClick={handleClickItem}
              data-bg={'rgb(59, 130 ,246)'}
              data-id={2}
              className={`item bg-blue-500 w-[50px] h-[50px] ${isActiveId === 2 ? 'isActive' : ''}`}
            ></div>
            <div
              onClick={handleClickItem}
              data-bg={'rgb(249,115,22)'}
              data-id={3}
              className={`item bg-orange-500 w-[50px] h-[50px] ${isActiveId === 3 ? 'isActive' : ''}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

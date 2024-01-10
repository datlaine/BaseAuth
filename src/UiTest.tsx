import React, { useRef, useState } from 'react'
import Modal from './Modal'
import { createPortal } from 'react-dom'

const UiTest = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isActiveId, setIsActiveId] = useState(0)
  const [showModal, setShowModel] = useState(false)
  const body = document.getElementsByTagName('body')[0]

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

  const openCloseModel = () => {
    setShowModel((prev) => !prev)
  }

  return (
    <div className='pl-[50px] pt-[50px] flex flex-col gap-[40px]'>
      <div className='bg-red-500 w-[250px] h-[250px]' ref={divRef} onClick={() => setShowModel(true)}></div>
      <div className='wrapper flex gap-[20px]'>
        <div
          onClick={handleClickItem}
          data-bg={'rgb(34, 197, 94)'}
          data-id={0}
          className={`bg-green-500 w-[50px] h-[50px] ${isActiveId === 0 ? 'isActive' : ''}`}
        ></div>
        <div
          onClick={handleClickItem}
          data-bg={'rgb(234, 179,8)'}
          data-id={1}
          className={`bg-yellow-500 w-[50px] h-[50px] ${isActiveId === 1 ? 'isActive' : ''}`}
        ></div>
        <div
          onClick={handleClickItem}
          data-bg={'rgb(59, 130 ,246)'}
          data-id={2}
          className={`bg-blue-500 w-[50px] h-[50px] ${isActiveId === 2 ? 'isActive' : ''}`}
        ></div>
        <div
          onClick={handleClickItem}
          data-bg={'rgb(249,115,22)'}
          data-id={3}
          className={`bg-orange-500 w-[50px] h-[50px] ${isActiveId === 3 ? 'isActive' : ''}`}
        ></div>
      </div>

      <button className='btn' onClick={openCloseModel}>
        Mở Modal
      </button>
      {showModal && createPortal(<Modal setShowModel={setShowModel} id={isActiveId}></Modal>, body)}
      <div className='bg-red-600 h-[1750px] flex gap-[55px]'>
        <div className='sticky top-[25px] left h-[450px] w-[30%] bg-yellow-600'></div>
        <div className='right h-[1000px] w-[45%] bg-cyan-600'></div>
      </div>
      <div className='h-[4500px]'></div>
    </div>
  )
}

export default UiTest

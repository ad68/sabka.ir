'use client'
import useModalKit from './modalKit.biz'
import { ModalProps } from './moadlKit.types'
import { XIcon } from 'lucide-react'
export default function CustomModal({ children, open, onClose, width }: ModalProps) {
  const { modalWrapper, modalOverlay, modalBox, showChildren } =
    useModalKit(open)

  return (
    <div
      ref={modalWrapper}
      className="
        fixed top-0 left-0 h-full w-full max-w-full hidden
        justify-center items-center z-[9995]
      "
    >
      {/* Overlay */}
      <div
        ref={modalOverlay}
        onClick={onClose}
        className="
          absolute top-0 left-0 w-full h-full z-[5]
          bg-[#4d4d4d7e] 
          transition-all duration-300 ease-in-out opacity-0
        "
      />

      {/* Modal Box */}
      <div
        ref={modalBox}
        style={{ width: width ? `${width}px` : '500px', maxWidth: '93%' }}
        className="relative z-[1000]
         rounded-[10px] max-h-full overflow-auto
          px-6 lg:px-8 py-6 lg:py-8
          transition-all duration-300 ease-in-out
          transform scale-0
        "
      >
        {/* Close Button */}
        <div
          onClick={onClose}
          className="
            absolute top-0 bg-white right-[17px]
            w-6 h-6 rounded-full cursor-pointer
            transition-all duration-300 ease-in-out z-10
            flex items-center justify-center
          "
        >
          <XIcon className="text-gray-400 w-6 h-6" />
        </div>

        {/* Children */}
        {showChildren && <div>{children}</div>}
      </div>
    </div>
  )
}



import React, { useState } from 'react'
import{ FileStructure } from '../App'

export default function File({file}: {file: FileStructure}): React.ReactNode {
  const [showFile, setShowFile] = useState(false)

  return (
    <div className='ml-[10px]'>
      <div className='cursor-default'>
        {file.children.length === 0 && <span className='mr-[2px]'>&nbsp;&nbsp;</span>}
        {file.children.length >0 && <span className='cursor-pointer' onClick={()=> setShowFile(pre => !pre)}>{showFile ? '-':'+'}</span>}
        <span className=''>
        {file.name}
        </span>
      </div>
      {
        showFile && file.children.map(file =>{
          return(
            <File file={file} />
          )
        })
      }
    </div>
  )
}

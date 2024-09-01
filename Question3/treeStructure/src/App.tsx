import File from './Component/File'
export type FileStructure = {
  name: string,
  children: Array<FileStructure>
}


const file : FileStructure = {
  name:'Quesiton3',
  children: [
    {
      name:"File1",
      children: [
        {
          name:'innerFile',
          children:[]
        }
      ]
    },
    {
      name:'File2',
      children:[
        {
          name:"innerFile1",
          children: [
          {
            name:"innerInnerFile1",
            children:[]
          },{
            name:"innerInnerFile2",
            children:[
              {
                name:"innerInnerInnerFile",
                children: []
              }
            ]
          },
          {
            name:"innerFile3",
            children: []
          }

        ]
        },
        {
          name:'innerFile2',
          children: []
        }
      ]
    },
    {
      name:"File3",
      children: []
    }
  ]
}

function App() {
  
  
  return (
   <main>
      <File file={file} />
   </main>
  )
}

export default App

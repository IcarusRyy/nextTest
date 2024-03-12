"use client"
import { Timeline } from "@xzdarcy/react-timeline-editor"
import { useState } from "react"
import { ReactSortable } from "../../../component/sortable"
interface ItemType {
  id: number
  name: string
}
const Test = () => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: "shrek" },
    { id: 2, name: "fiona" },
  ])
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex">
          <div className="w-52 h-52 grid grid-cols-3 gap-2 justify-center items-center bg-gray-300 p-2">
            <div className="w-10 h-10 bg-red-500">drag</div>
            <div className="w-10 h-10 bg-red-500">drag</div>
            <div className="w-10 h-10 bg-red-500">drag</div>
            <div className="w-10 h-10 bg-red-500">drag</div>
            {/* 其他子元素 */}
          </div>
          <div className=" ml-10 w-96 h-52 bg-blue-300">
            {/* <Timeline editorData={[]} effects={{}} hideCursor={false} /> */}
            <ReactSortable list={state} setList={setState}>
              {state.map((item) => (
                <span className="bg-red-500" key={item.id}>
                  {item.name}
                </span>
              ))}
            </ReactSortable>
          </div>
          {/* 高度等于左侧div */}
        </div>
      </div>
    </>
  )
}
export default Test

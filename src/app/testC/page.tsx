"use client"
import { cloneDeep } from "lodash"
import React, { useEffect, useState } from "react"
import "./index.scss"
import { mockData, mockEffect } from "./mock"
import { Timeline } from "../../../component/timeline"

const defaultEditorData = cloneDeep(mockData)

const TimelineEditor = () => {
  const [data, setData] = useState(defaultEditorData)

  return (
    <div className="timeline-editor-example0">
      <Timeline
        onChange={setData}
        editorData={data}
        effects={mockEffect}
        hideCursor={false}
        autoScroll={true}
      />
    </div>
  )
}

export default TimelineEditor

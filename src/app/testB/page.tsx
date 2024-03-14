"use client"
import React, { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const initialTracks = [
  {
    id: "track-1",
    items: [
      { id: "item-1", content: "Item 1" },
      { id: "item-2", content: "Item 2" },
    ],
  },
  {
    id: "track-2",
    items: [{ id: "item-3", content: "Item 3" }],
  },
]

const App = () => {
  const [tracks, setTracks] = useState<any[]>(initialTracks)

  const onDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) {
      return
    }

    const sourceTrack: any = tracks.find(
      (track) => track.id === source.droppableId
    )
    const destTrack: any = tracks.find(
      (track) => track.id === destination.droppableId
    )
    const sourceItems = Array.from(sourceTrack.items)
    const [removedItem] = sourceItems.splice(source.index, 1)

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removedItem)
      setTracks(
        tracks.map((track) =>
          track.id === sourceTrack.id ? { ...track, items: sourceItems } : track
        )
      )
    } else {
      const destItems = Array.from(destTrack.items)
      destItems.splice(destination.index, 0, removedItem)
      setTracks(
        tracks.map((track) => {
          if (track.id === sourceTrack.id) {
            return { ...track, items: sourceItems }
          } else if (track.id === destTrack.id) {
            return { ...track, items: destItems }
          } else {
            return track
          }
        })
      )
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {tracks.map((track, trackIndex) => (
        <Droppable droppableId={track.id} key={track.id}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                padding: "10px",
                background: "#f0f0f0",
                marginBottom: "10px",
              }}
            >
              <h2>{`Track ${trackIndex + 1}`}</h2>
              {track.items.map((item: any, index: any) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        userSelect: "none",
                        padding: "16px",
                        margin: "0 0 8px 0",
                        backgroundColor: "#ffffff",
                        ...provided.draggableProps.style,
                      }}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  )
}

export default App

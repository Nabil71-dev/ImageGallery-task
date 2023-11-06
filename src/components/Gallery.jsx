import React, { useState } from 'react';
import { DndContext, closestCenter, MouseSensor, TouchSensor, DragOverlay, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

import Grid from './gallery/Grid';
import SortablePhoto from './gallery/SortablePhoto';
import { Photo } from './gallery/Photo';
import FileUpload from './File.upload';

const Gallery = ({ items, setItems, selected, setSelected }) => {
    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    }

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active?.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active?.id);
                const newIndex = items.indexOf(over?.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
        setActiveId(null);
    }

    const handleDragCancel = () => {
        setActiveId(null);
    }

    const addItem = (imgData) => {
        setItems([...items, imgData]);
    };

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragCancel={handleDragCancel} >
            <SortableContext items={items} strategy={rectSortingStrategy}>
                <Grid>
                    {items?.map((item, index) => (
                        <SortablePhoto key={item} url={item} index={index} selected={selected} setSelected={setSelected} />
                    ))}
                    <FileUpload addItem={addItem} />
                </Grid>
            </SortableContext>

            <DragOverlay adjustScale={true}>
                {activeId ? (
                    <Photo url={activeId} index={items?.indexOf(activeId)} />
                ) : null}
            </DragOverlay>
        </DndContext>
    );
};

export default Gallery;
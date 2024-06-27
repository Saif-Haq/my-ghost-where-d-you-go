import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5050'); // Adjust the URL according to your server address

export const CursorTracker = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (event: any) => {
    const line = [{ x: event.clientX, y: event.clientY }];
    socket.emit('draw_cursor', { line });
  };

  document.addEventListener('mousemove', handleMouseMove);

  useEffect(() => {
    const getCursorElement = (id: number) => {
      const elementId = 'cursor-' + id;
      let element = document.getElementById(elementId);
      if (!element) {
        element = document.createElement('div');
        element.id = elementId;
        element.className = 'cursor app';
        document.body.appendChild(element);
      }
      return element;
    };

    socket.on('draw_cursor', (data) => {
      const el = getCursorElement(data.id);
      el.style.left = data.line[0].x + 'px';
      el.style.top = data.line[0].y + 'px';
    });

    return () => {
      socket.off('draw_cursor');
    };
  }, []);

  return null;
};
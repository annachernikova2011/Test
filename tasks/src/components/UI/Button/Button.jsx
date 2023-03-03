import React from 'react';

export default function Button({ send }) {
  return (
    <button onClick={send} type="button">Добавить</button>
  );
}

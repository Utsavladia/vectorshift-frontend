// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      title="Text"
      fields={[
        {
          key: 'text',
          label: 'Text:',
          type: 'text',
          value: currText,
          onChange: e => setCurrText(e.target.value),
        },
      ]}
      handles={[
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    />
  );
};

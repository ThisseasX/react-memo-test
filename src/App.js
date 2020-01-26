import React, { useState, memo } from 'react';
import { getRandomColor } from './util';

const SubText = ({ subText }) => {
  return <div style={{ backgroundColor: getRandomColor() }}>{subText}</div>;
};

// By memo-ing the Text component, it's entire sub-tree
// is spared from unnecessary renders, by skipping them
// when the new `text` prop it receives is identical to the
// previous one.
const Text = memo(({ text }) => {
  return (
    <div style={{ backgroundColor: getRandomColor(), padding: '24px' }}>
      {text}
      <SubText subText={`SubText: ${text}`} />
    </div>
  );
});

function App() {
  const [booleans, setBooleans] = useState({ a: true, b: true });

  const text1 = booleans.a ? 'Text1' : 'Text1 Awesome';
  const text2 = booleans.b ? 'Text2' : 'Text2 Awesome';

  return (
    <>
      <Text text={text1} />
      <Text text={text2} />
      <button
        onClick={() => {
          setBooleans(state => ({ ...state, a: !state.a }));
        }}
      >
        Change Sub1
      </button>
      <button
        onClick={() => {
          setBooleans(state => ({ ...state, b: !state.b }));
        }}
      >
        Change Sub2
      </button>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

const MyComponent: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    WebAssembly.instantiateStreaming(fetch('/computation.wasm')).then((obj) => {
      // Call an exported function:
      const exports = obj.instance.exports;

      // or access the elements of an exported table:
      const table = obj.instance.exports.table;
      console.log(table, exports);
    });
    // const loadWasm = async () => {
    //   const wasmModule = await import('../utils/computation.wasm');
    //   const instance = await wasmModule();

    //   // Call the C++ function
    //   const computationResult = instance._performComputation(5, 3); // Example values
    //   setResult(computationResult);
    // };

    // loadWasm();
  }, []);

  return <div>Computation Result: {result}</div>;
};

export default MyComponent;

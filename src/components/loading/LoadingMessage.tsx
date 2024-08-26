import { useEffect } from 'react';

type LoadingMessageParams = { setIsFirstLoad: React.Dispatch<React.SetStateAction<boolean>> };

export default function LoadingMessage({ setIsFirstLoad }: LoadingMessageParams) {
  useEffect(() => {
    setIsFirstLoad(false);
  }, [setIsFirstLoad]);
  return (
    <div
      style={{ padding: '10px', backgroundColor: 'blue', margin: 'auto' }}
    >
      <h1>Loading</h1>
    </div>
  );
}

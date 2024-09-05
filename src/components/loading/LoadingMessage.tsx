import { useEffect } from 'react';

type LoadingMessageParams = { setIsFirstLoad: React.Dispatch<React.SetStateAction<boolean>> };

export default function LoadingMessage({ setIsFirstLoad }: LoadingMessageParams) {
  useEffect(() => {
    setIsFirstLoad(false);
  }, [setIsFirstLoad]);
  return (
    <div
      id="loadingMessage"
    // style={{ padding: '10px', margin: 'auto' }}
    >
      <div>
        <h1>Loading</h1>
        <img src="/assets/loading/loading.svg" alt="" />
      </div>
    </div>
  );
}
